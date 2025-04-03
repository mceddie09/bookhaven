import React, { useState } from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareThreads } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import "../CSS/Footer.css";
import logo from "../Assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const footerNavigation = [
    {
      title: "Home",
      link: "/",
      subLinks: ["Overview", "Features", "Subscribe"],
    },
    {
      title: "Gallery",
      link: "/gallery",
      subLinks: ["Books", "Authors"],
    },
    {
      title: "About",
      link: "/about",
      subLinks: ["Our Story", "Team", "Careers"],
    },
    {
      title: "Community",
      link: "/custom",
      subLinks: ["Events", "Forums", "Support"],
    },
  ];

  const socialIcons = [
    { icon: <FaFacebook />, label: "Facebook", link: "#" },
    { icon: <AiFillTikTok />, label: "TikTok", link: "#" },
    { icon: <FaInstagramSquare />, label: "Instagram", link: "#" },
    { icon: <FaSquareXTwitter />, label: "Twitter", link: "#" },
    { icon: <FaLinkedin />, label: "LinkedIn", link: "#" },
    { icon: <FaSquareThreads />, label: "Threads", link: "#" },
    { icon: <FaYoutube />, label: "YouTube", link: "#" },
  ];

  const handleSubscribe = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Subscribed successfully!");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <p className="footer-copyright">© 2024 Book Haven</p>
          <div className="social-icons">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.link} className="social-link" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
          <div className="footer-newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="newsletter-button" onClick={handleSubscribe}>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-nav">
          {footerNavigation.map((column, index) => (
            <div key={index} className="footer-column">
              <a href={column.link} className="footer-title">
                {column.title}
              </a>
              {column.subLinks.map((link, linkIndex) => (
                <a key={linkIndex} href="#" className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
