import { useState } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { toast } from "@/components/ui/use-toast";

type NewsletterTranslation = typeof translations.en.author.newsletter;

export const Newsletter = ({ hideTitle = false, onClose }: { hideTitle?: boolean; onClose?: () => void }) => {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const newsletter = t<NewsletterTranslation>('author', 'newsletter');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://admin.audrianacristello.com/subscription/form', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Add no-cors mode to handle cross-origin requests
      });
      
      // Always show success since we can't read the response in no-cors mode
      toast({
        title: newsletter.toast.title,
        description: newsletter.toast.description,
        duration: 3000, // 3 seconds
      });
      // Store subscription status
      localStorage.setItem('newsletter-subscribed', 'true');
      form.reset();
      onClose?.();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 3000, // 3 seconds
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto animate-fadeIn">
      {!hideTitle && (
        <div className="mb-2">
          <h3 className="text-2xl font-tiltwarp text-primary uppercase text-left">
            {newsletter.title}
          </h3>
        </div>
      )}
      <p className="text-black/80 font-times text-left mb-2 sm:mb-1">
        {newsletter.description}
      </p>
      <form onSubmit={handleSubmit} className="listmonk-form">
        <input type="hidden" name="nonce" />
        <input type="hidden" name="l" value="6a71a4b9-70a7-46da-8a3f-a8224cb80808" />
        <input
          type="email"
          name="email"
          placeholder={newsletter.placeholder}
          className="bg-white/10 border-primary/20 font-times text-black placeholder:text-black/60 w-full px-3 py-2 border rounded-md mb-3"
          required
        />
        <button 
          type="submit" 
          disabled={submitting}
          className="w-full bg-primary text-white hover:bg-primary/90 font-tiltwarp uppercase px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {newsletter.button}
        </button>
      </form>
    </div>
  );
};
