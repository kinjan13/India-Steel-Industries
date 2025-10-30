import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaSearch,
  FaBars,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Left side - Logo */}
          <div className="nav-left">
            <h2 className="nav-title">Indian Steel Industries</h2>
          </div>

          {/* Right side - Icons */}
          <div className="nav-icons">
            

            <Link to="/contact" className="nav-icon" title="Contact Us">
              <FaPhoneAlt />
            </Link>

            <div className="nav-icon" title="Search" onClick={toggleSearch}>
              <FaSearch />
            </div>

            {/* Theme Toggle */}
            <div className="nav-icon" title="Toggle Theme" onClick={toggleTheme}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </div>

            <div className="menu-toggle" onClick={toggleSidebar}>
              <FaBars />
            </div>
          </div>
        </div>
      </nav>

      {/* Search Box - Drops Below Navbar */}
      <div className={`search-dropdown ${searchOpen ? "show" : ""}`}>
        <input
          type="text"
          placeholder="Search products, categories..."
          className="search-input"
          autoFocus
        />
        <button className="search-btn">Search</button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={toggleSidebar}>
          ×
        </div>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
          <li><Link to="/manufacturing" onClick={toggleSidebar}>Manufacturing</Link></li>
          <li><Link to="/trading" onClick={toggleSidebar}>Trading</Link></li>
          <li><Link to="/products" onClick={toggleSidebar}>Products</Link></li>
          <li><Link to="/quality" onClick={toggleSidebar}>Quality</Link></li>
          <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {(sidebarOpen || searchOpen) && (
        <div
          className="overlay"
          onClick={() => {
            setSidebarOpen(false);
            setSearchOpen(false);
          }}
        ></div>
      )}
    </>
  );
}

export default Navbar;
