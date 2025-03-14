import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

type ReviewType = (typeof translations.en.reviews.items)[0];

export const Reviews = () => {
  const { t } = useLanguage();
  const reviews = t<ReviewType[]>('reviews', 'items');

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex justify-start gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-amber-400 text-sm">★</span>
        ))}
        {hasHalfStar && <span className="text-amber-400 text-sm">☆</span>}
      </div>
    );
  };

  return (
    <div 
      className="grid md:grid-cols-2 gap-8 max-w-4xl py-8"
      itemScope
      itemType="https://schema.org/ItemList"
      role="complementary"
      aria-label="Customer Reviews"
    >
      {reviews.map((review, index) => (
        <Card 
          key={index} 
          className="p-8 bg-white shadow-sm hover:shadow transition-shadow duration-200 flex flex-col min-h-[180px] border-none"
          itemScope
          itemType="https://schema.org/Review"
          itemProp="itemListElement"
          itemID={`review-${index}`}
          role="article"
        >
          <div className="flex-1 flex flex-col">
            <div className="mb-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <meta itemProp="bestRating" content="5" />
              <meta itemProp="worstRating" content="1" />
              <meta itemProp="ratingValue" content={review.rating.toString()} />
              {renderStars(review.rating)}
            </div>
            <div className="relative">
              <span className="absolute -left-1 top-0 text-2xl text-gray-200">"</span>
              <p 
                className="text-base text-gray-600 leading-relaxed flex-grow pl-6"
                itemProp="reviewBody"
              >
                {review.text}
              </p>
              <span className="absolute -right-1 bottom-0 text-2xl text-gray-200 leading-none">"</span>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <p 
                className="text-sm text-gray-600 text-right font-semibold"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                — <span itemProp="name">{review.author}</span>
                <meta itemProp="datePublished" content={new Date().toISOString().split('T')[0]} />
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
