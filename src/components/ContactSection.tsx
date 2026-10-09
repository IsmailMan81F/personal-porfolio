import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { FiPhone, FiMapPin, FiCheck, FiCopy, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import { ScrollRevealWords } from './ScrollRevealText';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  useScrollAnimations(containerRef);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-24 bg-gallery-white transition-colors duration-200"
    >
      <div className="max-w-[1024px] mx-auto px-6">
        {/* Editorial Heading */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <span
            data-scroll-text
            className="text-[12px] font-semibold text-launch-orange tracking-[-0.12px] uppercase block mb-2 will-change-[opacity,transform]"
          >
            Inquiries & Collaboration
          </span>
          <ScrollRevealWords
            as="h2"
            text="Let's build something enduring."
            className="text-[36px] md:text-[48px] font-bold text-ink leading-tight tracking-tight mb-4"
          />
          <p
            data-scroll-text
            className="text-[17px] text-slate leading-[1.47] tracking-[-0.374px] will-change-[opacity,transform]"
          >
            Whether you need a bespoke web platform, mobile solution, IoT data pipeline, or complete automation workflow, reach out directly.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Direct Channels Card */}
          <div
            data-scroll-card
            className="bg-studio-mist dark:bg-studio-mist p-8 sm:p-10 rounded-[28px] border border-hairline-silver/60 flex flex-col justify-between will-change-[opacity,transform]"
          >
            <div>
              <h3 className="text-[21px] font-semibold text-ink tracking-tight mb-2">
                Direct Contact
              </h3>
              <p className="text-[14px] text-slate mb-8">
                Instant communication channels for project scoping and consultations.
              </p>

              <div className="space-y-4">
                {/* WhatsApp */}
                <div className="flex items-center justify-between p-4 bg-gallery-white rounded-[16px] border border-hairline-silver/60">
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <div className="text-[14px] font-medium text-ink">WhatsApp</div>
                      <div className="text-[12px] text-slate">{PERSONAL_INFO.socialLinks.whatsappNumber}</div>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1 text-[12px] font-medium rounded-full bg-pricing-blue text-white hover:bg-pricing-blue/90 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Message</span>
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Phone Numbers */}
                <div className="p-4 bg-gallery-white rounded-[16px] border border-hairline-silver/60">
                  <div className="flex items-center gap-3 mb-2">
                    <FiPhone className="w-5 h-5 text-apple-blue" />
                    <span className="text-[14px] font-medium text-ink">Direct Telephone</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {PERSONAL_INFO.socialLinks.phones.map((phone) => (
                      <button
                        key={phone}
                        onClick={() => copyToClipboard(phone, phone)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-mono bg-studio-mist hover:bg-control-gray text-ink border border-hairline-silver/50 transition-colors"
                        title="Click to copy"
                      >
                        {copied === phone ? (
                          <>
                            <FiCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <FiCopy className="w-3 h-3 text-slate" />
                            <span>{phone}</span>
                          </>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 bg-gallery-white rounded-[16px] border border-hairline-silver/60">
                  <FiMapPin className="w-5 h-5 text-slate" />
                  <div>
                    <div className="text-[14px] font-medium text-ink">Location</div>
                    <div className="text-[12px] text-slate">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles & Networks Card */}
          <div
            data-scroll-card
            className="bg-studio-mist dark:bg-studio-mist p-8 sm:p-10 rounded-[28px] border border-hairline-silver/60 flex flex-col justify-between will-change-[opacity,transform]"
          >
            <div>
              <h3 className="text-[21px] font-semibold text-ink tracking-tight mb-2">
                Online Profiles & Network
              </h3>
              <p className="text-[14px] text-slate mb-8">
                Connect via social media or inspect open repositories on GitHub.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gallery-white rounded-[16px] border border-hairline-silver/60 hover:border-ink transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaGithub className="w-5 h-5 text-ink" />
                    <div>
                      <div className="text-[14px] font-semibold text-ink">GitHub</div>
                      <div className="text-[11px] text-slate">Code repositories</div>
                    </div>
                  </div>
                  <FiArrowUpRight className="w-4 h-4 text-slate" />
                </a>

                {/* Instagram */}
                <a
                  href={PERSONAL_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gallery-white rounded-[16px] border border-hairline-silver/60 hover:border-ink transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaInstagram className="w-5 h-5 text-pink-600" />
                    <div>
                      <div className="text-[14px] font-semibold text-ink">Instagram</div>
                      <div className="text-[11px] text-slate">@ismail_meg81f</div>
                    </div>
                  </div>
                  <FiArrowUpRight className="w-4 h-4 text-slate" />
                </a>

                {/* Facebook */}
                <a
                  href={PERSONAL_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gallery-white rounded-[16px] border border-hairline-silver/60 hover:border-ink transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaFacebook className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-[14px] font-semibold text-ink">Facebook</div>
                      <div className="text-[11px] text-slate">ismail.meguehout</div>
                    </div>
                  </div>
                  <FiArrowUpRight className="w-4 h-4 text-slate" />
                </a>

                {/* Academic Institution */}
                <div className="p-4 bg-gallery-white rounded-[16px] border border-hairline-silver/60">
                  <div className="text-[14px] font-semibold text-ink">ESI Algiers</div>
                  <div className="text-[11px] text-slate">Computer Science Engineering</div>
                </div>
              </div>
            </div>

            {/* Availability note */}
            <div className="mt-8 pt-6 border-t border-hairline-silver/50 text-[13px] text-slate flex items-center justify-between">
              <span>Timezone: GMT+1 (CET / Algiers)</span>
              <span className="font-medium text-ink">Open to remote & freelance</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          data-scroll-text
          className="pt-12 border-t border-hairline-silver/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-slate will-change-[opacity,transform]"
        >
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Crafted following the Apple Design System</span>
            <a href="#hero" className="text-apple-blue hover:underline">
              Back to top
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};
