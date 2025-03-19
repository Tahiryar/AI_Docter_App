import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle search input
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    // Yahan aap search functionality implement kar sakte hain
  };

  return (
    <nav
      style={{
        background: "#007bff",
        padding: "10px 20px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo and Brand Name */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          style={{ marginRight: "10px", borderRadius: "50%" }}
        />
        <h2 style={{ margin: 0, fontSize: "24px" }}>AI Symptom Checker</h2>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div
        style={{ display: "none", cursor: "pointer" }}
        onClick={toggleMenu}
      >
        <span style={{ fontSize: "24px" }}>☰</span>
      </div>

      {/* Navigation Links */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          margin: 0,
          padding: 0,
          alignItems: "center",
          transition: "all 0.3s ease",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          position: window.innerWidth <= 768 ? "absolute" : "static",
          top: window.innerWidth <= 768 ? "60px" : "auto",
          right: window.innerWidth <= 768 ? "20px" : "auto",
          background: window.innerWidth <= 768 ? "#007bff" : "transparent",
          borderRadius: window.innerWidth <= 768 ? "4px" : "0",
          boxShadow: window.innerWidth <= 768 ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
          display: window.innerWidth <= 768 && !isMenuOpen ? "none" : "flex",
        }}
      >
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/"
            style={{
              color: location.pathname === "/" ? "#ffdd57" : "white",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/about"
            style={{
              color: location.pathname === "/about" ? "#ffdd57" : "white",
              textDecoration: "none",
            }}
          >
            About
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/services"
            style={{
              color: location.pathname === "/services" ? "#ffdd57" : "white",
              textDecoration: "none",
            }}
          >
            Services
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/contact"
            style={{
              color: location.pathname === "/contact" ? "#ffdd57" : "white",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </li>
        {/* Add Login and Signup Links */}
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/login"
            style={{
              color: location.pathname === "/login" ? "#ffdd57" : "white",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/signup"
            style={{
              color: location.pathname === "/signup" ? "#ffdd57" : "white",
              textDecoration: "none",
            }}
          >
            Signup
          </Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <form onSubmit={handleSearch} style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Search symptoms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "none",
              marginRight: "10px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "none",
              background: "#0056b3",
              color: "white",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;