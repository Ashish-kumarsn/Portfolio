import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <div className="nav-container">
        <div className="nav-capsule">
          <div className="nav-links">

            <a href="#home" className={`nav-link ${active === "home" ? "active" : ""}`}>
              <span className="link-text">Home</span>
              <span className="link-dot"></span>
            </a>

            <a href="#about" className={`nav-link ${active === "about" ? "active" : ""}`}>
              <span className="link-text">About</span>
              <span className="link-dot"></span>
            </a>

            <a href="#skills" className={`nav-link ${active === "skills" ? "active" : ""}`}>
              <span className="link-text">Skills</span>
              <span className="link-dot"></span>
            </a>

            <a href="#projects" className={`nav-link ${active === "projects" ? "active" : ""}`}>
              <span className="link-text">Projects</span>
              <span className="link-dot"></span>
            </a>

            {/* MORE WRAPPER */}
            <div
              className="more-wrapper"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              {/* More Button */}
              <div className="nav-link more-link">
                <span className="link-text">More</span>
                <span className="link-dot"></span>
              </div>

              {/* Dropdown */}
              <div className={`more-dropdown ${moreOpen ? "open" : ""}`}>

                <div className="dropdown-grid">

                  {/* LEFT FEATURED CARD */}
                  <a href="#labs" className="dropdown-featured">
                    <div className="featured-content">
                      <div className="featured-title">Labs</div>
                      <div className="featured-description">
                        Experimental playground & fun micro-tools
                      </div>
                    </div>
                  </a>

                  {/* RIGHT SIDE STACKED */}
                  <div className="dropdown-right">

                    <a href="#links" className="dropdown-card">
                      <div>
                        <div className="card-title">Links</div>
                        <div className="card-description">
                          Socials & Profiles
                        </div>
                      </div>
                    </a>

                    <a href="#uses" className="dropdown-card">
                      <div>
                        <div className="card-title">Uses</div>
                        <div className="card-description">
                          My gear & software
                        </div>
                      </div>
                    </a>

                    <a href="#guestbook" className="dropdown-card">
                      <div>
                        <div className="card-title">Guestbook</div>
                        <div className="card-description">
                          Sign my wall
                        </div>
                      </div>
                    </a>

                  </div>

                </div>

              </div>
            </div>

            <a href="#contact" className="cta-button">
              <span className="cta-text">Book a Call</span>
            </a>

          </div>
        </div>
      </div>

      <a 
  href="/Resume_Ashish_Kumar_70.pdf" 
  download="Ashish_Kumar_Resume.pdf"
  className="nav-action"
>
  ⌘
</a>


    </nav>
  );
};

export default Nav;