import { useEffect, useState, lazy, Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";
import { NewsletterDialog } from "@/components/NewsletterDialog";

const StorySection = lazy(() => import("@/components/StorySection"));
const AuthorSection = lazy(() => import("@/components/AuthorSection"));
const PurchaseSection = lazy(() => import("@/components/PurchaseSection"));

const Index = () => {
  const [showHeroChevron, setShowHeroChevron] = useState(true);
  const [showStoryChevron, setShowStoryChevron] = useState(true);
  const [showAuthorChevron, setShowAuthorChevron] = useState(true);

  const scrollToStory = () => {
    const storySection = document.querySelector('#story-section');
    storySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAuthor = () => {
    const authorSection = document.querySelector('#author-section');
    authorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPurchase = () => {
    const purchaseSection = document.querySelector('#purchase-section');
    purchaseSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHeroChevron(false);
        } else {
          setShowHeroChevron(true);
        }
      },
      { threshold: 0.1 }
    );

    const storySection = document.querySelector('#story-section');
    if (storySection) {
      observer.observe(storySection);
    }

    return () => {
      if (storySection) {
        observer.unobserve(storySection);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowStoryChevron(false);
        } else {
          setShowStoryChevron(true);
        }
      },
      { threshold: 0.1 }
    );

    const authorSection = document.querySelector('#author-section');
    if (authorSection) {
      observer.observe(authorSection);
    }

    return () => {
      if (authorSection) {
        observer.unobserve(authorSection);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAuthorChevron(false);
        } else {
          setShowAuthorChevron(true);
        }
      },
      { threshold: 0.1 }
    );

    const purchaseSection = document.querySelector('#purchase-section');
    if (purchaseSection) {
      observer.observe(purchaseSection);
    }

    return () => {
      if (purchaseSection) {
        observer.unobserve(purchaseSection);
      }
    };
  }, []);

  return (
    <div className="min-h-screen font-times">
      <NewsletterDialog />
      <header>
        <HeroSection showHeroChevron={showHeroChevron} scrollToStory={scrollToStory} scrollToPurchase={scrollToPurchase} />
      </header>
      <main>
        <Suspense fallback={<div className="min-h-screen"></div>}>
          <StorySection showStoryChevron={showStoryChevron} scrollToAuthor={scrollToAuthor} />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen"></div>}>
          <AuthorSection showAuthorChevron={showAuthorChevron} scrollToPurchase={scrollToPurchase} />
        </Suspense>
      </main>
      <footer>
        <Suspense fallback={<div className="min-h-screen"></div>}>
          <PurchaseSection />
        </Suspense>
      </footer>
    </div>
  );
};

export default Index;
