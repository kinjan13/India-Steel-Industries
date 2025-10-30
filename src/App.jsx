import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");

  // Toggle between themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Apply theme class to <body>
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Home />
    </>
  );
}

export default App;
