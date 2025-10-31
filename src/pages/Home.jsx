import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import "./Home.css";

function Home() {
  const storyRef = useRef(null);
  const featuredRef = useRef(null);
  const materialRef = useRef(null);

  // 🔹 Fade-in for story & featured sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("fade-in");
          } else {
            el.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (storyRef.current) observer.observe(storyRef.current);
    if (featuredRef.current) observer.observe(featuredRef.current);

    return () => observer.disconnect();
  }, []);

  // 🔹 Zoom In Up animation for Material Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          materialRef.current.classList.add("visible");
        }
      },
      { threshold: 0.4 }
    );

    if (materialRef.current) observer.observe(materialRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* 🔹 Video Section */}
      <div className="video-section">
        <video
          className="background-video"
          src="/assets/steel.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="video-overlay">
          <h1>Welcome to Indian Steel Industries</h1>
          <p>Strength, Innovation & Quality in Every Sheet</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>

      {/* 🔹 Our Story Section */}
      <section className="our-story" ref={storyRef}>
        <div className="story-container">
          <div className="story-text fade-left">
            <h5>OUR STORY</h5>
            <h2>
              Success is <br /> a constant journey
            </h2>
            <p>
              India Steel Industries laid down its roots in the year 1947. It is
              one of the leading and dedicated distributors for the complete
              range of flat products of Tata Steel.
            </p>
            <p>
              Chronicle of hardship, a joint venture of vision and fulfillment
              and priority to passion had assisted India Steel Industries to
              emerge as a corporate leader among distribution channels.
            </p>

            <div className="owner">
              <h4>ABC DEF</h4>
              <p>Owner</p>
            </div>
          </div>

          <div className="story-image fade-right">
            <img src="/assets/steel-yard.jpg" alt="Steel storage" />
          </div>
        </div>
      </section>

      {/* 🔹 Featured Section */}
      <section className="featured-section" ref={featuredRef}>
        <div className="featured-container">
          <div className="featured-image fade-left">
            <img src="/assets/steel.jpg" alt="Steel Factory" />
          </div>

          <div className="featured-content fade-right">
            <h5>FEATURED</h5>
            <h2>Why we're different</h2>
            <p>
              We understand the significance of quality in this competitive
              market, and our primary goal is to provide:
            </p>
            <ul>
              <li>✔ Consumer Satisfaction</li>
              <li>✔ Continuous Improvements</li>
              <li>✔ Quality Involvement</li>
              <li>✔ Quality Assurance</li>
            </ul>

            <div className="counter-section">
              <div className="counter-box">
                <h3>Experience</h3>
                <p>
                  <CountUp start={1} end={150} duration={10} />+
                </p>
              </div>
              <div className="counter-box">
                <h3>Products</h3>
                <p>
                  <CountUp start={1} end={250} duration={10} />+
                </p>
              </div>
              <div className="counter-box">
                <h3>Members</h3>
                <p>
                  <CountUp start={1} end={100000} duration={10} />+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔻 Material Supplies Section */}
      <section className="material-supplies" ref={materialRef}>
        <h2 className="zoom-title">
          <span>Material</span> Supplies
        </h2>

        <div className="supply-container">
          <div className="supply-card">
            <img src="/assets/mild-steel.jpg" alt="Mild Steel" />
            <h3>MILD STEEL</h3>
            <p>
              We procure, stock and supply best quality Long and Flat Structural
              products...
            </p>
            <button>READ MORE</button>
          </div>

          <div className="supply-card">
            <img src="/assets/stainless-steel.jpg" alt="Stainless Steel" />
            <h3>STAINLESS STEEL</h3>
            <p>
              Our Stainless Steel products comprise Tubes, Pipes, Angles, Bars,
              Sheets...
            </p>
            <button>READ MORE</button>
          </div>

          <div className="supply-card">
            <img src="/assets/aluminum.jpg" alt="Aluminum" />
            <h3>ALUMINUM</h3>
            <p>
              We stock and supply finest aluminum Coils and Sheets ranging from
              1.5...
            </p>
            <button>READ MORE</button>
          </div>

          <div className="supply-card">
            <img src="/assets/galvanized-iron.jpg" alt="Galvanized Iron" />
            <h3>GALVANIZED IRON</h3>
            <p>
              We manufacture world-class Galvanized Iron Pipes, Tubes and
              Wires...
            </p>
            <button>READ MORE</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
