import React, { useState } from "react";
import "../CSS/About.css";
import Book1 from "../Assets/Client3_Book3.png";

function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    const contactData = {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    };
    localStorage.setItem("contactFormSubmission", JSON.stringify(contactData));

    // Clear form fields and error
    setName("");
    setEmail("");
    setMessage("");
    setError(""); 

    alert("Your message has been successfully submitted!");
  };

  // Handle form reset (Clear Form button)
  const handleClear = () => {
    setName("");
    setEmail("");
    setMessage("");
    setError(""); // Clear error
  };

  return (
    <section id="about" className="about">
      <section className="about">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="hours">
            <h3>Hours of Operation</h3>
            <p>Monday–Friday: 9 a.m. to 8 p.m.</p>
            <p>Saturday: 10 a.m. to 6 p.m.</p>
            <p>Sunday: 11 a.m. to 5 p.m.</p>
          </div>
          <p className="about-description">
            Book Haven Bookstore is a local treasure for book lovers, offering a diverse selection of reading materials and office essentials.
          </p>
        </div>
      </section>

            {/* Books Categories */}
    <section className="categories">
      <h2>Books Categories</h2>
      <div className="category-items">
        <div className="category">Books</div>
        <div className="category">Magazines</div>
        <div className="category">Journals</div>
        <div className="category">Office Supplies</div>
      </div>
    </section>

      {/* Contact Us Section */}
      <div className="contact-us">
        <div className="contact-form-container">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            {error && <p className="error">{error}</p>} {/* Error message display */}

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              required
            ></textarea>

            <div className="button-group">
              <button type="submit" className="submit-btn">Submit</button>
              <button type="button" onClick={handleClear} className="clear-btn">Clear Form</button>
            </div>
          </form>
        </div>
        <div className="contact-image">
          <img src={Book1} alt="Book Haven" />
        </div>
      </div>

      {/* Location Map Section */}
      <div className="location-map">
  <h3>Visit Us</h3>

  {/* Google Maps Embed */}
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662976.2967664173!2d138.44752931295974!3d35.504263896324005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2ske!4v1743644447702!5m2!1sen!2ske"
      width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</div>

    </section>
  );
}

export default About;
