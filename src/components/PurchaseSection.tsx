import { useLanguage } from "@/contexts/LanguageContext";

export const PurchaseSection = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="purchase-section" className="container mx-auto min-h-screen relative flex items-center px-3 sm:px-4 md:px-6" itemScope itemType="https://schema.org/Book">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center py-6 sm:py-8 lg:py-12">
        <div className="w-full flex justify-center animate-fadeIn">
          <div className="w-full max-w-[260px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[400px]">
            <img
              src={language === 'fr' ? '/images/deja-vu-french-book-cover.webp' : '/images/deja-vu-book-cover.webp'}
              alt={language === 'fr' ? 'Couverture du livre Déjà Vu' : 'Déjà Vu Book Cover'}
              itemProp="image"
              className="w-full h-auto shadow-2xl rounded transition-transform hover:scale-105 duration-300"
            />
          </div>
        </div>
        <div className="text-left space-y-4 sm:space-y-6 lg:space-y-8 animate-fadeIn">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-tiltwarp mb-2 sm:mb-4 text-primary uppercase" itemProp="name">
            {t('purchase', 'title')}
          </h2>
          <p className="text-base sm:text-lg text-black/80 leading-relaxed px-4 sm:px-6 lg:px-0" itemProp="description">
            {t('purchase', 'description')}
          </p>
          <nav className="space-y-2 sm:space-y-3 md:space-y-4" aria-label={t('purchase', 'title')}>
            <a
              href="#" // TODO: Add Amazon link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-[#FF9900] text-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg text-sm sm:text-base font-semibold font-tiltwarp uppercase hover:bg-[#FF9900]/90 transition-all hover:scale-[1.02]"
              aria-label={`${t('purchase', 'platforms.amazon')} - ${t('purchase', 'title')}`}
              itemProp="offers" itemScope itemType="https://schema.org/Offer"
            >
              <img src="/images/amazon-logo-white.svg" alt="Amazon" className="h-6" />
              {t('purchase', 'platforms.amazon')}
            </a>
            <a
              href="#" // TODO: Add Apple Books link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-black text-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg text-sm sm:text-base font-semibold font-tiltwarp uppercase hover:bg-black/90 transition-all hover:scale-[1.02]"
              aria-label={`${t('purchase', 'platforms.appleBooks')} - ${t('purchase', 'title')}`}
              itemProp="offers" itemScope itemType="https://schema.org/Offer"
            >
              <img src="/images/apple-books-logo-white.svg" alt="Apple Books" className="h-6" />
              {t('purchase', 'platforms.appleBooks')}
            </a>
            <a
              href="#" // TODO: Add Barnes & Noble link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-[#046A38] text-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg text-sm sm:text-base font-semibold font-tiltwarp uppercase hover:bg-[#046A38]/90 transition-all hover:scale-[1.02]"
              aria-label={`${t('purchase', 'platforms.barnesNoble')} - ${t('purchase', 'title')}`}
              itemProp="offers" itemScope itemType="https://schema.org/Offer"
            >
              <img src="/images/barnes-noble-logo-white.svg" alt="Barnes & Noble" className="h-6" />
              {t('purchase', 'platforms.barnesNoble')}
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};
