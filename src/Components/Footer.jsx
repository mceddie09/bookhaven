import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareThreads } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import "../CSS/Footer.css";
import logo from "../Assets/logo.png";

const Footer = () => {
  // Footer navigation links (titles as actual links)
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

  // Social media icons
  const socialIcons = [
    { icon: <FaFacebook />, label: "Facebook", link: "#" },
    { icon: <AiFillTikTok />, label: "TikTok", link: "#" },
    { icon: <FaInstagramSquare />, label: "Instagram", link: "#" },
    { icon: <FaSquareXTwitter />, label: "Twitter", link: "#" },
    { icon: <FaLinkedin />, label: "LinkedIn", link: "#" },
    { icon: <FaSquareThreads />, label: "Threads", link: "#" },
    { icon: <FaYoutube />, label: "YouTube", link: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding Section */}
        <div className="footer-branding">
          <img src={logo} alt="Book Haven Logo" className="logo" />
          <p className="footer-tagline">Your Gateway to Great Reads!</p>
          <p className="footer-copyright">© 2024 Book Haven</p>
          <div className="social-icons">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.link} className="social-link" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Columns */}
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
