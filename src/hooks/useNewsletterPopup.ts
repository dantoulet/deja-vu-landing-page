import { useEffect, useState } from 'react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

const NEWSLETTER_POPUP_KEY = 'newsletter-last-shown';
const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const useNewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { consent } = useCookieConsent();

  useEffect(() => {
    if (!consent) return;
    const lastShown = localStorage.getItem(NEWSLETTER_POPUP_KEY);
    
    if (!lastShown) {
      // First visit
      setIsOpen(true);
      if (consent) {
        localStorage.setItem(NEWSLETTER_POPUP_KEY, Date.now().toString());
      }
    } else {
      const lastShownDate = parseInt(lastShown);
      const now = Date.now();
      
      if (now - lastShownDate >= ONE_DAY_MS) {
        // More than a day has passed
        setIsOpen(true);
        localStorage.setItem(NEWSLETTER_POPUP_KEY, now.toString());
      }
    }
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onClose
  };
};
