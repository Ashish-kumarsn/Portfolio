import React from "react";
import ProjectCard from "../Cards";
import PI from "../../assets/fitclub-gym-web-netlify-app.png"
import PI3 from "../../assets/Skill-Setu.png"
import PI4 from "../../assets/imaginify.png"

const Projects = () => {
  const projects = [
    {
      image: PI3,
      title: "Skill-Setu",
      description: "SKILL_SETU is an intuitive Learning Management System designed to connect students and instructors, delivering engaging online education through interactive content, seamless communication, and modern learning tools.",
      techStack: ["Next.js", "React", "MongoDB", "Node.js"],
      codeLink: "https://github.com/Ashish-kumarsn/SKILL_SETU",
      codeLinkText: "Code",
      liveLink: "https://skill-setu.vercel.app/"
    },
    {
      image: PI4,
      title: "Imaginify",
      description: "Imaginify – AI-powered image editing & generation. Restore photos, generative fill, remove/recolor objects, remove backgrounds, and create images from prompts. Fast, intuitive, and built with Next.js for creators & designers.",
      techStack: ["Next.js", "TypeScript", "Cloudinary", "Stripe"],
      codeLink: "https://github.com/Ashish-kumarsn/Imaginify",
      codeLinkText: "Code",
      liveLink: "https://imaginify-five-bay.vercel.app/"
    },
    {
      image: PI,
      title: "Samvaad",
      description: "Samvaad — A real-time communication platform empowering users with private and group messaging, media sharing, online presence tracking, and seamless video calling — all in one unified experience.",
      techStack: ["React.js ", "Node.js", "Socket.IO" , "WebRTC"],
      codeLink: "https://github.com/Ashish-kumarsn/ChatApp",
      codeLinkText: "Code",
      liveLink: "https://chat-app-omega-three-20.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20">
      {/* Header */}
<div className="mb-20 text-center">
  {/* Small Line */}
  <p className="mb-4 text-lg text-zinc-400">
    Crafting modern experiences
  </p>

  {/* Big Heading */}
  <h2 className="text-[4rem] font-bold leading-[1.1] tracking-[-0.02em] text-white">
    Project{" "}
    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent italic">
      Showcase
    </span>
  </h2>
</div>

      {/* Project Cards Grid */}
      <div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              codeLink={project.codeLink}
              codeLinkText={project.codeLinkText}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;