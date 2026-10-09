import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedLogoProps {
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const ismailRef = useRef<HTMLSpanElement>(null);
  const devRef = useRef<HTMLSpanElement>(null);

  const ismailChars = ['I', 's', 'm', 'a', 'i', 'l', '.'];
  const devChars = ['D', 'e', 'v', '.'];

  useEffect(() => {
    const container = containerRef.current;
    const ismailEl = ismailRef.current;
    const devEl = devRef.current;

    if (!container || !ismailEl || !devEl) return;

    let tl: gsap.core.Timeline | null = null;

    const ctx = gsap.context(() => {
      const ismailLetters = ismailEl.querySelectorAll<HTMLElement>('.logo-char');
      const devLetters = devEl.querySelectorAll<HTMLElement>('.logo-char');

      const measureAndAnimate = () => {
        // Measure typographical widths via scrollWidth/offsetWidth (immune to translateY transforms)
        const ismailWidth = Math.max(ismailEl.scrollWidth, ismailEl.offsetWidth, 76);
        const devWidth = Math.max(devEl.scrollWidth, devEl.offsetWidth, 48);

        // Initial positions: "Ismail." visible at baseline, "Dev." prepared above
        gsap.set(container, { width: ismailWidth });
        gsap.set(ismailLetters, { y: 0, opacity: 1 });
        gsap.set(devLetters, { y: -32, opacity: 0 });

        if (tl) tl.kill();

        tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 0,
        });

        tl
          // 1. Hold on "Ismail." for 3 seconds
          .to({}, { duration: 3.0 })

          // 2. Letters of "Ismail." fall down one by one
          .to(ismailLetters, {
            y: 32,
            opacity: 0,
            duration: 0.32,
            stagger: 0.04,
            ease: 'power2.in',
          })

          // 3. Container width smoothly adjusts to "Dev."
          .to(
            container,
            {
              width: devWidth,
              duration: 0.34,
              ease: 'power2.inOut',
            },
            '<0.06'
          )

          // 4. Letters of "Dev." fall from the top one by one into position
          // CRITICAL: immediateRender: false prevents GSAP from pre-rendering hidden state on initialization
          .fromTo(
            devLetters,
            { y: -32, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.36,
              stagger: 0.045,
              ease: 'back.out(1.2)',
              immediateRender: false,
            },
            '<0.08'
          )

          // 5. Hold on "Dev." for 3 seconds
          .to({}, { duration: 3.0 })

          // 6. Letters of "Dev." fall down one by one
          .to(devLetters, {
            y: 32,
            opacity: 0,
            duration: 0.32,
            stagger: 0.045,
            ease: 'power2.in',
          })

          // 7. Container width smoothly adjusts back to "Ismail."
          .to(
            container,
            {
              width: ismailWidth,
              duration: 0.34,
              ease: 'power2.inOut',
            },
            '<0.06'
          )

          // 8. Letters of "Ismail." fall from the top one by one into position
          // CRITICAL: immediateRender: false ensures "Ismail." is never hidden during state 1 or on timeline repeat
          .fromTo(
            ismailLetters,
            { y: -32, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.36,
              stagger: 0.04,
              ease: 'back.out(1.2)',
              immediateRender: false,
            },
            '<0.08'
          )

          // 9. Reset "Dev." letters to top ready for the next cycle
          .set(devLetters, { y: -32, opacity: 0 });
      };

      if (document.fonts) {
        document.fonts.ready.then(measureAndAnimate);
      } else {
        measureAndAnimate();
      }
    }, containerRef);

    return () => {
      if (tl) tl.kill();
      ctx.revert();
    };
  }, []);

  return (
    <span
      ref={containerRef}
      className={`relative inline-flex items-center h-[28px] overflow-hidden select-none font-bold text-[20px] tracking-tight text-ink ${className}`}
      style={{ verticalAlign: 'middle', minWidth: '76px' }}
    >
      <span className="sr-only">Ismail.</span>
      <span
        ref={ismailRef}
        aria-hidden="true"
        className="absolute left-0 top-0 h-full flex items-center whitespace-nowrap pointer-events-none"
      >
        {ismailChars.map((char, index) => (
          <span
            key={`ismail-${index}`}
            className="logo-char inline-block will-change-transform"
          >
            {char}
          </span>
        ))}
      </span>
      <span
        ref={devRef}
        aria-hidden="true"
        className="absolute left-0 top-0 h-full flex items-center whitespace-nowrap pointer-events-none"
      >
        {devChars.map((char, index) => (
          <span
            key={`dev-${index}`}
            className="logo-char inline-block will-change-transform"
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};
