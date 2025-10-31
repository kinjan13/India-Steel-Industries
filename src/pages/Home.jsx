import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import "./Home.css";

function Home() {
  const storyRef = useRef(null);
  const featuredRef = useRef(null);

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

    const el = storyRef.current;
    if (el) observer.observe(el);

    const feat = featuredRef.current;
    if (feat) observer.observe(feat);

    return () => {
      el && observer.unobserve(el);
      feat && observer.unobserve(feat);
    };
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

      {/* 🔹 Features Section 1
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <img src="/assets/factory-icon.png" alt="Syngas Plant" />
            <div className="feature-text">
              <h3>India's Only Syngas Based</h3>
              <p>Coal Gasification Plant for Steel Making</p>
            </div>
          </div>

          <div className="feature-card">
            <img src="/assets/coil-icon.png" alt="Coil Plates" />
            <div className="feature-text">
              <h3>India's Widest</h3>
              <p>Plates Producer in Coil Form</p>
            </div>
          </div>

          <div className="feature-card">
            <img src="/assets/rail-icon.png" alt="Private Rail" />
            <div className="feature-text">
              <h3>India's Only</h3>
              <p>Private Rail Manufacturer</p>
            </div>
          </div>

          <div className="feature-card">
            <img
              src="/assets/steel-structure-icon.png"
              alt="Steel Structure"
            />
            <div className="feature-text">
              <h3>India's Only Steel Company </h3>
              <p>Produce Fabricated Steel Structures</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* 🔹 Featured Section 2 */}
      <section className="featured-section" ref={featuredRef}>
        <div className="featured-container">
          {/* Left Side Image */}
          <div className="featured-image fade-left">
            <img src="/assets/steel.jpg" alt="Steel Factory" />
          </div>

          {/* Right Side Text */}
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

            {/* Animated Counters */}
            <div className="counter-section">
              <div className="counter-box">
                <h3>Experience</h3>
                <p>
                  <CountUp start={1} end={100} duration={10} />+
                </p>
              </div>
              <div className="counter-box">
                <h3>Products</h3>
                <p>
                  <CountUp start={1} end={50} duration={10} />+
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

            {/* Animated Counters
            <div className="counter-section">
              <div className="counter-box">
                <h3>Experience</h3>
                <p>
                  <CountUp start={1} end={74} duration={20} />+
                </p>
              </div>
              <div className="counter-box">
                <h3>Products</h3>
                <p>
                  <CountUp start={1} end={10} duration={20} />+
                </p>
              </div>
              <div className="counter-box">
                <h3>Members</h3>
                <p>
                  <CountUp start={1} end={100} duration={20} />+
                </p>
              </div>
            </div> */}
          
        </div>
      </section>
    </div>
  );
}

export default Home;
