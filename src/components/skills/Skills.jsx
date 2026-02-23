import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isButtonClick, setIsButtonClick] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isButtonClick) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isButtonClick]);

const allSkills = [
  // 🔝 TOP ROW — Identity (6)
  { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E" },
  { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
  { name: "Next.js", icon: "devicon-nextjs-plain", color: "#FFFFFF" },
  { name: "Node.js", icon: "devicon-nodejs-plain", color: "#339933" },
  { name: "Express.js", icon: "devicon-express-original", color: "#FFFFFF" },
  { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED" },

  // 🟡 MIDDLE ROW — Capability (6)
  { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#47A248" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#4169E1" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", color: "#06B6D4" },
  { name: "HTML5", icon: "devicon-html5-plain", color: "#E34F26" },
  { name: "CSS3", icon: "devicon-css3-plain", color: "#1572B6" },
  { name: "REST APIs", icon: "devicon-nodejs-plain", color: "#A3A3A3" },

  // 🔻 BOTTOM ROW — Scale & Maturity (6)
  { name: "Kubernetes", icon: "devicon-kubernetes-plain", color: "#326CE5" },
  { name: "CI/CD", icon: "devicon-jenkins-plain", color: "#FFFFFF" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored", color: "#FF9900" },
  { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
  { name: "GitHub", icon: "devicon-github-original", color: "#FFFFFF" },
  { name: "Socket.IO", icon: "devicon-socketio-original", color: "#FFFFFF" }
];


  const visibleSkills = showAll ? allSkills : allSkills.slice(0, 12);

  const handleShowAllClick = () => {
    setIsButtonClick(true);
    setShowAll(!showAll);
  };

  return (
    <section ref={sectionRef} id="skills" className="py-12" style={{ scrollMarginTop: '50px' }} >
      {/* Header */}
<div className="mb-16 text-center">
  {/* Small Label */}
  <h5 className="mb-1 text-sm tracking-[0.3em] text-zinc-500 uppercase">
    My Skillset
  </h5>

  {/* Main Heading */}
<h2 className="text-[3rem] font-bold  overflow-visible text-white">    The Magic{" "}
    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent italic">
      Behind
    </span>
  </h2>
</div>

      {/* Skills Grid - Container chota with more padding */}
      <div className="mx-auto max-w-6xl px-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {visibleSkills.map((skill, index) => {
            // Agar button click hai aur index >= 12, to fast animation
            const isNewCard = index >= 12 && isButtonClick;
            const animationDelay = isNewCard 
              ? `${(index - 12) * 50}ms`  // Fast delay for button click
              : isVisible 
                ? `${index * 80}ms`  // Normal delay for scroll animation
                : '0ms';

            return (
              <div
                key={skill.name}
                className={`group relative flex aspect-square flex-col items-center justify-center 
                           overflow-hidden rounded-2xl border border-zinc-800/80 
                           bg-black/90 backdrop-blur-sm shadow-lg shadow-black/60
                           transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 
                           hover:shadow-2xl hover:shadow-purple-900/30
                           ${isNewCard || isVisible ? 'animate-fadeInBlur' : 'opacity-0'}`}
                style={{
                  animationDelay: animationDelay
                }}
              >
                {/* Enhanced radial glow behind icon */}
                <div 
                  className="absolute inset-0 opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-60"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}, transparent 60%)`
                  }}
                />

                {/* Icon - Using Devicon */}
                <i 
                  className={`${skill.icon} relative z-10 mb-3 text-6xl transition-transform duration-300 group-hover:scale-110`}
                  style={{ color: skill.color }}
                />

                {/* Name */}
                <p className="relative z-10 text-center text-sm font-semibold text-white">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleShowAllClick}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 
                       text-sm font-medium text-zinc-200 
                       transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
          >
            {showAll ? "Show Less" : "Show All Skills"}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInBlur {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }

        .animate-fadeInBlur {
          animation: fadeInBlur 500ms ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Skills;