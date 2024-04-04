import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas";
import { useNavigate } from "react-router-dom";



export default function Login() {

  // const [password, setPassword] = useState("");
  //toggle button function
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  //   login alert
  const loginAlert = () => {
    alert("Login Successfully");
  };



  //validation
  const initialValues = {
    username: "",
    password: "",
  };


  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      // onSubmit: (val̥ues, action) => {
      //   console.log("🚀 ~ file: Login.js:38 ~ Login ~ val̥ues:", val̥ues)
      //   action.resetForm();
      //   if(
      //     values.username !== "" &&
      //     values.password !== ""
      //     ){
            
      //       loginAlert();
      //     }
      // } 

      onSubmit: async (values, action) => {
        console.log("🚀 ~ file: Login.js:38 ~ Login ~ val̥ues:", values)

        try {
          const res = await fetch(
            "http://localhost:5000/api/v1/users/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );
          console.log(res);


          if (res.status === 400) {
            window.alert("User with email or username already exists");
          } else if (res.status === 404) {
            window.alert("username is not exists");
          } else if (res.status === 401) {
            window.alert("invalid user credentials");
          } else {
            window.alert("User logged in successfully");
            action.resetForm();
            navigate("/");
          }
        } catch (error) {
          console.error("Error registering user:", error);
          window.alert("Something went wrong while log in the user");
        }
      },
    });

    console.log("🚀 ~ file: Login.js:38 ~ Login ~ val̥ues:", errors)



  return (
    <>
      {/* Login Modal */}
      <div
        className="modal fade"
        id="Login"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ width: 400 }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="Login">
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form className="py-3 px-3" onSubmit={handleSubmit}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    style={errors.username && touched.username ? {border: "solid red 2px"} :{ border: "solid #d4d4d4 1px" }}
                    autoComplete="off"
                    id="username "
                    name="username"
                    placeholder="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && touched.username ? (
                    <p className="form-error text-danger">{errors.username}</p>
                  ) : null}
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    style={errors.password && touched.password ? {border: "solid red 2px"} :{ border: "solid #d4d4d4 1px" }}
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
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
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
                  <div className="col">
                    {/* Simple link */}
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>
                {/* Submit button */}
                <button
                  href="#!"
                  type="submit"
                  className="btn btn-dark button-block px-5"
                  style={{ width: "100%" }}
                >
                  Sign in
                </button>
                {/* Register buttons */}
                <div className="text-center mt-3">
                  <p>
                    Not a member?{" "}
                    <a
                      href="#!"
                      data-bs-toggle="modal"
                      data-bs-target="#Register"
                    >
                      Register
                    </a>
                  </p>
                  <p>or sign up with:</p>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}