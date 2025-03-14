import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

type NewsletterTranslation = typeof translations.en.author.newsletter;

export const Newsletter = ({ hideTitle = false }: { hideTitle?: boolean }) => {
  const [email, setEmail] = useState('');
  const { t } = useLanguage();

  const newsletter = t<NewsletterTranslation>('author', 'newsletter');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: newsletter.toast.title,
      description: newsletter.toast.description,
    });
    setEmail('');
  };

  return (
    <div className="sm:mb-36 md:mb-16 w-full max-w-md mx-auto animate-fadeIn">
      {!hideTitle && (
        <div className="mb-12 sm:mb-6">
          <h3 className="text-2xl font-tiltwarp text-primary uppercase text-center">
            {newsletter.title}
          </h3>
        </div>
      )}
      <p className="text-black/80 font-times text-center mb-8 sm:mb-4 px-4 sm:px-6 lg:px-0">
        {newsletter.description}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder={newsletter.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border-primary/20 font-times text-black placeholder:text-black/60"
          required
        />
        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-tiltwarp uppercase">
          {newsletter.button}
        </Button>
      </form>
    </div>
  );
};
