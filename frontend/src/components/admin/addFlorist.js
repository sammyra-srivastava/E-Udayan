import { Button, Container, Grid, Paper, TextField} from "@mui/material";
import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";



const AddFlorist = () => {
  const floristStyles = {
    background: "url(https://wallpaperaccess.com/full/1223823.jpg)",
    height: "100%",
  };

  const url = app_config.backend_url;

  //   1. Create the form object

  const addForm = {
    shopName: "",
    timings:"",
    mobile: "",
    email: "",
    address:"",
    flowers:"",

  };

  //   2. Create a submit function
  const formSubmit = (formdata) => {
    console.log(formdata);

    // 1. address
    // 2. request method
    // 3. data
    // 4. data format to send

    // asynchronous function returns promise
    fetch(url + "/florist/add", {
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

  const formBody = ({ values, handleSubmit, handleChange }) => {
    return (
      <div className="container">
     
      <form onSubmit={handleSubmit}>
       
        <div>
        
        <TextField
          className="w-50 mt-4"
          variant="outlined"
          label="Shop Name"
          type="text"
          id="shopName"
          onChange={handleChange}
          value={values.shopName}
         
        /> 
        </div>
        <div>
        <TextField
          className="w-50 mt-4"
          variant="outlined"
          label="timings"
          type="text"
          id="timings"
          onChange={handleChange}
          value={values.timings}
        />
        </div>
        <div>
        <TextField
          className="w-50 mt-4"
          variant="outlined"
          label="Email"
          type="email"
          id="email"
          onChange={handleChange}
          value={values.email}
        />
        </div>
        <div>
        <TextField
          className="w-50 mt-4"
          variant="outlined"
          label="Mobile"
          type="number"
          id="mobile"
          onChange={handleChange}
          value={values.mobile}
        />
        </div>
        
        <div>
        <TextField
          className="w-50 mt-4"
          variant="outlined"
          label="address"
          type="text"
          id="address"
          multiline
          rows={4}
          onChange={handleChange}
          value={values.address}
        />
        </div>
        <div>

        <Button type="submit" variant="contained" className="mt-5" color = "success" >
          Submit
        </Button>
        </div>
       
      </form>
      </div>
    );
  };

  return (
    <Container>
      <Formik initialValues={addForm} onSubmit={formSubmit}>
        {formBody}
      </Formik>
    </Container>
  );
};

export default AddFlorist;