import React, { useState } from "react";
import { X } from "lucide-react";
import "./ContactPanel.css";

const ContactPanel = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault(); // This prevents page reload
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you can add your form submission logic
      // For example, sending data to an API
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus("success");
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus(null);
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      {/* Modal Card */}
      <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">Let's Work Together</h2>
          <button
            className="contact-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sub text */}
        <p className="contact-subtext">
          Got a product idea or technical challenge?
          <br />
          I’d love to hear about it.
        </p>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Start the Conversation
</label>
            <textarea
              rows="4"
              name="message"
              placeholder="What are you building?"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button 
            type="submit" 
            className="contact-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <p style={{ color: "#10b981", fontSize: "0.875rem", marginTop: "0.5rem", textAlign: "center" }}>
              Will Connet to you soon...
            </p>
          )}
          
          {submitStatus === "error" && (
            <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.5rem", textAlign: "center" }}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>

      </div>
    </div>
  );
};

export default ContactPanel;