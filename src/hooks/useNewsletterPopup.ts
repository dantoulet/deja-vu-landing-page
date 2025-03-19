import { useEffect, useState } from 'react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

const NEWSLETTER_SUBSCRIBED_KEY = 'newsletter-subscribed';

export const useNewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { consent } = useCookieConsent();

  useEffect(() => {
    if (!consent) return;
    
    const isSubscribed = localStorage.getItem(NEWSLETTER_SUBSCRIBED_KEY) === 'true';
    if (!isSubscribed) {
      setIsOpen(true);
    }
  }, [consent]);

  const onClose = () => {
    setIsOpen(false);
    // Store subscription status when closed after successful subscription
    localStorage.setItem(NEWSLETTER_SUBSCRIBED_KEY, 'true');
  };

  return {
    isOpen,
    onClose
  };
};
