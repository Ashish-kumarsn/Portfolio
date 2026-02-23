import React , { useState }from 'react';
import './Portfolio.css'

import ContactPanel from "./ContactPanel";
import profileImage from "../../assets/Chatgpt image generated dp.png";


import { Code, CloudCog, Brain } from 'lucide-react';

const Portfolio = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="portfolio-wrapper">
            {/* Left Column */}
            <div className="left-section">
                <h1 className="hero-heading">
                    Building Scalable<br />
                     Web Apps<br />
                    & Cloud Systems
                </h1>


                <div className="profile-wrapper">
          <div className="profile-img-container">
            <div className="profile-overlay"></div>
            <img
              src={profileImage}
              alt="Ashish Kumar"
              className="profile-img"
            />
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="estimate-btn"
          onClick={() => setOpen(true)}
        >
          <span>Let's Build Something</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          
        </button>

        {/* Contact Modal Overlay - Only on Left Section */}
        <ContactPanel isOpen={open} onClose={() => setOpen(false)} />
        
      </div>


            {/* Right Column */}
            <div className="right-section">
                <div className="credentials-timeline">
                    {/* Credential 1 */}
                    <div className="credential-item">
                        <div className="timeline-connector">
                            <div className="timeline-dot"></div>
                        </div>
                        <div className="credential-marker">
                            <div className="marker-icon">
                                <Code
                                    size={22} strokeWidth={2.5} />
                            </div>
                        </div>
                        <div className="credential-card">
                            <h3 className="credential-heading">Full-Stack Web Development</h3>
                            <p className="credential-text">
                                I design and develop responsive, high-performance web applications using React, Next.js, Node.js, and MongoDB. From frontend UI to backend APIs, I build complete solutions that scale with your business.              </p>
                        </div>
                    </div>

                    {/* Credential 2 */}
                    <div className="credential-item">
                        <div className="timeline-connector">
                            <div className="timeline-dot"></div>
                        </div>
                        <div className="credential-marker">
                            <div className="marker-icon">
                                <CloudCog size={22} strokeWidth={2.5} />
                            </div>
                        </div>
                        <div className="credential-card">
                            <h3 className="credential-heading">DevOps & Cloud Automation</h3>
                            <p className="credential-text">
                                I automate deployments and infrastructure using Docker, Kubernetes, CI/CD pipelines, and AWS. My focus is on zero-downtime deployments, scalability, and production-grade security.
                            </p>
                        </div>
                    </div>

                    {/* Credential 3 */}
                    <div className="credential-item">
                        <div className="timeline-connector">
                            <div className="timeline-dot"></div>
                        </div>
                        <div className="credential-marker">
                            <div className="marker-icon">
                                <Brain size={22} strokeWidth={2.5} />
                            </div>
                        </div>
                        <div className="credential-card">
                            <h3 className="credential-heading">AI-Powered Feature Integration</h3>
                            <p className="credential-text">
                                I integrate AI/ML features like real-time analytics, smart recommendations, chatbots, and computer-vision solutions into web apps to make products more intelligent and future-ready.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};


export default Portfolio;