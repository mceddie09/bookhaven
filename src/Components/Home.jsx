import React from "react";
import "../CSS/Home.css";
import Book1 from "../Assets/Client3_Book1.png";
import Book3 from "../Assets/Client3_Book2.png";
import Book2 from "../Assets/Client3_Magazine1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
  <section className="hero">
    <div className="hero-text">
      <h1>Welcome to Book Haven Bookstore</h1>
      <p>Your one-stop destination for books, magazines, journals, and office supplies.</p>
      <Link to="/gallery">
        <button className="cta-button">Browse Our Collection</button>
      </Link>
    </div>
    <div className="hero-image"></div>
  </section>
      
      {/* Featured Collection */}
      <section className="featured">
        <h2>Featured Collection</h2>
        <p>Discover our handpicked selection of books and magazines.</p>
        <div className="featured-items">
          <div className="item">
            <div className="item-image">
              <img src= {Book1} alt="Book 1" />
            </div>
            <h3>Cheese lovers</h3>
            <Link to="/gallery">
        <button className="cta-button">Explore</button>
      </Link>
          </div>
          <div className="item">
            <div className="item-image">
              <img src= {Book2} alt="Book 2" />
            </div>

            <h3>Ball</h3>
            <Link to="/gallery">
        <button className="cta-button">Explore</button>
      </Link>
          </div>
          <div className="item">
            <div className="item-image">
              <img src= {Book3} alt="Book 3" />
            </div>
            <h3>Glory Riders</h3>
            <Link to="/gallery">
        <button className="cta-button">Explore</button>
      </Link>
          </div>
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

      {/* Testimonials */}
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-items">
        <div className="testimonial">
          <p>"An exceptional collection of books and an easy browsing experience. Book Haven is my go-to bookstore!"</p>
          <div className="client"></div>
          <p>John Doe</p>
        </div>
        <div className="testimonial">
          <p>"I love the variety of office supplies and journals they offer. Always high quality and great service!"</p>
          <div className="client"></div>
          <p>Jane Smith</p>
        </div>
        <div className="testimonial">
          <p>"A perfect place to find hidden literary gems. I always find something new and exciting every time I visit!"</p>
          <div className="client"></div>
          <p>Mark Johnson</p>
        </div>
      </div>
    </section>

      
      {/* Call to Action */}
    <section className="cta">
      <div className="cta-content">
        <div className="cta-text">
          <h2>Stay Connected with Book Haven</h2>
          <p>Join our vibrant community of book lovers</p>
        </div>
        <div className="cta-buttons">
        <Link to="/gallery">
        <button className="cta-button">Explore Our Collection</button>
      </Link>
      <Link to="/gallery">
        <button className="cta-button contact">Get in Touch</button>
      </Link>
        </div>
      </div>
    </section>
      
      {/* About Us */}
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

    </div>
  );
};

export default Home;
