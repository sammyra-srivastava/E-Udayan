import {
  Button,
  Container,
  Card,
  CardContent,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AddFlorist = () => {
  const floristStyles = {
    background: "url(https://wallpaperaccess.com/full/1223823.jpg)",
    height: "100%",
  };

  const [selImage, setSelImage] = useState("");

  const url = app_config.backend_url;


  const addForm = {
    shopName: "",
    timings: "",
    mobile: "",
    email: "",
    address: "",
    colour: "",
    image: "",
  };

  
  const formSubmit = (formdata) => {
    formdata.image = selImage;
    console.log(formdata);

    
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

  const uploadThumbnail = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Image Uploaded!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };

  const formBody = ({ values, handleSubmit, handleChange }) => {
    return (
      <Box style={{display:"flex",boxSizing:"content-box"}} >
        <CardContent className="text-box-add-florist" >
          <form onSubmit={handleSubmit}>
            <div>
              <h6 style={{color:"black"}}>Shop Name</h6>
              <TextField
                className="w-100 mb-1"
                variant="standard"                
                type="text"
                id="shopName"
                
                onChange={handleChange}
                value={values.shopName}
              />
            </div>
            <br></br>
            <div>
            <h6 style={{color:"black"}}>Timings</h6>
              <TextField
                className="w-100 mb-1"
                variant="standard"
                type="text"
                id="timings"
               
                onChange={handleChange}
                value={values.timings}
              />
            </div>
            <br></br>
            <div>
            <h6 style={{color:"black"}}>Email Id</h6>
              <TextField
                className="w-100 mb-1"
                variant="standard"
                type="email"
                id="email"
                
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <br></br>
            <div>
            <h6 style={{color:"black"}}>Contact No</h6>
              <TextField
                className="w-100 mb-1"
                variant="standard"
                type="number"
                id="mobile"
                
                onChange={handleChange}
                value={values.mobile}
              />
            </div>
            <br></br>
            <div>
            <h6 style={{color:"black"}}>Address</h6>
              <TextField
                className="w-100 mb-1"
                variant="standard"
                type="text"
                id="address"
                
                multiline
                rows={2}
                onChange={handleChange}
                value={values.address}
              />
            </div>
            <div className=" w-100 "sx={{mb:2, mt:2}}>
              <label style={{color:"black"}}>Upload Display Image</label>
              <input
                type="file"
                className="form-control"
                onChange={uploadThumbnail}
              />
            </div>
            <div >
            <Button 
            className=" mb-1 " 
            variant="contained"
            color="secondary"
            style={{borderRadius:10, maxWidth:300}}
            size="large" 
            type="submit" 
            sx={{mb:4, mt:3}}>Submit</Button>
            </div>
          </form>
        </CardContent>
      </Box>
    );
  };

  return (
    <div className="add-florist-back">
      <Container>
        <header className="add-florist-header">
          <Typography variant="h2">Add New Florist</Typography>
        </header>
        <Formik initialValues={addForm} onSubmit={formSubmit}>
          {formBody}
        </Formik>
      </Container>
    </div>
  );
};


export default AddFlorist;
