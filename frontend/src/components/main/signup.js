import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import "../../stylesheet/signup.css";

const Signup = () => {
  const signupStyles = {
    background: "url(https://wallpaperaccess.com/full/1223823.jpg)",
    height: "100%",
  };

  const url = app_config.backend_url;

  //   1. Create the form object

  const userForm = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  };

  //   2. Create a submit function
  const formSubmit = (formdata) => {
    console.log(formdata);

    // 1. address
    // 2. request method
    // 3. data
    // 4. data format to send

    // asynchronous function returns promise
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Registered Successfully!!",
        });
      });
  };

  // const validationSchema = Yup.object().shape({
  //   firstName: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   lastName: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
  //   password: Yup.string()
  //     .required("Password is Required"),
  //   confirm: Yup.string()
  //     .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  //     )
  //     .oneOf([Yup.ref("password"), null], "Passwords must match")
  //     .required("Password Confirmation is Required"),
  // });

  const formBody = ({ values, handleSubmit, handleChange }) => {
    return (
      <Card sx={{ minWidth: "400px" }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div>
              <h1>Sign Up</h1>

              <div className="text1">
                <TextField
                  className="w-100 mt-4"
                  variant="filled"
                  label="First Name"
                  type="text"
                  id="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                />
              </div>
              <div className="text1">
                <TextField
                  className="w-100 mt-4"
                  variant="filled"
                  label="Last Name"
                  type="text"
                  id="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                />
              </div>
              <div className="text1">
                <TextField
                  className="w-100 mt-4"
                  variant="filled"
                  label="Email "
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <div className="text1">
                <TextField
                  className="w-100 mt-4"
                  variant="filled"
                  label="Mobile"
                  type="number"
                  id="mobile"
                  onChange={handleChange}
                  value={values.mobile}
                />
              </div>
              <div className="text1">
                <TextField
                  className="w-100 mt-4"
                  variant="filled"
                  label="Password"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                />
              </div>
              <div className="button">
                <Button
                  type="submit"
                  variant="contained"
                  className="mt-5"
                  color="secondary"
                  size="large"
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container sx={styles.container}>
      <Formik initialValues={userForm} onSubmit={formSubmit}>
        {formBody}
      </Formik>
    </Container>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
  },
};

export default Signup;
