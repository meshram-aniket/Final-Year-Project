import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { regSchema } from "../../Schemas";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    fullName: "",
    address: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: regSchema,
      vvalidateOnChange: true,
      validateOnBlur: false,

      // onSubmit: (values, action) => {
      //   console.log("🚀 ~ file: Login.js:51 ~ Login ~ value̥s:", values);

      //   action.resetForm();
      //   if (
      //     values.fullName !== "" &&
      //     values.address !== "" &&
      //     values.email !== "" &&
      //     values.phone !== "" &&
      //     values.username !== "" &&
      //     values.password !== ""

      //   ) {
      //     registerAlert();
      //   }
      // },

      onSubmit: async (values, action) => {
        console.log("🚀 ~ file: Login.js:51 ~ Login ~ value̥s:", values);

        try {
          const res = await fetch(
            "http://localhost:5000/api/v1/users/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );
          console.log(res);

          if (res.status === 409) {
            window.alert("User with email or username already exists");
          } 
          else if (res.status === 400) {
            window.alert("All fields are required");
          } 
          else if (res.status === 500) {
            window.alert("Something went wrong while registering the user");
          } 
          else {
            window.alert("User registered successfully");
            const res_data = await res.json();
            console.log("res from server", res_data);
            action.resetForm();
            navigate("/");
          }
        } catch (error) {
          console.error("Error registering user:", error);
          window.alert("Something went wrong while registering the user");
        }
      },
    });
  console.log("🚀 ~ file: Login.js:50 ~ Login ~ err̥ors:", errors);

  return (
    <>
      {/* Register Modal */}
      <div
        className="modal fade"
        id="Register"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ width: 500, height: 600 }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title text-center fs-5" id="Register">
                Register
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
              <form className="px-3" onSubmit={handleSubmit} method="POST">
                {/* Full Name input */}
                <div className="form-outline">
                  <label className="form-label" htmlFor="registerName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={
                      errors.fullName && touched.fullName
                        ? { border: "solid red 2px" }
                        : { border: "solid #d4d4d4 1px" }
                    }
                    autoComplete="off"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.fullName && touched.fullName ? (
                    <p className="form-error text-danger text-danger">
                      {errors.fullName}
                    </p>
                  ) : null}
                </div>

                {/* address input */}
                <div className="form-outline py-3">
                  <label className="form-label" htmlFor="registerAddress">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={
                      errors.address && touched.address
                        ? { border: "solid red 2px" }
                        : { border: "solid #d4d4d4 1px" }
                    }
                    autoComplete="off"
                    name="address"
                    id="address"
                    placeholder="Address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.address && touched.address ? (
                    <p className="form-error text-danger">{errors.address}</p>
                  ) : null}
                </div>

                {/* Email input */}
                <div className="form-outline py-2">
                  <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    style={
                      errors.email && touched.email
                        ? { border: "solid red 2px" }
                        : { border: "solid #d4d4d4 1px" }
                    }
                    autoComplete="off"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error text-danger">{errors.email}</p>
                  ) : null}
                </div>

                {/* phone input */}
                <div className="form-outline py-3">
                  <label className="form-label" htmlFor="registerPhone">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={
                      errors.phone && touched.phone
                        ? { border: "solid red 2px" }
                        : { border: "solid #d4d4d4 1px" }
                    }
                    autoComplete="off"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone ? (
                    <p className="form-error text-danger">{errors.phone}</p>
                  ) : null}
                </div>

                {/* Username input */}
                <div className="form-outline py-3">
                  <label className="form-label" htmlFor="registerUsername">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={
                      errors.username && touched.username
                        ? { border: "solid red 2px" }
                        : { border: "solid #d4d4d4 1px" }
                    }
                    autoComplete="off"
                    name="username"
                    id="username"
                    placeholder="User Name"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && touched.username ? (
                    <p className="form-error text-danger">{errors.username}</p>
                  ) : null}
                </div>

                {/* Password input */}
                <div className="form-outline py-2">
                  <label className="form-label" htmlFor="form2Example2">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    style={
                      errors.password && touched.password
                        ? { border: "solid red 2px" }
                        : { border: "solid #d4d4d4 1px" }
                    }
                    autoComplete="off"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error text-danger">{errors.password}</p>
                  ) : null}
                </div>
                {/* 2 column grid layout for inline styling */}
                <div className="row mb-3">
                  <div className="col d-flex justify-content-left">
                    {/* Checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example31"
                        defaultChecked=""
                        onClick={togglePasswordVisibility}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example31"
                      >
                        {showPassword ? "Hide Password" : "Show Password"}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  href="#!"
                  type="submit"
                  className="btn btn-dark btn-block mb-1"
                  style={{ width: "100%" }}
                  // onClick={PostData}
                >
                  Register
                </button>

                <div className="text-center mb-3">
                  <p className="text-center mb-1">or:</p>

                  <p>Sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-facebook-f fa-2x" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-google fa-2x" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-github fa-2x" />
                  </button>
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
