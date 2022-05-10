<<<<<<< HEAD
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import app_config from "../../config";
=======
import React from 'react'
>>>>>>> d2300d1fc692c13b8e1e932b5acfd139c283a0a1

function Copyright() {
  return (
<<<<<<< HEAD
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Neephur
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}
=======
       
      <div className="container" >
      <div className="py-5 text-center" sx={{mb:18}}>
        
        <h2 Style={{color:"black"}}>Checkout Page</h2>
        
      </div>
    
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Flower Name</h6>
                <small className="text-muted">Shop Name</small>
                <small className="text-muted">Quantity</small>
              </div>
              <span className="text-muted">Price</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">Flower Name</h6>
                <small className="text-muted">Shop Name</small>
                <small className="text-muted">Quantity</small>
              </div>
              <span className="text-muted">Price</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">Flower Name</h6>
                <small className="text-muted">Shop Name</small>
                <small className="text-muted">Quantity</small>
              </div>
              <span className="text-muted">Price</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total Price </span>
              <strong>Price</strong>
            </li>
          </ul>
    
          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code"/>
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary">Redeem</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" novalidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>
    
            <div className="mb-3">
              <label for="username">Username</label>
              <div className="input-group">
                <input type="text" className="form-control" id="username" placeholder="Username" required/>
                <div className="invalid-feedback" style={{width: "100%"}}>
                  Your username is required.
                </div>
              </div>
            </div>
    
            <div className="mb-3">
              <label for="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
    
            <div className="mb-3">
              <label for="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
    
            <div className="mb-3">
              <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder=""/>
            </div>
    
            <div className="row">
            <div className="col-md-3 mb-3">
                <label for="city">City</label>
                <input type="text" className="form-control" id="city" placeholder="" required/>
                <div className="invalid-feedback">
                  Please enter city Name.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr className="mb-4"/>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="same-address"/>
              <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="save-info"/>
              <label className="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
          </form>
        <hr/>
        </div>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto" sx={{mb:25}}>
      <button class="btn btn-secondary btn-lg" type="button">Proceed to Checkout</button>
      </div>
      <br/>
      <br/>
    </div>

  );
};
>>>>>>> d2300d1fc692c13b8e1e932b5acfd139c283a0a1

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const url = app_config.backend_url;
  const [cart, setCart] = React.useState(
    JSON.parse(sessionStorage.getItem("cart"))
  );
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [addressData, setAddressData] = React.useState(null);
  const [paymentDetails, setPaymentDetails] = React.useState(null);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const placeOrder = () => {
    const orderData = {
      user: currentUser._id,
      cart: cart,
      address: addressData,
      paymentDetails: paymentDetails,
    };

    fetch(url + "/order/add", {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>  
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
