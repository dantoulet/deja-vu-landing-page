import { Language } from './translations';

export const seoTranslations = {
  en: {
    title: "Déjà Vu by Audriana - A Time-Bending Love Story",
    description: "Discover 'Déjà Vu' by Audriana - A captivating tale of love that transcends time, weaving together past lives and present moments in an unforgettable journey through New York and Paris. ★★★★★ Rated 4.8/5 by 256+ readers.",
    keywords: "Déjà Vu, Audriana, romance novel, time travel, literary fiction, past lives, New York, Paris, love story, best-selling novel, award-winning author",
    ogTitle: "Déjà Vu by Audriana - A Time-Bending Love Story",
    ogDescription: "Discover 'Déjà Vu' by Audriana - A captivating tale of love that transcends time, weaving together past lives and present moments in an unforgettable journey through New York and Paris.",
    twitterTitle: "Déjà Vu by Audriana - A Time-Bending Love Story",
    twitterDescription: "A captivating tale of love that transcends time.",
    structuredData: {
      name: "Déjà Vu",
      description: "A captivating tale of love that transcends time, weaving together past lives and present moments in an unforgettable journey through New York and Paris.",
      award: "Best Romance Novel of 2025 - Literary Guild",
      offers: [
        {
          price: "19.99",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        },
        {
          price: "19.99",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        }
      ]
    }
  },
  fr: {
    title: "Déjà Vu par Audriana - Une Histoire d'Amour Intemporelle",
    description: "Découvrez 'Déjà Vu' d'Audriana - Un récit captivant d'amour qui transcende le temps, entrelaçant vies passées et moments présents dans un voyage inoubliable entre New York et Paris. ★★★★★ Noté 4.8/5 par plus de 256 lecteurs.",
    keywords: "Déjà Vu, Audriana, roman d'amour, voyage dans le temps, fiction littéraire, vies antérieures, New York, Paris, histoire d'amour, best-seller, auteur primé",
    ogTitle: "Déjà Vu par Audriana - Une Histoire d'Amour Intemporelle",
    ogDescription: "Découvrez 'Déjà Vu' d'Audriana - Un récit captivant d'amour qui transcende le temps, entrelaçant vies passées et moments présents dans un voyage inoubliable entre New York et Paris.",
    twitterTitle: "Déjà Vu par Audriana - Une Histoire d'Amour Intemporelle",
    twitterDescription: "Une histoire d'amour captivante qui transcende le temps.",
    structuredData: {
      name: "Déjà Vu",
      description: "Un récit captivant d'amour qui transcende le temps, entrelaçant vies passées et moments présents dans un voyage inoubliable entre New York et Paris.",
      award: "Meilleur Roman d'Amour 2025 - Guide Littéraire",
      offers: [
        {
          price: "19.99",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        },
        {
          price: "19.99",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      ]
    }
  }
};

export function updateMetaTags(language: Language) {
  // Update title
  document.title = seoTranslations[language].title;

  // Update meta tags
  const metaTags = {
    'description': seoTranslations[language].description,
    'keywords': seoTranslations[language].keywords,
    'og:title': seoTranslations[language].ogTitle,
    'og:description': seoTranslations[language].ogDescription,
    'twitter:title': seoTranslations[language].twitterTitle,
    'twitter:description': seoTranslations[language].twitterDescription
  };

  Object.entries(metaTags).forEach(([name, content]) => {
    // Try both name and property attributes as they're used differently
    let meta = document.querySelector(`meta[name="${name}"]`) ||
               document.querySelector(`meta[property="${name}"]`);
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(name.startsWith('og:') ? 'property' : 'name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  });

  // Update structured data
  const scriptElement = document.querySelector('script[type="application/ld+json"]');
  if (scriptElement) {
    const currentData = JSON.parse(scriptElement.textContent || '{}');
    const langData = seoTranslations[language].structuredData;
    
    // Merge the language-specific data with the existing structure
    const updatedData = {
      ...currentData,
      name: langData.name,
      description: langData.description,
      award: langData.award,
      offers: langData.offers
    };
    
    scriptElement.textContent = JSON.stringify(updatedData, null, 2);
  }
}
