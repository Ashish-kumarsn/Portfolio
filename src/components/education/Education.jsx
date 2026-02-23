// import React from "react";
// import "./Education.css";
// import bitSindriLogo from "../../assets/bitsindri.jpeg";
// import akanshaLogo from "../../assets/akansha-40.webp"
// import jnvLogo from "../../assets/jnv1.jpg"; 


// const Education = () => {
//   return (
//     <section id="education" className="education">
//       <h5>My Academic Journey</h5>
//       <h2>Education</h2>

//       <div className="education-item">
//         <img src={bitSindriLogo} alt="BIT Sindri Logo" />
//         <div className="education-details">
//           <h3>B.Tech in Computer Science & Engineering</h3>
//           <p className="university">BIT Sindri, Jharkhand</p>
//           <p className="duration">2022 - 2026</p>
//         </div>
//       </div>

//       <div className="education-item">
//         <img src={akanshaLogo} alt="Akansha 40 Logo" />
//         <div className="education-details">
//           <h3>JEE Mains & Advanced Preparation</h3>
//           <p className="institution">Akansha 40 (State Top Batch)</p>
//           <p className="duration">2020 - 2022</p>
//         </div>
//       </div>

//       <div className="education-item">
//         <img src={jnvLogo} alt="JNV Logo" />
//         <div className="education-details">
//           <h3>Secondary & Senior Secondary Education</h3>
//           <p className="institution">Agarwala High School (JAC)</p>
//           <p className="duration">2018 - 2020</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;




import React from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      icon: <GraduationCap size={40} strokeWidth={1.5} />,
      title: "B.Tech in Computer Science & Engineering",
      institution: "BIT Sindri, Jharkhand",
      duration: "2022 - 2026"
    },
    {
      icon: <BookOpen size={40} strokeWidth={1.5} />,
      title: "JEE Mains & Advanced Preparation",
      institution: "96 percentile (rank-36,589)",
      duration: "2022"
    },
    {
      icon: <School size={40} strokeWidth={1.5} />,
      title: "Higher Secondary Education(Akansha)",
      institution: "93.60 (State top-batch)",
      duration: "2020 - 2022"
    }
  ];

  return (
    <section id="education" className="py-20">
      {/* Header */}
      <div className="mb-16 text-center">
        {/* Small Line */}
        <p className="mb-3 text-lg text-zinc-400">
          Shaping my technical mindset
        </p>

        {/* Big Heading */}
        <h2 className="text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] text-white">
          Academic{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent italic">
            MileStones
          </span>
        </h2>
      </div>

      {/* Education Cards Grid */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/70"
            >
              {/* Icon */}
              <div className="mb-6 text-white">
                {item.icon}
              </div>

              {/* Title */}
              {/* Title */}
              <h3 className="mb-3 h-14 text-xl font-bold text-white leading-tight">
                {item.title}
              </h3>

              {/* Institution */}
              <p className="mb-2 text-sm font-medium text-zinc-300">
                {item.institution}
              </p>

              {/* Duration */}
              <p className="text-sm text-zinc-500">
                {item.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;