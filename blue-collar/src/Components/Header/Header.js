import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Ripple, initMDB } from "mdb-ui-kit";
import { useState, useEffect } from "react";

import "./Header.css";

export default function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 7); // Adjust this value based on when you want the change to happen
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <nav className={isScrolled ? "scrolled" : ""}>
        {/* <div className="cursor"></div> */}
        <img src="" alt="" />
        <ul>
          <li>
            {/* <a href="" className="cursor-scale small">Home</a> */}
            <NavLink className="cursor-scale small" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            {/* <a href="" className="cursor-scale small">About</a> */}
            <NavLink className="cursor-scale small" to={"/about"}>
              About
            </NavLink>
          </li>
          {/* <li>
              <NavLink className="cursor-scale small" to={'/contact'}>Contact</NavLink>
            </li> */}
          <li>
            <NavLink
              href=""
              className="cursor-scale small"
              data-bs-toggle="modal"
              data-bs-target="#Login"
            >
              Login/Register
            </NavLink>
          </li>
          <li>
            <NavLink
              // className="btn text-white btn-lg btn-floating py-0"
              // style={{backgroundColor: "#25d366"}}
              className="cursor-scale small"
              to={"/review"}
              role="button"
            >
              <i className="fa-solid fa-bell"></i>
            </NavLink>
            <span className="badge rounded-pill badge-notification bg-danger" style={{height: "auto", width: "auto", fontSize: '10px'}}>
              1
            </span>
          </li>
        </ul>

        <div className="image-dropdown-container">
          <div className={`image-dropdown ${dropdownVisible ? "active" : ""}`}>
            <div className="image-container" onClick={toggleDropdown}>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                alt="Your Image"
                style={{ height: "40px", width: "40px" }}
                className="rounded-circle"
              />
            </div>
            <div className="dropdown-content">
            <NavLink  href="#!"
                      data-bs-toggle="modal"
                      data-bs-target="#changeAvatar">My Profile</NavLink>
              <NavLink to={"/"}>Setting</NavLink>
              <NavLink to={"/"}>Log out</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}




