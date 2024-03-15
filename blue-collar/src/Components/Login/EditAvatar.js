import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
// import { regSchema } from "../../Schemas";
import "./EditAvatar.css";
import { NavLink } from "react-router-dom";

export default function EditAvatar() {
  //   Register alert
  const AvatarAlert = () => {
    alert("Saved successfully");
  };

  function handleAvatarChange(file) {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.getElementById("newAvatarPreview");
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  // validations
  const initialValues = {
    avatar: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      // validationSchema: regSchema,

      onSubmit: (valu̥es, action) => {
        console.log("🚀 ~ file: EditAvatar.js:35 ~ EditAvatar ~ valu̥es:", valu̥es)
        action.resetForm();
        if (values.avatar !== "") {
          console.log("Avatar Path: ", values.avatar);
          AvatarAlert();
          document.getElementById("newAvatarPreview").src =
            "http://placehold.it/180";
        }
      },
    });
  console.log("🚀 ~ file: Login.js:50 ~ Login ~ err̥ors:", errors);

  return (
    <>
      {/* Register Modal */}
      <div
        className="modal fade"
        id="changeAvatar"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ width: 350, height: 600 }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title text-center fs-5" id="Register">
                Edit Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {/* <form> */}
              <form className="px-3" onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label" htmlFor="registerAvatar">
                      Avatar
                    </label>
                    <br />
                    <div className="Avatar">
                      <img
                        src="http://placehold.it/180"
                        alt="Avatar Preview"
                        className="avatar"
                        id="newAvatarPreview"
                        name="newAvatarPreview"
                      />
                    </div>
                    <input
                      // onChange={(e) => handleAvatarChange(e.target.files[0]) } // Update to call a function that handles file input change
                      type="file"
                      className="form-control"
                      style={
                        errors.avatar && touched.avatar
                          ? { border: "solid red 2px" }
                          : { border: "solid #d4d4d4 1px" }
                      }
                      autoComplete="off"
                      id="avatar"
                      name="avatar"
                      placeholder="Avatar"
                      value={values.avatar}
                      onChange={(event) => {
                        handleChange(event); // Call handleChange from useFormik
                        handleAvatarChange(event.target.files[0]); // Call handleAvatarChange with the selected file
                      }}
                      onBlur={handleBlur}
                    />
                    {errors.avatar && touched.avatar ? (
                      <p className="form-error text-danger">{errors.avatar}</p>
                    ) : null}
                  </div>
                </div>

                {/* Submit button */}
                <div className="buttonDiv">
                  <button
                    href="#!"
                    type="submit"
                    className="btn btn-dark btn-block mt-2 subButton"
                  >
                    Save
                  </button>
                  <NavLink
                    to={"/"}
                    className="btn btn-dark btn-block subButton"
                    data-bs-dismiss="modal"
                  >
                    Cancle
                  </NavLink>
                </div>
                {/* </form> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
