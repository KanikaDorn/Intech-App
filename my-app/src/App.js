import React from "react";
import "./App.css"; // Optional: Add CSS file for styling
import groupImage from './assets/images/Group.png';
import ML from './assets/images/ML.png';
import SL from './assets/images/SL.png';
import demoImage from './assets/images/demo-picture.png'; // Correct import path
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTelegram,
//   faInstagram,
//   faFacebook,
//   faXTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// {/* <FontAwesomeIcon icon={faCoffee} /> */}





function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="http://192.168.0.77:8000/_nuxt/intech_logo-clear.BqQbyHg-.png"
          alt="Logo"
          className="logo-image"
        />
      </div>
      <ul className="navbar-links">
        <li>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("products");
            }}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <button className="request-demo-button">Request Demo</button>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-quote">
        <p>"Empowering smarter workplaces with innovative solutions – InTech."</p>
      </div>
      <div className="footer-links">
        <div className="quick-links">
          <h3 className="h3">Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <address>
            Green Arcade 1, 2 And 3, Thmey Village, Chambak Commune, Phnom
            Srouch District, Kampong Speu Province, Cambodia
            <br />
            012 345 678
          </address>
          {/* <div className="social-icons">
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} className="social-icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

function App() {
  const solutions = [
    {
      title: "Mobile Attendance System",
      description:
        "An intuitive mobile app that makes clocking in and out seamless for employees.",
      image: SL, // Replace with the actual image path or URL
    },
    {
      title: "Face Recognition Attendance System",
      description:
        "Advanced face recognition technology for accurate attendance tracking.",
      image: ML, // Replace with the actual image path or URL
    },
    {
      title: "Smart Laundry System",
      description:
        "Receive weekly QR codes to activate laundry machines with ease.",
      image: groupImage, // Replace with the actual image path or URL
    },
  ];

  return (
    <>
      <Navbar />
      <div className="content">
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h2>Revolutionizing Workplace Efficiency with Smart Technology!</h2>
            <p>
              Explore our cutting-edge solutions designed to simplify and secure
              your business operations.
            </p>
            <button className="learn-more-button">Learn More</button>
          </div>
          <div className="hero-image">
            <img
              src="https://s3-alpha-sig.figma.com/img/be37/ffd1/4be67f34629bd4e447d1cf3a6c023545?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cm5QjLofqJZdYQWy-B3n~FxspLYRvYHsFd8-cMA2RbVrRgtYzT37W9uxB84sD53sB54KPUPwa6VIlDBRRdoMyUPI~Uej4~5iP6umvH8iz764VgT1DYlUiNz10MD-wm1scPkDp018QTdgUqzZJdzYMeYqfacmvhB6g0rVxvziwrl~w0Up11xmvRS5AnGKwBcKtN6isrN0Oqywv3a8bV0ntl6m2i27JbgVNawyV9~HijVR4gWWD-SY3sW1E8bFWzG4v06dzhKmlkc~Hb-QulLLS0kU0BZnr1NQNdEzt6sOpXRy3AvvDc9jHPc4luX8G9yp6CQSEa4-LNCwlGKeSkwB2Q__"
              alt="Revolutionizing Technology"
            />
          </div>
        </section>
        <section id="products" className="smart-solutions">
          <h2>Our Smart Solutions</h2>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="solution-image"
                />
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="cta-section">
          <div className="cta-container">
            <div className="cta-content animate-fade-in-left">
              <h2>Ready to Upgrade Your Business?</h2>
              <p>
                Request a demo today and discover how InTech can transform your
                workplace!
              </p>
              <button className="cta-demo-button">Request Demo Now</button>
            </div>
            <div className="cta-image animate-fade-in-right">
            <img
  src={demoImage} // Using the imported image reference
  alt="Transform Your Workplace"
/>

            </div>
          </div>
        </div>
        <section id="about" className="about-section">
          <div className="about-content">
            <img
              src="https://s3-alpha-sig.figma.com/img/4537/05a9/b0c12226f00763fd5b929805c82b6e4c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQrBHnTgbjKXUjAEdJlmBcpDxwnjI7aeBxYNfU3qjT8JwQGBiSdSpDhViczVFuGAV7q~VPU-tyPC-qKcdPni7iIThJlHPjoB-q5OSTbnsUzTXmJwT8d3ydEUTJB9JAGL2jWB4usCQY~cCYfiHinSUh7~YxFKuhoaFAH6WRThl4N-HrQYvJwNs-0WOl-wlKspuXiiGFkUPnHMXd5IsL5ztWVa298dq79W2nkckTA1Z80DJp0ClwK7nE-PyRuaGbxmGp2JOMjpqhCJR3HGqeDAW6weDXLtzBO8msCw6pO1y3tvQi4pgvSStbPkXXNbXyk~loeAQ0eYY9Cq8NJ3zraBLA__"
              alt="About InTech"
              className="about-image"
            />
            
            <div className="about-text">
              <h2>About InTech</h2>

              <h3>Mission</h3>
              <p>
                Revolutionize workplace efficiency and security through
                innovative smart technology solutions.
              </p>
              <h3>Vision</h3>
              <p>
                Be the leading provider of cutting-edge smart technology,
                creating smarter, more efficient, and secure work environments
                for businesses of all sizes.
              </p>
            </div>
          </div>
        </section>


      </div>

      <Footer />
    </>
  );
}

export default App;
