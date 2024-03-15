import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
// import  TweenMax  from "gsap/gsap-core";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <section>
      {/* <div className="cursor"></div> */}
      <div className="containers" id="containers">
        {/* <nav>
          <img src="" alt="" />
          <ul>
            <li>
              <a href="" className="cursor-scale small">Home</a>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <a href="" className="cursor-scale small">About</a>
              <NavLink to={'/about'}>About</NavLink>

            </li>
            <li>
              <a href="" className="cursor-scale small">Contact</a>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
            <li>
              <a href="" className="cursor-scale small" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Login/Register
              </a>
            </li>
          </ul>
          <img src="" alt="" />
        </nav> */}
        <div className="text-box">
          {/* <h2>Lorem ipsum </h2> */}
          <h1>Blue Collar</h1>
          <h3 style={{ color: "white" }}>
            Daily work opportunities for Blue Collar workers.
          </h3>
        </div>

        <Marquee direction="right" speed={100} delay={5}>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
        </Marquee>

        {/* <div className="translator">
          <div className="word">
            <p>Blue Collar</p>
          </div>
          <div className="word">
            <p>Blue Collar</p>
          </div>
          <div className="word">
            <p>Blue Collar</p>
          </div>
          <div className="word">
            <p>Blue Collar</p>
          </div>
          <div className="word">
            <p>Blue Collar</p>
          </div>
        </div> */}
      </div>

      {/* home page gsap cdn   */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
    </section>
  );
}
