import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieConsent } from "@/components/CookieConsent";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";

const Terms = lazy(() => import("./pages/Terms"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CookieConsentProvider>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/terms" element={<Suspense fallback={<div>Loading...</div>}><Terms /></Suspense>} />
              <Route path="/cookie-policy" element={<Suspense fallback={<div>Loading...</div>}><CookiePolicy /></Suspense>} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
      <CookieConsent />
    </LanguageProvider>
    </CookieConsentProvider>
  </QueryClientProvider>
);

export default App;
