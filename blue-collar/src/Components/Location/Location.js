// import React, { useState } from "react";

// export default function Location() {
//   const [coordinates, setCoordinates] = useState(null);
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setCoordinates({ latitude, longitude });
//           console.log(latitude, longitude);
//         },
//         (error) => {
//           console.error("Error getting geolocation:", error);
//         }
//       );
//     } else {
//       console.error("Geolocation is not supported by your browser.");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!coordinates) {
//       console.error("No coordinates available.");
//       return;
//     }
//     try {
//       // Replace this with your actual API endpoint
//       const response = await fetch("your/api/endpoint", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(coordinates),
//       });
//       if (!response.ok) {
//         throw new Error("Failed to submit coordinates.");
//       }
//       console.log("Coordinates submitted successfully!");
//       setFormSubmitted(true); // Set formSubmitted to true upon successful submission
//     } catch (error) {
//       console.error("Error submitting coordinates:", error.message);
//     }
//   };

//   return (
//     <>
//       {/* Login Modal */}
//       <div
//         className="modal fade"
//         id="Location"
//         tabIndex={-1}
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div
//           className="modal-dialog"
//           style={{ width: 400, paddingTop: "200px" }}
//         >
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="Location">
//                 Location
//               </h1>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>
//             <div className="modal-body">
//               <form className="py-3 px-3">
//                 {/* Register buttons */}
//                 <div className="text-center mt-3">
//                   <button
//                     // href="#!"
//                     onClick={getLocation}
//                     className="btn btn-dark button-block px-5 w-100"
//                   >
//                     Enable Location
//                   </button>

//                   {/* Single form for Save and Next buttons */}
//                   <div className="row py-4">
//                     <div className="col">
//                       <input
//                         type="hidden"
//                         name="latitude"
//                         value={coordinates ? coordinates.latitude : ""}
//                       />
//                       <input
//                         type="hidden"
//                         name="longitude"
//                         value={coordinates ? coordinates.longitude : ""}
//                       />
//                       <button
//                         type="submit"
//                         className="btn btn-dark w-100"
//                         onClick={handleSubmit}
//                         disabled={!coordinates || formSubmitted}
//                       >
//                         Save
//                       </button>
//                     </div>
//                     <div className="col">
//                       <button
//                         type="submit"
//                         className="btn btn-dark w-100"
//                         disabled={!formSubmitted}
//                       >
//                         Next
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




// import { useFormik } from "formik";
// import React from "react";
// import { useState } from "react";

// export default function Location() {
//   const [coordinates, setCoordinates] = useState(null);

//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setCoordinates({ latitude, longitude });
         
//           console.log(`latitude: ${latitude}, longitude: ${longitude}`);
//         },
//         (error) => {
//           console.error("Error getting geolocation:", error);
//         }
//       );
//     } else {
//       console.error("Geolocation is not supported by your browser.");
//     }
//   };


//   const locationGet = () => {
//     alert("get location successfully")
//   }
  


//   const initialValues = {
//     latitude: "",
//     longitude: ""
//   }

//   const { values, handleBlur, handleChange, handleSubmit, errors, touched} = 
//   useFormik({
//     initialValues,
//     validateOnChange: true,
//     validateOnBlur: false,
//     onSubmit: ( valu̥es, action) => {
//       console.log("🚀 ~ file: Location.js:195 ~ Location ~ valu̥es:", valu̥es)
      
//       action.resetForm();
//       if(
//         values.latitude !== "" &&
//         values.longitude !== ""
//       )
//       {
//         setFormSubmitted(true);
//         locationGet();
//       }
//     }
//   })

//   return (
//     <>
//       {/* Login Modal */}
//       <div
//         className="modal fade"
//         id="Location"
//         tabIndex={-1}
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div
//           className="modal-dialog"
//           style={{ width: 400, paddingTop: "200px" }}
//         >
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="Location">
//                 Location
//               </h1>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>
//             <div className="modal-body">
//               <form className="py-3 px-3" onChange={handleSubmit}>
//                 {/* Register buttons */}
//                 <div className="text-center mt-3">
//                   <button
//                     type="button"
//                     className="btn btn-dark button-block px-5 w-100"
//                     onClick={getLocation} // Call getLocation function when button is clicked
//                   >
//                     Enable Location
//                   </button>

//                   {/* Single form for Save and Next buttons */}
//                   <div className="row py-4">
//                     <div className="col">
//                       <input
//                         // type="hidden"
//                         name="latitude"
//                         value={coordinates ? coordinates.latitude: ""}
//                         // value={coordinates.latitude= coordinates.latitude}
//                         readOnly
//                       />
//                       <input
//                         // type="hidden"
//                         name="longitude"
//                         value={coordinates ? coordinates.longitude : ""}
//                         // value={coordinates}
//                         readOnly
//                       />
//                       <button
//                         type="button"
//                         className="btn btn-dark w-100"
//                         onClick={handleSubmit}
//                         disabled={!coordinates || formSubmitted}
//                       >
//                         Save
//                       </button>
//                     </div>
//                     <div className="col">
//                       <button
//                         type="submit"
//                         className="btn btn-dark w-100"
//                         disabled={!formSubmitted}
//                       >
//                         Next
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





import { useFormik } from "formik";
import React, { useState } from "react";
import { NavLink } from "react-router-dom"

export default function Location() {

  const imageUrl = 'https://img.freepik.com/premium-vector/colored-city-map-with-park-streets_23-2148318249.jpg';
  const initialValues = {
    latitude: "",
    longitude: ""
  };


  const [formSubmitted, setFormSubmitted] = useState(false)
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      console.log("Form submitted:", values);
      setFormSubmitted(true)
      action.resetForm();
    }
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleChange({ target: { name: "latitude", value: latitude } });
          handleChange({ target: { name: "longitude", value: longitude } });
          console.log(`latitude: ${latitude}, longitude: ${longitude}`);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  };

  return (
    <>
      <div className="modal fade" id="Location" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" style={{ width: 500, paddingTop: "150px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="Location">Location</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="px-3 py-3" onSubmit={handleSubmit} style={{backgroundImage: `url(${imageUrl})`}}>
                <div className="text-center mt-5">
                  <button type="button" className="btn btn-dark button-block px-5 w-100" onClick={getLocation}>
                    Enable Location
                  </button>
                  <div className="row py-4">
                    <div className="col">
                      <input
                        type="hidden"
                        name="latitude"
                        value={values.latitude}
                        className="form-control"
                        readOnly
                      />
                      <input
                        type="hidden"
                        name="longitude"
                        value={values.longitude}
                        className="form-control"
                        readOnly
                      />
                      <button
                        type="submit"
                        className="btn btn-dark w-100"
                        disabled={!values.latitude || !values.longitude}
                      >
                        Save
                      </button>
                    </div>
                    <div className="col mb-5">
                      <button
                        type="button"
                        className="btn btn-dark w-100"
                        data-bs-dismiss="modal"
                        disabled={!formSubmitted}
                      >
                        <NavLink to={"/workerList"} style={{textDecoration:"none", color: "white"}}>Next</NavLink>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




