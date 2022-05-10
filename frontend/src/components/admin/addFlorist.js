import {
  Button,
  Container,
  Card,
  CardContent,
  TextField,
  Typography,
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

  //   1. Create the form object

  const addForm = {
    shopName: "",
    timings: "",
    mobile: "",
    email: "",
    address: "",
    colour: "",
    image: "",
  };

  //   2. Create a submit function
  const formSubmit = (formdata) => {
    formdata.image = selImage;
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
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                className="w-100 mt-4"
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
            <div className="mt-4">
              <label>Upload Display Image</label>
              <input
                type="file"
                className="form-control"
                onChange={uploadThumbnail}
              />
            </div>
            <div>
              <Button
                type="submit"
                variant="contained"
                className="mt-5"
                color="success"
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="add-florist-back">
      <Container>
        <header className="add-florist-header">
          <Typography variant="h4">Neephur</Typography>
          <Typography variant="h2">Add New Florist</Typography>
        </header>
        <Formik initialValues={addForm} onSubmit={formSubmit}>
          {formBody}
        </Formik>
      </Container>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-centre",
    alignItems: "center",
    height: "100%",
  },
};

export default AddFlorist;
