import React from "react";
import "./WorkerList.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PreLoader from "../../PreLoader/PreLoader";

import { useEffect } from "react";
import gsap from "gsap";
import "gsap/ScrollTrigger";

export default function WorkerList() {
  const gradientStyle = {
    // background: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
    // backgroundColor: "#d4af37",
    backgroundColor: "gray",
  };

  const fontSize = {
    fontSize: "100px",
  };

  const styles = {
    cardImgTop: {
      borderRadius: "50px",
      padding: "20px",
    },
    card: {
      borderRadius: "25px",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
    },
    cardBody: {
      padding: "25px",
      marginTop: "-15px",
    },
    btnPrimary: {
      borderRadius: "50px",
      width: "120px",
    },

    heading: {
      // color: "rgb(0, 91, 228)",
      color: "black",
    },

    h1Heading: {
      color: "white",
      paddingTop: "30px",
      fontSize:"3em",
      
    },
  };

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

  

  const datas = [
    {
      id: 1,
      Name: "John Doe",
      Phone: "7972785900",
      Rating: "5",
    },
    {
      id: 2,
      Name: "Ervin Howell",
      Phone: "7972785999",
      Rating: "5",
    },
    {
      id: 3,
      Name: "Patricia Lebsack",
      Phone: "7972785900",
      Rating: "5",
    },
    {
      Name: "Chelsey Dietrich",
      Phone: "7972785900",
      Rating: "5",
    },
  ];

    

  
  return (
    <div style={gradientStyle} className="WorkerList">
      <PreLoader></PreLoader>
      <div className="cursor"></div>
      <div className="container py-5">
        <h1
          style={styles.h1Heading}
          className="text-center workerListTitle cursor-scale small"
        >
          Available Worker
        </h1>

        
        <div className="row row-cols-1 row-cols-md-3 g-4 py-4">
          {datas.map((data, item) => (
            <div key={data.id} className="col py-4 px-4 ">
              <div className="card" style={styles.card}>
                <img
                  src="https://source.unsplash.com/600x400/?worker"
                  className="card-img-top"
                  style={styles.cardImgTop}
                  alt="..."
                />
                <div className="card-body cursor-scale small" style={styles.cardBody}>
                  <h5 className="card-title" style={styles.heading}>
                    Name: {item.Name}
                  </h5>
                  <h5 className="card-title" style={styles.heading}>
                    Phone: {item.Phone}
                  </h5>
                  <h5 className="card-title" style={styles.heading}>
                    Rating: {item.Rating}
                  </h5>
                  {/* <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dignissimos accusantium amet similique velit iste.
              </p> */}
                </div>
                <div className="mb-5 d-flex justify-content-around">
                  <h3 style={{ color: "#d4af37" }}>4.5/5</h3>
                  <button
                    className="btn btn-dark cursor-scale small"
                    style={styles.btnPrimary}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
