import React from 'react';
import { SERVICES } from '../data/portfolio';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-studio-mist dark:bg-studio-mist transition-colors duration-200">
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="max-w-[680px] mb-16">
          <span className="text-[12px] font-semibold text-launch-orange tracking-[-0.12px] uppercase block mb-2">
            Engineering Capabilities
          </span>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-ink leading-tight tracking-tight">
            How I assist growing companies & ventures.
          </h2>
          <p className="text-[17px] text-slate mt-2 tracking-[-0.374px]">
            Delivering clean architecture from prototype to production, eliminating operational friction along the way.
          </p>
        </div>

        {/* 2x2 Clean Feature Cards matching DESIGN.md (28px radius, shadowless, white cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-gallery-white p-8 sm:p-10 rounded-[28px] border border-hairline-silver/60 flex flex-col justify-between hover:border-hairline-silver transition-all duration-200"
            >
              <div>
                <span className="text-[13px] font-semibold text-slate/80 tracking-tight block mb-4">
                  0{index + 1}
                </span>
                <h3 className="text-[21px] sm:text-[24px] font-semibold text-ink tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px] font-medium text-ink/80 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              <p className="text-[13px] text-slate leading-normal pt-4 border-t border-hairline-silver/40">
                {service.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
