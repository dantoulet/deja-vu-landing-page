import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Reviews } from "@/components/Reviews";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Typewriter from 'typewriter-effect';

interface HeroSectionProps {
  showHeroChevron: boolean;
  scrollToStory: () => void;
  scrollToPurchase: () => void;
}

export const HeroSection = ({ showHeroChevron, scrollToStory, scrollToPurchase }: HeroSectionProps) => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
      <LanguageSelector />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch w-full h-full" role="banner">
        <div className="block lg:hidden w-full">
          <Carousel 
            className="w-full"
            opts={{
              loop: true,
              align: "center",
              skipSnaps: true,
              dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                rootNode: (emblaRoot) => emblaRoot,
              }) as any
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="aspect-[4/3] md:aspect-[16/9]">
                  <img
                    src="/images/deja-vu-book-cover.jpg"
                    alt="Déjà Vu Book Cover - English Edition"
                    className="rounded-lg shadow-xl object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="aspect-[4/3] md:aspect-[16/9]">
                  <img
                    src="/images/deja-vu-french-book-cover.jpg"
                    alt="Déjà Vu Book Cover - French Edition"
                    className="rounded-lg shadow-xl object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="aspect-[4/3] md:aspect-[16/9]">
                  <img
                    src="/images/deja-vu-book-cover.jpg"
                    alt="Déjà Vu Book Cover - Special Edition"
                    className="rounded-lg shadow-xl object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="text-left space-y-4 sm:space-y-6 lg:space-y-8 max-w-xl mx-auto lg:mx-0 w-full order-first lg:row-span-2 flex flex-col">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-tiltwarp font-bold gradient-text animate-fadeIn text-center lg:text-left" aria-label={t('hero', 'title')}>
            {t('hero', 'title')}
          </h1>
          <div className="text-base sm:text-lg md:text-xl text-black/80 animate-fadeIn min-h-[4em] sm:min-h-[3em] text-center lg:text-left px-4 sm:px-6 lg:px-0">
            <div key={t('hero', 'subtitle')}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(70)
                    .typeString(t('hero', 'subtitle'))
                    .callFunction(() => {
                      // Remove the cursor element after typing is complete
                      document.querySelector('.Typewriter__cursor')?.remove();
                    })
                    .start();
                }}
              />
            </div>
          </div>
          <Button 
            className="w-auto bg-primary text-white hover:bg-primary/90 text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 animate-fadeIn font-tiltwarp uppercase flex justify-center mx-auto lg:ml-0"
            onClick={scrollToPurchase}
            aria-label={t('hero', 'buyButton')}
          >
            {t('hero', 'buyButton')}
          </Button>
          <div className="hidden lg:block mt-6 sm:mt-8 lg:mt-10">
            <Reviews />
          </div>
        </div>
        <div className="relative animate-fadeIn order-2 hidden lg:block h-full flex items-center">
          <Carousel 
            className="w-full max-w-[480px] xl:max-w-xl mx-auto h-[calc(100vh-14rem)] max-h-[700px]"
            opts={{
              loop: true,
              align: "center",
              skipSnaps: false,
              dragFree: false,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                rootNode: (emblaRoot) => emblaRoot,
              }) as any
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="h-full max-h-[700px] flex items-center justify-center">
                  <img
                    src="/images/deja-vu-book-cover.jpg"
                    alt="Déjà Vu Book Cover - English Edition"
                    className="rounded-lg shadow-xl object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-full max-h-[700px] flex items-center justify-center">
                  <img
                    src="/images/deja-vu-french-book-cover.jpg"
                    alt="Déjà Vu Book Cover - French Edition"
                    className="rounded-lg shadow-xl object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-full max-h-[700px] flex items-center justify-center">
                  <img
                    src="/images/deja-vu-book-cover.jpg"
                    alt="Déjà Vu Book Cover - Special Edition"
                    className="rounded-lg shadow-xl object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="lg:hidden order-last mt-6 sm:mt-8">
          <Reviews />
        </div>
      </div>
      </div>
      {showHeroChevron && (
        <div 
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center cursor-pointer group"
          onClick={scrollToStory}
          role="button"
          aria-label={t('hero', 'storyButton')}
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              scrollToStory();
            }
          }}
          style={{ animation: 'bounce 2s infinite' }}
        >
          <div className="transform transition-all duration-300 ease-in-out group-hover:-translate-y-1">
            <p className="text-black mb-2 font-tiltwarp uppercase opacity-40 group-hover:opacity-100 transition-all duration-300">{t('hero', 'storyButton')}</p>
            <ChevronDown className="mx-auto text-black opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" size={24} />
          </div>
        </div>
      )}
    </section>
  );
}
