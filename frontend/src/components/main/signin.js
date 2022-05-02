
import {
  Button,
  Card,
  CardContent,
  Container,

  TextField,
} from "@mui/material";
import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Signin = () => {
  
  const url = app_config.backend_url;


  const userForm = {
    
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const loginSubmit = (formdata) => {
    fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!!",
          text: "Successfully loggedin",
        });

        res.json().then((data) => {
          sessionStorage.setItem("user", JSON.stringify(data));
          navigate("/user/profile");
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Login Failed",
        });
      }
    });
  };


  const formBody = ({ values, handleSubmit, handleChange }) => {
    return (
      <Card sx={{ minWidth: "400px" }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div>
              <h1>Login In</h1>
              
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
      <Formik initialValues={userForm} onSubmit={loginSubmit}>
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

export default Signin;
