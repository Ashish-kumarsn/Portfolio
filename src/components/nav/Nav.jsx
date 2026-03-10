import React, { useEffect, useState, useRef } from "react";
import "./Nav.css";

const Nav = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [navOffset, setNavOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const calculateOffset = () => {
      if (!containerRef.current) return 0;
      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const viewportWidth = window.innerWidth;
      // Current left edge = viewportWidth - 48px(3rem right margin) - containerWidth
      const currentLeft = viewportWidth - 48 - containerWidth;
      // Target left for center = (viewportWidth - containerWidth) / 2
      const targetLeft = (viewportWidth - containerWidth) / 2;
      return targetLeft - currentLeft;
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
      setNavOffset(isScrolled ? calculateOffset() : 0);

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

    const handleResize = () => {
      if (scrolled) setNavOffset(calculateOffset());
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolled]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
    setMobileMoreOpen(false);
  };

  return (
    <>
      {/* ── DESKTOP NAV (unchanged) ── */}
      <nav className={scrolled ? "nav scrolled" : "nav"}>
        <div
          className="nav-container"
          ref={containerRef}
          style={{ transform: `translateX(${navOffset}px)` }}
        >
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
                <div className="nav-link more-link">
                  <span className="link-text">More</span>
                  <span className="link-dot"></span>
                </div>

                <div className={`more-dropdown ${moreOpen ? "open" : ""}`}>
                  <div className="dropdown-grid">
                    <a href="#labs" className="dropdown-featured">
                      <div className="featured-content">
                        <div className="featured-title">Labs</div>
                        <div className="featured-description">
                          Experimental playground & fun micro-tools
                        </div>
                      </div>
                    </a>

                    <div className="dropdown-right">
                      <a href="#links" className="dropdown-card">
                        <div>
                          <div className="card-title">Links</div>
                          <div className="card-description">Socials & Profiles</div>
                        </div>
                      </a>
                      <a href="#uses" className="dropdown-card">
                        <div>
                          <div className="card-title">Uses</div>
                          <div className="card-description">My gear & software</div>
                        </div>
                      </a>
                      <a href="#guestbook" className="dropdown-card">
                        <div>
                          <div className="card-title">Guestbook</div>
                          <div className="card-description">Sign my wall</div>
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
          title="Download Resume"
        >
          ⌘
        </a>
      </nav>

      {/* ── MOBILE HAMBURGER BUTTON ── */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu">

          {/* Main links */}
          <div className="mobile-links">
            <a href="#home" className={`mobile-link ${active === "home" ? "active" : ""}`} onClick={handleMobileLinkClick}>
              Home
            </a>
            <a href="#about" className={`mobile-link ${active === "about" ? "active" : ""}`} onClick={handleMobileLinkClick}>
              About
            </a>
            <a href="#skills" className={`mobile-link ${active === "skills" ? "active" : ""}`} onClick={handleMobileLinkClick}>
              Skills
            </a>
            <a href="#projects" className={`mobile-link ${active === "projects" ? "active" : ""}`} onClick={handleMobileLinkClick}>
              Projects
            </a>

            {/* Mobile More - accordion */}
            <div className="mobile-more">
              <button
                className={`mobile-link mobile-more-btn ${mobileMoreOpen ? "active" : ""}`}
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
              >
                More
                <span className={`chevron ${mobileMoreOpen ? "up" : ""}`}>›</span>
              </button>

              <div className={`mobile-more-content ${mobileMoreOpen ? "open" : ""}`}>
                <a href="#labs" className="mobile-sub-link" onClick={handleMobileLinkClick}>
                  <span className="sub-title">Labs</span>
                  <span className="sub-desc">Experimental playground</span>
                </a>
                <a href="#links" className="mobile-sub-link" onClick={handleMobileLinkClick}>
                  <span className="sub-title">Links</span>
                  <span className="sub-desc">Socials & Profiles</span>
                </a>
                <a href="#uses" className="mobile-sub-link" onClick={handleMobileLinkClick}>
                  <span className="sub-title">Uses</span>
                  <span className="sub-desc">My gear & software</span>
                </a>
                <a href="#guestbook" className="mobile-sub-link" onClick={handleMobileLinkClick}>
                  <span className="sub-title">Guestbook</span>
                  <span className="sub-desc">Sign my wall</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom actions */}
          <div className="mobile-actions">
            <a href="#contact" className="mobile-cta" onClick={handleMobileLinkClick}>
              Book a Call
            </a>
            <a
              href="/Resume_Ashish_Kumar_70.pdf"
              download="Ashish_Kumar_Resume.pdf"
              className="mobile-resume"
              onClick={handleMobileLinkClick}
            >
              Download Resume ↓
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Nav;