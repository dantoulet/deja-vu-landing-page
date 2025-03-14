import React, { createContext, useContext, useState, useEffect } from 'react';

interface CookieConsentContextType {
  consent: boolean;
  setConsent: (value: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<boolean>(() => {
    const stored = localStorage.getItem('cookieConsent');
    return stored === 'true';
  });

  useEffect(() => {
    localStorage.setItem('cookieConsent', consent.toString());
  }, [consent]);

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
