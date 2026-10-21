import React from 'react';
import { PROJECTS, type Project } from '../data/portfolio';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-studio-mist dark:bg-studio-mist transition-colors duration-200"
    >
      <div className="max-w-[1024px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-[680px] mb-16">
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project: Project) => (
            <article
              key={project.id}
              className="bg-gallery-white rounded-[24px] overflow-hidden border border-hairline-silver/60 flex flex-col justify-between"
            >
              <div>
                <div className="w-full aspect-[16/10] bg-[#eaeaea] dark:bg-[#1a1a1c] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 sm:p-8 pb-4">
                  <h3 className="text-[22px] font-semibold text-ink tracking-tight mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-slate leading-[1.6] tracking-[-0.2px]">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 flex items-center gap-3">
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-pricing-blue text-white text-[13px] font-medium tracking-tight hover:opacity-90"
                >
                  <span>Live Preview</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-steel/60 text-ink text-[13px] font-medium tracking-tight hover:border-ink"
                >
                  <FiGithub className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
