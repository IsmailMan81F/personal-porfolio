import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationsOptions {
  triggerKey?: unknown;
}

/**
 * Custom hook to register GSAP ScrollTrigger opacity animations across any container.
 * When the user scrolls down, the opacity of elements increases to max (1.0).
 * When the user scrolls up, the opacity decreases back down to low (0.18).
 */
export function useScrollAnimations(
  containerRef?: RefObject<HTMLElement | null>,
  options: UseScrollAnimationsOptions = {}
) {
  const { triggerKey } = options;

  useEffect(() => {
    const root = containerRef?.current || document;

    const ctx = gsap.context(() => {
      // 1. Text elements with [data-scroll-text]
      const textElements = root.querySelectorAll<HTMLElement>('[data-scroll-text]');
      textElements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0.18,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 94%',
              end: 'top 66%',
              scrub: 0.15,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // 2. Cards with [data-scroll-card]
      const cardElements = root.querySelectorAll<HTMLElement>('[data-scroll-card]');
      cardElements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0.2,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 95%',
              end: 'top 68%',
              scrub: 0.15,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // 3. Word reveal on [data-scroll-words]
      const wordsElements = root.querySelectorAll<HTMLElement>('[data-scroll-words]');
      wordsElements.forEach((el) => {
        const words = el.querySelectorAll<HTMLElement>('.scroll-word');
        if (words.length) {
          gsap.fromTo(
            words,
            {
              opacity: 0.18,
              y: 6,
            },
            {
              opacity: 1,
              y: 0,
              stagger: 0.04,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                end: 'top 58%',
                scrub: 0.15,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      });
    }, root);

    // Refresh triggers to ensure precise geometry calculation
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [containerRef, triggerKey]);
}
