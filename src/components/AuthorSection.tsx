import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Newsletter } from "@/components/Newsletter";
import { useLanguage } from "@/contexts/LanguageContext";

interface AuthorSectionProps {
  showAuthorChevron: boolean;
  scrollToPurchase: () => void;
}

const AuthorSection = ({ showAuthorChevron, scrollToPurchase }: AuthorSectionProps) => {
  const { t } = useLanguage();

  // Handle Instagram embed
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('data-cookie-consent', 'true');
    document.body.appendChild(script);

    // Set up mutation observer to handle dynamically added Instagram content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              // Find all links within the Instagram embed
              const links = node.getElementsByTagName('a');
              Array.from(links).forEach((link) => {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
              });
            }
          });
        }
      });
    });

    // Start observing the Instagram embed container
    const container = document.querySelector('.instagram-media');
    let iframeObserver: MutationObserver | null = null;
    
    if (container) {
      observer.observe(container, {
        childList: true,
        subtree: true
      });

      // Add title to Instagram iframe when it's created
      const addTitleToIframe = () => {
        const iframe = container.querySelector('iframe');
        if (iframe && !iframe.hasAttribute('title')) {
          iframe.setAttribute('title', 'Audriana Cherie Instagram Feed');
        }
      };

      // Initial check
      addTitleToIframe();

      // Also check whenever mutations occur
      iframeObserver = new MutationObserver(addTitleToIframe);
      iframeObserver.observe(container, {
        childList: true,
        subtree: true
      });
    }

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      observer.disconnect();
      if (iframeObserver) {
        iframeObserver.disconnect();
      }
    };
  }, []);

  return (
    <section id="author-section" className="container mx-auto min-h-screen relative flex items-center px-3 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start pt-16 sm:pt-6 lg:pt-24 pb-6 sm:pb-8 lg:pb-12">
        <div className="lg:block hidden space-y-4 sm:space-y-6 animate-fadeIn">
          <blockquote 
            className="instagram-media w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[400px] mx-auto md:max-w-none" 
            data-instgrm-permalink="https://www.instagram.com/audrianacheriee/"
            data-instgrm-version="14"
            style={{ 
              background: '#FFF',
              border: '0',
              borderRadius: '16px',
              boxShadow: 'none',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0'
            }}
          >
            <div style={{ padding: '16px' }}>
              <a 
                href="https://www.instagram.com/audrianacheriee/" 
                style={{ 
                  background: '#FFFFFF',
                  lineHeight: '0',
                  padding: '0 0',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%'
                }} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <div style={{ 
                    backgroundColor: '#F8F8F8',
                    borderRadius: '50%',
                    flexGrow: 0,
                    height: '40px',
                    marginRight: '14px',
                    width: '40px'
                  }}></div>
                  <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'center'
                  }}>
                    <div style={{ 
                      backgroundColor: '#F8F8F8',
                      borderRadius: '4px',
                      height: '14px',
                      marginBottom: '6px',
                      width: '100px'
                    }}></div>
                    <div style={{ 
                      backgroundColor: '#F8F8F8',
                      borderRadius: '4px',
                      height: '14px',
                      width: '60px'
                    }}></div>
                  </div>
                </div>
                <div style={{ margin: '16px 0' }}></div>
                <div style={{ 
                  backgroundColor: '#F8F8F8',
                  borderRadius: '4px',
                  height: '14px',
                  marginBottom: '6px'
                }}></div>
                <div style={{ 
                  backgroundColor: '#F8F8F8',
                  borderRadius: '4px',
                  height: '14px',
                  marginBottom: '6px'
                }}></div>
                <div style={{ 
                  backgroundColor: '#F8F8F8',
                  borderRadius: '4px',
                  height: '14px',
                  marginBottom: '6px'
                }}></div>
              </a>
            </div>
          </blockquote>
        </div>

        <div className="text-center lg:text-left h-full flex flex-col justify-between animate-fadeIn pt-4 sm:pt-6 lg:pt-0">
          <div className="space-y-4 sm:space-y-6 flex flex-col items-center lg:items-start">
            <h2 className="text-2xl font-tiltwarp sm:mb-2 text-primary uppercase text-center lg:text-left">{t('author', 'title')}</h2>
            <p className="text-base sm:text-lg text-black/80 leading-relaxed text-justify px-4 sm:px-6 lg:px-0">
              {t('author', 'description')}
            </p>
          </div>
          <div className="lg:block hidden flex justify-end">
            <Newsletter />
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 col-span-2 gap-6 sm:gap-8 items-start">
          <div className="space-y-4 sm:space-y-6 animate-fadeIn flex justify-center">
            <blockquote 
              className="instagram-media w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[400px] mx-auto md:max-w-none" 
              data-instgrm-permalink="https://www.instagram.com/audrianacheriee/"
              data-instgrm-version="14"
              style={{ 
                background: '#FFF',
                border: '0',
                borderRadius: '16px',
                boxShadow: 'none',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0'
              }}
            >
              <div style={{ padding: '16px' }}>
                <a 
                  href="https://www.instagram.com/audrianacheriee/" 
                  style={{ 
                    background: '#FFFFFF',
                    lineHeight: '0',
                    padding: '0 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '100%'
                  }} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ 
                      backgroundColor: '#F8F8F8',
                      borderRadius: '50%',
                      flexGrow: 0,
                      height: '40px',
                      marginRight: '14px',
                      width: '40px'
                    }}></div>
                    <div style={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      justifyContent: 'center'
                    }}>
                      <div style={{ 
                        backgroundColor: '#F8F8F8',
                        borderRadius: '4px',
                        height: '14px',
                        marginBottom: '6px',
                        width: '100px'
                      }}></div>
                      <div style={{ 
                        backgroundColor: '#F8F8F8',
                        borderRadius: '4px',
                        height: '14px',
                        width: '60px'
                      }}></div>
                    </div>
                  </div>
                  <div style={{ margin: '16px 0' }}></div>
                  <div style={{ 
                    backgroundColor: '#F8F8F8',
                    borderRadius: '4px',
                    height: '14px',
                    marginBottom: '6px'
                  }}></div>
                  <div style={{ 
                    backgroundColor: '#F8F8F8',
                    borderRadius: '4px',
                    height: '14px',
                    marginBottom: '6px'
                  }}></div>
                  <div style={{ 
                    backgroundColor: '#F8F8F8',
                    borderRadius: '4px',
                    height: '14px',
                    marginBottom: '6px'
                  }}></div>
                </a>
              </div>
            </blockquote>
          </div>
          <div className="animate-fadeIn flex justify-center md:col-span-1">
            <Newsletter />
          </div>
        </div>
      </div>
      {showAuthorChevron && (
        <div 
          className="hidden md:block absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center cursor-pointer group transition-opacity" 
          onClick={scrollToPurchase}
          style={{ animation: 'bounce 2s infinite' }}
        >
          <p className="text-black mb-2 font-tiltwarp uppercase opacity-50 group-hover:opacity-100 transition-opacity">{t('purchase', 'title')}</p>
          <ChevronDown className="mx-auto text-black opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
        </div>
      )}
    </section>
  );
};

export default AuthorSection;
