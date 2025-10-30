import React, { useEffect, useRef } from "react";
import "./Home.css";

function Home() {
  const storyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("fade-in");
          } else {
            // remove fade-in when scrolled out so it can re-trigger again
            el.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% visible
    );

    const el = storyRef.current;
    if (el) observer.observe(el);

    return () => el && observer.unobserve(el);
  }, []);

  return (
    <div className="home">
      {/* Video Section */}
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
    </div>
  );
}

export default Home;
