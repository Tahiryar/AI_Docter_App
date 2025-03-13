import React from 'react';

function Navbar() {
  return (
    <nav style={{ 
      background: "#007bff", 
      padding: "10px 20px", 
      color: "white", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      {/* Logo and Brand Name */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img 
          src="https://via.placeholder.com/40" 
          alt="Logo" 
          style={{ marginRight: "10px", borderRadius: "50%" }}
        />
        <h2 style={{ margin: 0, fontSize: "24px" }}>AI Symptom Checker</h2>
      </div>

      {/* Navigation Links */}
      <ul style={{ 
        listStyle: "none", 
        display: "flex", 
        margin: 0, 
        padding: 0 
      }}>
        <li style={{ margin: "0 15px" }}><a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
        <li style={{ margin: "0 15px" }}><a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
        <li style={{ margin: "0 15px" }}><a href="/services" style={{ color: "white", textDecoration: "none" }}>Services</a></li>
        <li style={{ margin: "0 15px" }}><a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
      </ul>

      {/* Search Bar */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <input 
          type="text" 
          placeholder="Search symptoms..." 
          style={{ 
            padding: "8px", 
            borderRadius: "4px", 
            border: "none", 
            marginRight: "10px" 
          }} 
        />
        <button style={{ 
          padding: "8px 16px", 
          borderRadius: "4px", 
          border: "none", 
          background: "#0056b3", 
          color: "white", 
          cursor: "pointer" 
        }}>
          Search
        </button>
      </div>
    </nav>
  );
}

export default Navbar;