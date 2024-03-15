import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
import { Route, Routes } from "react-router-dom";
// import CursorPointer from "./Components/Cursor";
import Home from "./Components/Main/Home/Home";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import WorkerList from "./Components/Main/WorkerList/WorkerList";
import Services from "./Components/Main/Services/Services";
import Footer from "./Components/Main/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import RegistrationForm from "./Components/Login/RegistrationForm"
import PreLoader from "./Components/PreLoader/PreLoader";
import AnimatedWord from "./Components/Main/AnimatedWord/AnimatedWord"
import Reviews from "./Components/Main/Reviews/Reviews"
import EditAvatar from "./Components/Login/EditAvatar";
import Location from "./Components/Location/Location";

import "./App.css"

gsap.registerPlugin(CSSPlugin);
function App() {
  
  return (
    <>    
      <Header />
      <PreLoader></PreLoader>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/workerList" element={<WorkerList />} />
        {/* <Route path="/reviews" element={<Reviews />} /> */}
        <Route path="/editAvatar" element={<EditAvatar />} />
        <Route path="/location" element={<Location />} />

      </Routes>
      {/* <AnimatedWord/> */}
      
      
      <Login />
      <RegistrationForm/>
      <EditAvatar/>
      <Location/>

      
      {/* <Footer /> */}
    </>
  );
}
export default App;










// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { gsap, CSSPlugin, Expo } from "gsap";
// import { Route, Routes } from "react-router-dom";
// // import CursorPointer from "./Components/Cursor";

// import Home from "./Components/Main/Home/Home";
// import About from "./Components/About/About"
// import Login from "./Components/Login/Login";
// import WorkerList from "./Components/Main/WorkerList/WorkerList";
// import Services from "./Components/Main/Services/Services";
// import Footer from "./Components/Main/Footer/Footer"
// import Main from "./Components/Main/Main";
// import Header from "./Components/Header/Header";
// gsap.registerPlugin(CSSPlugin);

// function App() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const count = setInterval(() => {
//       setCounter((counter) =>
//         counter < 100
//           ? counter + 1
//           : (clearInterval(count), setCounter(100), reveal())
//       );
//     }, 25);
//   }, []);

//   const reveal = () => {
//     const t1 = gsap.timeline({
//       onComplete: () => {
//         console.log("completed");
//       },
//     });
//     t1.to(".follow", {
//       width: "100%",
//       ease: Expo.easeInOut,
//       duration: 1.2,
//       delay: 0.5,
//     })
//       .to(".hide", { opacity: 0, duration: 0.3 })
//       .to(".hide", { display: "none", duration: 0.3 })
//       .to(".follow", {
//         height: "100%",
//         ease: Expo.easeInOut,
//         duration: 0.7,
//         delay: 0.5,
//       })
//       .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
//       .to(".title-lines", { display: "block", duration: 0.1 })
//       .to(".title-lines", {
//         opacity: 1,
//         stagger: 0.15,
//         ease: Expo.easeInOut,
//         duration: 0.7,
//       });
//   };

//   return (
//     <>
//       <AppContainer>
//         <Loading>
//           <Follow className="follow"></Follow>
//           <ProgressBar
//             className="hide"
//             id="progress-bar"
//             style={{ width: counter + "%" }}
//           ></ProgressBar>
//           <Count id="count" className="hide">
//             {counter}%
//           </Count>
//         </Loading>

//           {/* <Header/> */}
//         <Content className="content">

//          <Header/>
//          <Main/>
//         </Content>
//       </AppContainer>
//          {/* <Footer></Footer> */}

//          <Routes>
//           <Route path="/" element={<Main/>}/>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/workerList" element={<WorkerList/>}/>
//          </Routes>
//        {/* <Footer /> */}

//     </>
//   );
// }

// export default App;

// const AppContainer = styled.div`
//   width: 100%;
//   height: 100vh;
//   color: #000000;
//   position: relative;
// `;
// const Loading = styled.div`
//   height: 100%;
//   width: 100%;
//   background-color: #121212;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   top: 0;
// `;
// const Follow = styled.div`
//   position: absolute;
//   background-color: #f48049;
//   height: 2px;
//   width: 0;
//   left: 0;
//   z-index: 2;
// `;

// const ProgressBar = styled.div`
//   position: absolute;
//   left: 0;
//   background-color: #fff;
//   height: 2px;
//   width: 0;
//   transition: 0.4s ease-out;
// `;

// const Count = styled.p`
//   position: absolute;
//   font-size: 130px;
//   color: #fff;
//   transform: translateY(-15px);
//   font-weight: 500;
// `;

// const Content = styled.div`

//   width: 100%;
//   position: absolute;
//   left: 0;
//   top: 0;
//   background-color: white;
//   padding: auto;

//   z-index: 2;
//   display: flex;
//   align-items: stretch;
//   justify-content: flex-start;
//   flex-direction: column;
//   overflow: hidden;
//   color: #fff;

//   p {
//     text-align: center;
//     font-size: 104px;
//     opacity: 0;
//     display: none;
//     font-weight: 500;
//     margin: 0;
//   }
// `;
