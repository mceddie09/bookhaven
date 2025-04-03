import React from "react";
import "../CSS/CustomPage.css";

function CustomPage() {
  return (
    <section id="custom" className="custom">
      <h2>Upcoming Events & Activities</h2>

      {/* Upcoming Events Section */}
      <div className="events-section">
        <div className="event-card">
          <div className="event-header">
            <div className="event-icon" />
            <div className="event-title">Book Signing Event</div>
          </div>
          <div className="event-details">
            Author Meet-and-Greet<br />
            Book Signing<br />
            Q&A Session
          </div>
        </div>

        <div className="event-card">
          <div className="event-header">
            <div className="event-icon" />
            <div className="event-title">Storytime for Kids</div>
          </div>
          <div className="event-details">
            Children's Book Readings<br />
            Craft Activities<br />
            Snacks and Refreshments
          </div>
        </div>

        <div className="event-card">
          <div className="event-header">
            <div className="event-icon" />
            <div className="event-title">Book Club Gathering</div>
          </div>
          <div className="event-details">
            Book Discussion<br />
            Refreshments<br />
            Community Networking
          </div>
        </div>
      </div>

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
    </section>
  );
}

export default CustomPage;
