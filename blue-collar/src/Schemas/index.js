import * as Yup from "yup";

export const regSchema = Yup.object({
  fullname: Yup.string()
    .min(2)
    .max(25)
    // .test(
    //   "capitalized",
    //   "First letter should be capitalized",
      // function (value) {
      //   // Custom validation function to check if the first letter is capitalized
      //   if (value && value.length > 0) {
      //     return value[0] === value[0].toUpperCase();
      //   }
      //   return false;
      // }
    // )
    .required("Please enter your full name"),
  
  username: Yup.string().min(2).max(25).required("Please enter your username"),
  email: Yup.string().email().required("Please enter your email"),
  address: Yup.string().required("Please enter your address"),
  phone: Yup.string().matches(/^[0-9]+$/, 'Phone number must contain only digits').min(10, 'Phone number must be at least 10 digits').max(10, 'Phone number can be maximum 10 digits').required('Please enter your phone number'),  
  password: Yup.string()
    .min(6)
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Please enter your password"),
  
});

export const signUpSchema = Yup.object({
  username: Yup.string("username does not matched").required("Required"),
  password: Yup.string("password does not matched").required("Required"),
  // confirm_password: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref("password"), null], "Password must match"),
});