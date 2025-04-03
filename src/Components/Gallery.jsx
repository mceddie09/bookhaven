import React, { useState, useEffect } from "react";
import "../CSS/Gallery.css";

// Import book images
import book1 from "../Assets/Client3_Book1.png";
import book2 from "../Assets/Client3_Book2.png";
import book3 from "../Assets/Client3_Book3.png";
import book4 from "../Assets/Client3_Magazine1.png";
import book5 from "../Assets/Client3_Magazine2.png";
import book6 from "../Assets/Client3_Magazine3.png";
import book7 from "../Assets/Client3_Notebook.png";
import book8 from "../Assets/Client3_Stickers.png";
import book9 from "../Assets/Client3_ToteBag.png";

const Gallery = () => {
  // Book data array
  const books = [
    { id: 1, title: "Brie Mine 4Ever", description: "A book for cheese lovers.", image: book1 },
    { id: 2, title: "WGlory Riders", description: "A book about bikers.", image: book2 },
    { id: 3, title: "Sorcerer’s Shadowed Chronicles", description: "A fantasy book.", image: book3 },
    { id: 4, title: "Ball", description: "A magazine about pickleball.", image: book4 },
    { id: 5, title: "Travel", description: "A magazine for travelers.", image: book5 },
    { id: 6, title: "Eat", description: "A magazine for foodies.", image: book6 },
    { id: 7, title: "", description: "A canvas tote bag with black lettering that says ALL I DO IS READ READ READ.", image: book7 },
    { id: 8, title: "", description: "A notebook with text on the cover that says Book Haven Bookstore.", image: book8 },
    { id: 9, title: "", description: "A set of four Book Haven Bookstore stickers that promote reading.", image: book9 },
  ];

  // State for search query and cart
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  // Load cart from session storage on component mount
  useEffect(() => {
    const savedCart = sessionStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to session storage
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Filter books based on search
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add book to cart
  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  // Remove book from cart
  const removeFromCart = (bookId) => {
    setCart(cart.filter(book => book.id !== bookId));
  };

  // Clear cart with confirmation alert
  const clearCart = () => {
    if (cart.length === 0) {
      alert("Your cart is already empty.");
      return;
    }
    if (window.confirm("Are you sure you want to clear the cart?")) {
      setCart([]);
      sessionStorage.removeItem("cart");
      alert("Your cart has been cleared.");
    }
  };

  // Process order
  const processOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items before processing the order.");
      return;
    }
    if (window.confirm("Are you sure you want to place the order?")) {
      setCart([]);
      sessionStorage.removeItem("cart");
      alert("Your order has been successfully placed!");
    }
  };

  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search books..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Shopping Cart */}
      <div className="cart">
        <h3>Shopping Cart ({cart.length})</h3>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((book, index) => (
                <li key={index} className="cart-item">
                  {book.title}
                  <button className="remove-btn" onClick={() => removeFromCart(book.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <button className="process-order" onClick={processOrder}>Process Order</button>
            <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
          </>
        )}
      </div>

      {/* Books Grid */}
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-item">
              <img src={book.image} alt={book.title} className="book-image" />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-description">{book.description}</p>
              <button className="add-to-cart" onClick={() => addToCart(book)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No books found.</p>
        )}
      </div>
    </section>
  );
};

export default Gallery;
