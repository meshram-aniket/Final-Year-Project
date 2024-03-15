import React from "react";
import { useEffect } from "react";
import gsap from "gsap";

// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';  //Import Bootstrap JS

export default function Footer() {
  useEffect(() => {
    let cursor = document.querySelector(".cursor");
    let cursorScale = document.querySelectorAll(".cursor-scale");
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    cursorScale.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
      });
      link.addEventListener("mousemove", () => {
        cursor.classList.add("grow");
        if (link.classList.contains("small")) {
          cursor.classList.remove("grow");
          cursor.classList.add("grow-small");
        }
      });
    });
  }, []);
  return (
    <>
      {/* <div className="cursor"></div> */}
      {/* Footer */}
      <div className="cursor"></div>
      <footer className=" text-center text-lg-start text-muted cursor-scale small">
        {/* Section: Social media */}
        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer"
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "1.5em",
          }}
        >
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span className="cursor-scale small">
              Get connected with us on social networks:
            </span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f cursor-scale small" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter cursor-scale small" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google cursor-scale small" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram cursor-scale small" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin cursor-scale small" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github cursor-scale small" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section
          className="footer"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6
                  className="text-uppercase fw-bold mb-4 cursor-scale"
                  style={{ fontSize: "3em" }}
                >
                  <i className="fas fa-gem me-3" />
                  Blue Collar Connect
                </h6>
                <p
                  className="cursor-scale small"
                  style={{ color: "gray", fontSize: "1.5em" }}
                >
                  Leveraging advanced technology, the company streamlines
                  efficient matches between employers and skilled workers in
                  various industries. 
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6
                  className="text-uppercase fw-bold mb-4 cursor-scale"
                  style={{ fontSize: "2em" }}
                >
                  Services
                </h6>
                <p style={{ color: "gray", fontSize: "1.5em" }}>
                  <a href="#!" className="text-reset cursor-scale small">
                    Electrician
                  </a>
                </p>
                <p style={{ color: "gray", fontSize: "1.5em" }}>
                  <a href="#!" className="text-reset cursor-scale small">
                    Carpenter
                  </a>
                </p>
                <p style={{ color: "gray", fontSize: "1.5em" }}>
                  <a href="#!" className="text-reset cursor-scale small">
                    Plumber
                  </a>
                </p>
                <p style={{ color: "gray", fontSize: "1.5em" }}>
                  <a href="#!" className="text-reset cursor-scale small">
                    Painter
                  </a>
                </p>
                <p style={{ color: "gray", fontSize: "1.5em" }}>
                  <a href="#!" className="text-reset cursor-scale small">
                    Pest Control
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6
                  className="text-uppercase fw-bold mb-4 cursor-scale"
                  style={{ fontSize: "2em" }}
                >
                  Useful links
                </h6>
                <p style={{ color: "gray", fontSize: "1.5em" }}>
                  <a href="#!" className="text-reset cursor-scale small">
                    {/* Pricing */}
                  </a>
                </p>
                <p style={{ color: "gray", fontSize: "1.5em" }}>
                  <a href="#!" className="text-reset cursor-scale small">
                    Settings
                  </a>
                </p>
                <p style={{ color: "gray", fontSize: "1.5em" }}>
                  <a href="#!" className="text-reset cursor-scale small">
                    Orders
                  </a>
                </p>
                <p style={{ color: "gray", fontSize: "1.5em" }}>
                  <a href="#!" className="text-reset cursor-scale small">
                    Help
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6
                  className="text-uppercase fw-bold mb-4 cursor-scale"
                  style={{ fontSize: "2em" }}
                >
                  Contact
                </h6>
                <p
                  className="cursor-scale small"
                  style={{ color: "gray", fontSize: "1.5em" }}
                >
                  <i className="fas fa-home me-3 cursor-scale small" /> 
                  Mahim, Mumbai
                </p>
                <p
                  className="cursor-scale small"
                  style={{ color: "gray", fontSize: "1.5em" }}
                >
                  <i className="fas fa-envelope me-3 cursor-scale small" />
                  bluecollarconnect@gmail.com
                </p>
                <p
                  className="cursor-scale small"
                  style={{ color: "gray", fontSize: "1.5em" }}
                >
                  <i className="fas fa-phone me-3 cursor-scale small" /> + 91
                  8984424818
                </p>
                <p
                  className="cursor-scale small"
                  style={{ color: "gray", fontSize: "1.5em" }}
                >
                  <i className="fas fa-print me-3 cursor-scale small" /> + 91
                  8548458544
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
          {/* <div className="cursor"></div> */}
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4  "
          style={{ backgroundColor: "black", color: "white" }}
        >
          <p className="cursor-scale small">
            © 2021 Copyright :
            <a
              className="text-reset fw-bold cursor-scale small"
              href="https://mdbootstrap.com/"
            >
              BlueCollarConnect.com
            </a>
          </p>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}
