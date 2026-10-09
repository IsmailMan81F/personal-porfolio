import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealWordsProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  text: string;
  className?: string;
  start?: string;
  end?: string;
}

/**
 * Headline / Text component where words illuminate progressively from low opacity (0.18)
 * to max opacity (1.0) as the user scrolls down, and dims back down when scrolling up.
 */
export const ScrollRevealWords: React.FC<ScrollRevealWordsProps> = ({
  as: Component = 'h2',
  text,
  className = '',
  start = 'top 88%',
  end = 'top 55%',
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const wordSpans = el.querySelectorAll<HTMLSpanElement>('.scroll-reveal-word');
    if (!wordSpans.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordSpans,
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
            start,
            end,
            scrub: 0.15,
            invalidateOnRefresh: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text, start, end]);

  return (
    // @ts-expect-error Component dynamic tag typing
    <Component ref={containerRef} className={className}>
      {words.map((word, idx) => (
        <span
          key={`${word}-${idx}`}
          className="scroll-reveal-word inline-block mr-[0.26em] will-change-[opacity,transform]"
        >
          {word}
        </span>
      ))}
    </Component>
  );
};

interface ScrollRevealBlockProps {
  children: React.ReactNode;
  className?: string;
  start?: string;
  end?: string;
  delay?: number;
}

/**
 * Wraps any block (paragraph, badge, pill, card) so that its opacity increases from
 * low opacity (0.18) to max opacity (1.0) as the user scrolls down, and decreases
 * when scrolling back up.
 */
export const ScrollRevealBlock: React.FC<ScrollRevealBlockProps> = ({
  children,
  className = '',
  start = 'top 95%',
  end = 'top 68%',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
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
            start,
            end,
            scrub: 0.15,
            invalidateOnRefresh: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [start, end]);

  return (
    <div ref={ref} className={`will-change-[opacity,transform] ${className}`}>
      {children}
    </div>
  );
};
