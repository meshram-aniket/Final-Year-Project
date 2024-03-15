import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Services.css";

export default function Cards() {
  const slideRef = useRef(null);

  const handleNext = () => {
    if (slideRef.current) {
      const lists = slideRef.current.querySelectorAll(".item");
      slideRef.current.appendChild(lists[0]);
    }
  };

  const handlePrev = () => {
    if (slideRef.current) {
      const lists = slideRef.current.querySelectorAll(".item");
      slideRef.current.prepend(lists[lists.length - 1]);
    }
  };

  const findServiceType = (service) => {
    console.log("Service Type:", service);
  };

 

  return (
    // <>

    //   <div className="Section">
    //     <div className="cursor"></div>
    //     <div className="Service">
    //       <h1></h1>
    //       <h1 className="cursor-scale">SERVICES...</h1>
    //     </div>
    //     <div className="Card">
    //       <div id="slide" ref={slideRef}>
    //         {serviceData.map((data, index) => (
    //           <div
    //             key={data.id}
    //             className="item"
    //             style={{
    //               backgroundImage: data.backgroundImage,
    //             }}
    //           >
    //             <div className="content">
    //               <div className="name">{data.Sevice}</div>
    //               <div className="des">{data.Description}</div>
    //               <button className="btn btn-light cursor-scale"

    //               >
    //                 <NavLink
    //                   onClick={findServiceType(data.Sevice)}
    //                   style={{ textDecoration: "none", color: "black" }}
    //                   data-bs-toggle="modal"
    //                   data-bs-target="#Location"
    //                 >
    //                   Book Now
    //                 </NavLink>
    //               </button>
    //               {/* <button className="btn btn-light cursor-scale">Book Now</button> */}
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //       <div className="buttons px-5">
    //         <button
    //           // className="cursor-scale small"
    //           id="prev"
    //           onClick={handlePrev}
    //         >
    //           <FontAwesomeIcon icon={faAngleLeft} />
    //         </button>
    //         <button
    //           // className="cursor-scale small"
    //           id="next"
    //           onClick={handleNext}
    //         >
    //           <FontAwesomeIcon icon={faAngleRight} />
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    // </>

    <>
      <div className="Section">
        <div className="cursor"></div>
        <div className="Service">
          <h1></h1>
          <h1 className="cursor-scale">SERVICES...</h1>
        </div>
        <div className="Card">
          <div id="slide" ref={slideRef}>
            <div
              className="item"
              style={{
                backgroundImage: `url("https://media.istockphoto.com/id/1516511531/photo/a-plumber-carefully-fixes-a-leak-in-a-sink-using-a-wrench.jpg?s=2048x2048&w=is&k=20&c=8zy3SGo3dUKjOuHNnmB4jYTzaQmXVBNkoIUFvgIwyJA=")`,
              }}
            >
              <div className="content">
                <div className="name">PLUMBER</div>
                <div className="des">Fixing Leaks, connecting lives</div>
                <button className="btn btn-light cursor-scale"
                >
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-toggle="modal"
                    data-bs-target="#Location"
                    onClick={findServiceType("PLUMBER")}
                    >
                    Book Now
                  </NavLink>
                </button>
                {/* <button className="btn btn-light cursor-scale">Book Now</button> */}
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: `url("https://media.istockphoto.com/id/694475844/photo/painting-the-walls.jpg?s=2048x2048&w=is&k=20&c=mOFFYA0VOgBx2neoxWWtaMQI1d4a3pUNThLPHXy05BE=")`,
              }}
            >
              <div className="content">
                <div className="name">PAINTER</div>
                <div className="des">Transforming spaces one brushstroke at a time</div>
                <button className="btn btn-light cursor-scale">
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-toggle="modal"
                    data-bs-target="#Location"
                    onClick={findServiceType("PAINTER")}
                  >
                    Book Now
                  </NavLink>
                </button>
                {/* <button className="btn btn-light cursor-scale">Book Now</button> */}
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: `url("https://media.istockphoto.com/id/1434211817/photo/man-an-electrical-technician-working-in-a-switchboard-with-fuses.jpg?s=2048x2048&w=is&k=20&c=yXv5qeb_clBztZcIDiHTDpTPIsf0mVe-GEJWWzPMJOk=")`,
              }}
            >
              <div className="content">
                <div className="name">ELECTRICIAN</div>
                <div className="des">Empowering sparks, connecting electricians</div>
                <button className="btn btn-light cursor-scale">
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-toggle="modal"
                    data-bs-target="#Location"
                    onClick={findServiceType("ELECTRICIAN")}
                  >
                    Book Now
                  </NavLink>
                </button>
                {/* <button className="btn btn-light cursor-scale">Book Now</button> */}
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: `url("https://plus.unsplash.com/premium_photo-1682126104327-ef7d5f260cf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
              }}
            >
              <div className="content">
                <div className="name">PEST CONTROL</div>
                <div className="des">Protecting homes with expert care</div>
                <button className="btn btn-light cursor-scale">
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-toggle="modal"
                    data-bs-target="#Location"
                    onClick={findServiceType("PEST CONTROL")}
                  >
                    Book Now
                  </NavLink>
                </button>
                {/* <button className="btn btn-light cursor-scale">Book Now</button> */}
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: `url("https://media.istockphoto.com/id/1369759603/photo/indian-carpenter-making-wood-design-by-using-carpentry-tools-at-workplace-concept-of-skilled.jpg?s=2048x2048&w=is&k=20&c=lxmx0t4kpkEWFsqcb-Ir7F-Y-W5lSVunybgs_AbUc0U=")`,
              }}
            >
              <div className="content">
                <div className="name">CARPENTER</div>
                <div className="des">Crafting dreams, building realities</div>
                <button className="btn btn-light cursor-scale">
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-toggle="modal"
                    data-bs-target="#Location"
                    onClick={findServiceType("CARPENTER")}
                  >
                    Book Now
                  </NavLink>
                </button>
                {/* <button className="btn btn-light cursor-scale">Book Now</button> */}
              </div>
            </div>
          </div>
          <div className="buttons px-5">
            <button
              // className="cursor-scale small"
              id="prev"
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button
              // className="cursor-scale small"
              id="next"
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
