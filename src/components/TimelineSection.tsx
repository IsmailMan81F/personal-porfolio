import React from 'react';
import { TIMELINE } from '../data/portfolio';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-gallery-white transition-colors duration-200">
      <div className="max-w-[1024px] mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-[700px] mb-16">
          <span className="text-[12px] font-semibold text-launch-orange tracking-[-0.12px] uppercase block mb-2">
            Academic & Professional Journey
          </span>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-ink leading-tight tracking-tight">
            From national honors to production software systems.
          </h2>
          <p className="text-[17px] text-slate mt-2 tracking-[-0.374px]">
            A continuous progression grounded in foundational computer science principles and battle-tested industry applications.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-hairline-silver ml-4 md:ml-32 pl-8 md:pl-12 space-y-12">
          {TIMELINE.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker (Apple-style subtle hairline indicator, no colored dot badge) */}
              <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate border-2 border-gallery-white dark:border-black transition-colors" />

              {/* Date / Year header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                <span className="text-[13px] font-semibold text-pricing-blue tracking-[-0.12px]">
                  {item.year}
                </span>
                {item.highlight && (
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-medium bg-studio-mist text-slate border border-hairline-silver/60">
                    {item.highlight}
                  </span>
                )}
              </div>

              {/* Milestone Title */}
              <h3 className="text-[19px] md:text-[21px] font-semibold text-ink tracking-tight">
                {item.title}
              </h3>

              {/* Organization */}
              {item.organization && (
                <p className="text-[13px] font-medium text-slate mb-2">
                  {item.organization}
                </p>
              )}

              {/* Description */}
              <p className="text-[15px] text-slate leading-[1.6] max-w-[640px] tracking-[-0.224px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
