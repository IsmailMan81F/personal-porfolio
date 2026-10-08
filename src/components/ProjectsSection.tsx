import React, { useState } from 'react';
import { PROJECTS, type Project } from '../data/portfolio';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'iot'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'web') return p.category.includes('Web') || p.category.includes('Commerce');
    if (filter === 'iot') return p.category.includes('IoT') || p.category.includes('Backend');
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-studio-mist dark:bg-studio-mist transition-colors duration-200">
      <div className="max-w-[1024px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[12px] font-semibold text-launch-orange tracking-[-0.12px] uppercase block mb-2">
              Featured Portfolio
            </span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-ink leading-tight tracking-tight">
              Engineered with precision. Built for impact.
            </h2>
            <p className="text-[17px] text-slate mt-2 max-w-[560px] tracking-[-0.374px]">
              Every solution combines performant architecture, refined aesthetics, and measurable business outcomes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-gallery-white/60 dark:bg-paper-frost/60 p-1.5 rounded-full border border-hairline-silver/60">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1 text-[12px] font-medium rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-ink text-gallery-white dark:bg-ink dark:text-gallery-white'
                  : 'text-slate hover:text-ink'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3.5 py-1 text-[12px] font-medium rounded-full transition-all ${
                filter === 'web'
                  ? 'bg-ink text-gallery-white dark:bg-ink dark:text-gallery-white'
                  : 'text-slate hover:text-ink'
              }`}
            >
              Web & Commerce
            </button>
            <button
              onClick={() => setFilter('iot')}
              className={`px-3.5 py-1 text-[12px] font-medium rounded-full transition-all ${
                filter === 'iot'
                  ? 'bg-ink text-gallery-white dark:bg-ink dark:text-gallery-white'
                  : 'text-slate hover:text-ink'
              }`}
            >
              IoT & AI
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project: Project, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="bg-gallery-white rounded-[28px] overflow-hidden border border-hairline-silver/50 transition-all duration-300 hover:border-hairline-silver flex flex-col lg:flex-row"
              >
                {/* Media Container */}
                <div
                  className={`w-full lg:w-[52%] bg-[#eaeaea] dark:bg-[#1a1a1c] relative min-h-[300px] lg:min-h-[420px] flex items-center justify-center overflow-hidden p-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover rounded-[20px] shadow-sm transform hover:scale-[1.02] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Content Container */}
                <div
                  className={`w-full lg:w-[48%] p-8 sm:p-10 flex flex-col justify-between ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    {/* Category & Kicker */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="text-[12px] font-medium tracking-tight text-apple-blue">
                        {project.category}
                      </span>
                      <span className="text-slate/40 text-[10px]">•</span>
                      <span className="text-[12px] font-normal text-slate">
                        {project.kicker}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[26px] sm:text-[30px] font-semibold text-ink tracking-tight mb-3">
                      {project.title}
                    </h3>

                    {/* Tagline & Description */}
                    <p className="text-[15px] font-medium text-ink/80 mb-3 leading-snug">
                      {project.tagline}
                    </p>
                    <p className="text-[14px] text-slate leading-[1.6] tracking-[-0.224px] mb-6">
                      {project.description}
                    </p>

                    {/* Feature bullets (clean, without emojis or dot badges) */}
                    <div className="space-y-2 mb-8">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-[13px] text-ink/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate/40 mt-1.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-medium tracking-tight rounded-md bg-studio-mist text-slate border border-hairline-silver/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions: Live Demo + GitHub Link */}
                    <div className="flex items-center gap-4 pt-4 border-t border-hairline-silver/40">
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-pricing-blue text-white text-[13px] font-medium tracking-tight hover:bg-pricing-blue/90 transition-colors"
                      >
                        <span>Live Preview</span>
                        <FiExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-steel/60 text-ink text-[13px] font-medium tracking-tight hover:border-ink transition-colors"
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
