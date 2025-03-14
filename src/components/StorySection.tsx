import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";

interface StorySectionProps {
  showStoryChevron: boolean;
  scrollToAuthor: () => void;
}

export const StorySection = ({ showStoryChevron, scrollToAuthor }: StorySectionProps) => {
  const { t } = useLanguage();
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3
      }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      if (storyRef.current) {
        observer.unobserve(storyRef.current);
      }
    };
  }, []);
  
  return (
    <section id="story-section" className="container mx-auto min-h-screen relative flex items-center px-3 sm:px-4 md:px-6">
      <div ref={storyRef} className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 md:space-y-6 mb-12 story-content">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-tiltwarp mb-2 sm:mb-10 text-primary uppercase">{t('story', 'title')}</h2>
        <div className="text-base sm:text-lg md:text-md text-black/80 space-y-3 sm:space-y-4 text-justify max-w-2xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-0">
          {t<string[]>('story', 'content').map((paragraph, index) => (
            <p 
              key={index} 
              className={`slide-in delay-${index}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      {showStoryChevron && (
        <div 
          className="hidden md:block absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center cursor-pointer group transition-opacity" 
          onClick={scrollToAuthor}
          style={{ animation: 'bounce 2s infinite' }}
        >
          <p className="text-black mb-2 font-tiltwarp uppercase opacity-50 group-hover:opacity-100 transition-opacity">{t('story', 'authorButton')}</p>
          <ChevronDown className="mx-auto text-black opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
        </div>
      )}
    </section>
  );
}
