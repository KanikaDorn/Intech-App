import React from "react";
import "./App.css"; // Optional: Add CSS file for styling

function Navbar() {
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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-right">
        <button className="request-demo-button">Request Demo</button>
      </div>
    </nav>
  );
}

function App() {
  const solutions = [
    {
      title: "Mobile Attendance System",
      description:
        "An intuitive mobile app that makes clocking in and out seamless for employees.",
      image: "src/assets/images/SL.png", // Replace with the actual image path or URL
    },
    {
      title: "Face Recognition Attendance System",
      description:
        "Advanced face recognition technology for accurate attendance tracking.",
      image: "src/assets/images/ML.png", // Replace with the actual image path or URL
    },
    {
      title: "Smart Laundry System",
      description:
        "Receive weekly QR codes to activate laundry machines with ease.",
      image: "src/assets/images/Group.png", // Replace with the actual image path or URL
    },
  ];

  return (
    <>
      <Navbar />
      <div className="hero-section">
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
      </div>

      {/* Smart Solutions Section */}
      <section className="smart-solutions">
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
    </>
  );
}

export default App;
