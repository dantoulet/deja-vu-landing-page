import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Newsletter } from "./Newsletter";
import { useNewsletterPopup } from "@/hooks/useNewsletterPopup";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

type NewsletterTranslation = typeof translations.en.author.newsletter;

export const NewsletterDialog = () => {
  const { isOpen, onClose } = useNewsletterPopup();
  const { t } = useLanguage();
  const newsletter = t<NewsletterTranslation>('author', 'newsletter');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-center">
            {newsletter.title}
          </DialogTitle>
        </DialogHeader>
        <Newsletter hideTitle />
      </DialogContent>
    </Dialog>
  );
};
