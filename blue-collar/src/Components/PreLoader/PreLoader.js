// import React, {useState, useEffect, useRef} from "react";
// import "./PreLoader.css";
// import gsap from 'gsap'

// export default function PreLoader() {
//   const counterRef = useRef(null);

//   useEffect(() => {
//     function startLoader() {
//       let currentValue = 0;

//       const updateCounter = () => {
//         if (currentValue < 100) {
//           const increment = Math.floor(Math.random() * 5) + 1;
//           currentValue = Math.min(currentValue + increment, 100);
//           counterRef.current.textContent = currentValue;
//           setTimeout(updateCounter, 90); // Increase the delay to slow down the counter
//         }
//       };

//       setTimeout(updateCounter, 90); // Initial call to start the counter
//     }
//     startLoader();

//     gsap.to(counterRef.current, {
//       duration: 0.75,
//       delay: 3.5,
//       opacity: 0,
//     });

//     gsap.to(".bar", {
//       duration: 1.75,
//       delay: 3.5,
//       height: 0,
//       stagger: {
//         amount: 0.5,
//       },
//       ease: "power4.inOut",
//     });

//     gsap.from(".hero", {
//       duration: 2.75,
//       delay: 4.5,
//       y: 400,
//       opacity: 0,
//       ease: "power4.inOut",
//     });
//   }, []);
//   return (
//     <>
//       <div className="counter" ref={counterRef}>
//         0
//       </div>

//       <div className="overlay">
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>
//     </>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import "./PreLoader.css";
import gsap from "gsap";

export default function PreLoader() {
  const counterRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function startLoader() {
      let currentValue = 0;

      const updateCounter = () => {
        if (currentValue < 100) {
          const increment = Math.floor(Math.random() * 10) + 1;
          currentValue = Math.min(currentValue + increment, 100);
          counterRef.current.textContent = currentValue;
          setTimeout(updateCounter, 40); // Increase the delay to slow down the counter
        }
      };

      setTimeout(updateCounter, 90); // Initial call to start the counter
    }
    startLoader();

    gsap.to(counterRef.current, {
      duration: 0.75,
      delay: 1.8,
      opacity: 0,
    });

    gsap.to(".bar", {
      duration: 1.75,
      delay: 2,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });

    gsap.to(".overlay", {
      duration: 2.75,
      delay: 4.5,
      scaleY: 0,
      transformOrigin: "top",
      onComplete: () => {
        setIsLoaded(true);
      },
    });

    gsap.from(".hero", {
      duration: 3.75,
      delay: 5.5,
      y: 400,
      opacity: 0,
      ease: "power4.inOut",
    });
  }, [setIsLoaded]);

  if (!isLoaded) {
    return (
      <>
        <div className="counter" ref={counterRef}>
          0
        </div>

        <div className="overlay">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </>
    );
  }

  // Render your main content when isLoaded is true
  return (
    <div>
      {/* Your main content */}
    </div>
  );
}

