import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Video Section */}
      <div className="video-section">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          src="/assets/steel.mp4" // place your video inside public/assets folder
        ></video>

        <div className="video-overlay">
          <h1>Welcome to Indian Steel</h1>
          <p>Manufacturing & Trading Excellence in Steel Industry</p>
        </div>
      </div>

      {/* Additional Content */}
      <div className="home-content">
        <h2>About Our Business</h2>
        <p>
          Indian Steel specializes in high-quality manufacturing and trading of steel products.
          With advanced production technology and a strong distribution network, we deliver
          strength, precision, and trust across industries.
        </p>
      </div>
    </div>
  );
}

export default Home;
