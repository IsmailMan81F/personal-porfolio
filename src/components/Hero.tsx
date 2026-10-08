import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-8 md:pt-12 pb-16 md:pb-24 bg-gallery-white overflow-hidden text-center">
      <div className="max-w-[1024px] mx-auto px-6">
        {/* Launch status annotation per DESIGN.md */}
        <div className="inline-block mb-3">
          <span className="text-[12px] font-semibold text-launch-orange tracking-[-0.12px] uppercase">
            Available for Select Client Engagements & Engineering Roles
          </span>
        </div>

        {/* Product Kicker / Role Tagline */}
        <p className="text-[19px] md:text-[21px] font-semibold text-ink tracking-[0.231px] mb-3">
          {PERSONAL_INFO.role} & Systems Builder
        </p>

        {/* Hero Display Headline */}
        <h1 className="text-[44px] sm:text-[62px] md:text-[80px] font-bold text-ink leading-[1.05] tracking-[-1.5px] max-w-[940px] mx-auto mb-6">
          Architecting web, mobile, and autonomous systems.
        </h1>

        {/* Subtitle / Value proposition (No gradients, clean typography, comfortable spacing) */}
        <p className="text-[17px] md:text-[20px] text-slate max-w-[680px] mx-auto leading-[1.47] tracking-[-0.374px] mb-8">
          Helping businesses scale their presence online and automate critical operations with robust code, refined interfaces, and intelligent backends.
        </p>

        {/* CTA Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-full bg-pricing-blue text-white text-[14px] font-medium tracking-[-0.224px] hover:bg-pricing-blue/90 transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <span>View Featured Works</span>
            <FiArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full border border-steel/50 hover:border-ink text-ink text-[14px] font-medium tracking-[-0.224px] transition-colors"
          >
            Schedule Discussion
          </a>
        </div>

        {/* Floating Metrics Capsule / Callout over clean canvas (DESIGN.md style) */}
        <div className="max-w-[760px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-hairline-silver/60 dark:border-hairline-silver/30">
          <div className="flex flex-col items-center p-4">
            <span className="text-[28px] md:text-[32px] font-semibold text-ink tracking-tight">
              {PERSONAL_INFO.baccalaureateScore}
            </span>
            <span className="text-[13px] text-slate tracking-[-0.12px] mt-1 text-center">
              Algeria National Baccalaureate Score
            </span>
          </div>

          <div className="flex flex-col items-center p-4 border-t sm:border-t-0 sm:border-l sm:border-r border-hairline-silver/60 dark:border-hairline-silver/30">
            <span className="text-[28px] md:text-[32px] font-semibold text-ink tracking-tight">
              ESI Algiers
            </span>
            <span className="text-[13px] text-slate tracking-[-0.12px] mt-1 text-center">
              High National School of Computer Science (Yr 3/5)
            </span>
          </div>

          <div className="flex flex-col items-center p-4 border-t sm:border-t-0 border-hairline-silver/60 dark:border-hairline-silver/30">
            <div className="flex items-center gap-1.5">
              <span className="text-[28px] md:text-[32px] font-semibold text-ink tracking-tight">
                {PERSONAL_INFO.satisfiedClients}
              </span>
              <FiCheckCircle className="w-5 h-5 text-apple-blue" />
            </div>
            <span className="text-[13px] text-slate tracking-[-0.12px] mt-1 text-center">
              Satisfied Production Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
