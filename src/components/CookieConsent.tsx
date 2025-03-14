import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

export function CookieConsent() {
  const { consent, setConsent } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if consent hasn't been given
    if (!consent) {
      // Small delay to prevent flash on first load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [consent]);

  if (!isVisible || consent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/5 backdrop-blur-sm dark:bg-white/5">
      <div className="container mx-auto flex items-center justify-between px-4">
        <p className="text-xs text-gray-600 dark:text-gray-300">
          This site uses essential cookies for basic functionality.{" "}
          <a href="/cookie-policy" className="underline text-primary hover:text-primary/90">
            Details
          </a>
        </p>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs"
            onClick={() => {
              setConsent(true);
              setIsVisible(false);
            }}
          >
            Got It
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs"
            onClick={() => {
              setConsent(false);
              setIsVisible(false);
            }}
          >
            Refuse
          </Button>
        </div>
      </div>
    </div>
  );
}
