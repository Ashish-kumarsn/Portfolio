import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({
  image,
  title,
  description,
  techStack = [],
  codeLink,
  liveLink,
  codeLinkText = "Code"
}) => {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 
                 bg-black/90 backdrop-blur-sm shadow-lg shadow-black/60 
                 transition-transform duration-300 hover:-translate-y-1 hover:border-zinc-600 
                 hover:shadow-2xl hover:shadow-purple-900/30"
    >
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
          }
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col bg-zinc-950/95 px-6 py-5">
        {/* Title */}
        <h3 className="mb-2 text-2xl font-semibold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>

        

        {/* Buttons */}
        <div className="flex gap-3">
          {/* Code Button */}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-700 
                         bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200 
                         transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
            >
              <Github size={16} />
              {codeLinkText}
            </a>
          )}

          {/* Live Button */}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 
                         text-sm font-medium text-black transition-all hover:bg-zinc-200"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
