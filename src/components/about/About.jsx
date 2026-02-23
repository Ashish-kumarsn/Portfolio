/*
import React, { useEffect } from "react";
import "./About.css";
import ME from "../../assets/Ashish2.png";
import HTMLIcon from "../../assets/html-icon.png";
import JSIcon from "../../assets/js-icon.png";
import ReactIcon from "../../assets/react-icon.png";

function About() {
  // Add scroll animation effect
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="about">
      
<div className="mb-16 text-center">
  <h2 className="mb-4 text-5xl font-bold text-white">
    About Me
  </h2>

</div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Ashish Kumar Profile" className="avatar-img" />
            <img src={HTMLIcon} alt="HTML" className="tech-icon html" />
            <img src={JSIcon} alt="JavaScript" className="tech-icon js" />
            <img src={ReactIcon} alt="React" className="tech-icon react" />
          </div>
        </div>

        <div className="about__content">
          <p className="fade-in">
            Hi, I'm <span className="cursor-target--highlight">
              <strong>Ashish Kumar</strong>
            </span>, a passionate and dedicated Frontend-focused MERN Stack Developer and an enthusiastic DSA problem solver. I am a Computer Science student with a deep interest in technology.
          </p>

          <p className="fade-in">
            I have solved <span className="cursor-target--highlight highlight">300+ problems on LeetCode</span> and <span className="cursor-target--highlight highlight">200+ problems on GeeksforGeeks</span>, which has strengthened my foundation in Data Structures and Algorithms. I'm consistently improving my problem-solving and coding skills to crack competitive programming and technical interviews.
          </p>

          <p className="fade-in">
            My core frontend skills include HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React.js, Redux, and Next.js. On the backend, I possess intermediate-level expertise in Node.js, Express.js, and MongoDB. I also have experience with Firebase authentication and JWT (JSON Web Tokens).
          </p>

          <p className="fade-in">
            I’m passionate about continuously learning new technologies, frameworks, and sharpening my DSA skills to keep up with today’s fast-evolving tech world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

*/




import React, { useEffect } from "react";
import "./About.css";
import ME from "../../assets/Ashish2.png";
import HTMLIcon from "../../assets/html-icon.png";
import JSIcon from "../../assets/js-icon.png";
import ReactIcon from "../../assets/react-icon.png";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function About() {
  // Add scroll animation effect
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="about">
      <div className="about__container">
        {/* Left Side - Text Content */}
        <div className="about__content">
          <h5 className="intro-label fade-in">A QUICK GLANCE</h5>
          
          <h1 className="about__headline fade-in">
            Building the bridge between ideas and  <br />
            <span className="highlight-text"> experiences</span>
          </h1>

          <div className="about__text">
            <p className="fade-in">
              I’m Ashish Kumar, a Full-stack and DevOps-focused engineer who transforms real-world problems into scalable, production-ready platforms.
               From architecting robust backend systems to crafting seamless frontend experiences, I manage the complete lifecycle of modern web applications with clean, reusable code and performance-first design.
               </p>

            

            <p className="fade-in">
              My code is built to last, helping your startup reach the next level ensuring reliability, automation, and long-term maintainability
            </p>
          </div>

          {/* Social Icons */}
          <div className="about__socials fade-in">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </a>
          </div>
        </div>

        {/* Right Side - Image with 3D Effect */}
        <div className="about__image-container fade-in">
          <div className="about__image-wrapper">
            <img src={ME} alt="Ashish Kumar Profile" className="about__avatar" />
            
            {/* Floating Tech Icons */}
            <img src={HTMLIcon} alt="HTML" className="tech-icon html" />
            <img src={JSIcon} alt="JavaScript" className="tech-icon js" />
            <img src={ReactIcon} alt="React" className="tech-icon react" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;