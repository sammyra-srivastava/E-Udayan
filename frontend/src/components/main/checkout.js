import { Container, Box, TextField, Card, CardMedia, CardContent} from '@mui/material'
import React from 'react'
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Checkout = () => {
  return (
   <Container style={{display:"flex", flexDirection: 'column' }} >
       <h1> checkout Page</h1>
       <Box style={{float:"left"}}>
        <h3>Contact Details</h3>
        <TextField
        className="w-100 "
        variant="Outlined"
        label="Email Id"
        type="email"
        id="email" />
        <TextField
        className="w-100 "
        variant="Outlined"
        label="Phone No"
        type="mobile"
        id="mobile" />
        <h3> Shipping Address</h3>
        <TextField
              className="w-100 "
              variant="outlined"
              label="Full Name"
              type="fullName"
              id="fullName"/>
        <TextField
              className="w-100 "
              variant="outlined"
              label="Address"
              type="address"
              id="address"/>
        <TextField
              className="w-50 "
              variant="outlined"
              label="City"
              type="city"
              id="city"/>
        <TextField
              className="w-50 "
              variant="outlined"
              label="Postal Code"
              type="pincode"
              id="pincode"/>
        <FormGroup sx={{ mt: 1 }}>
            <FormControlLabel
            control={<Checkbox />}
            label="Save this information for next time" />
            </FormGroup>
       </Box>
       <Box style={{float:"right"}}>
       <Card style={{display:"flex", flexDirection:"column"}}>
           <CardMedia 
          component="img"
          sx={{ flex: '1 0 auto',width: 151  }}
          image="/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover" >   
          </CardMedia>
          <CardContent>
         <h3>Card Title</h3>
         <h3>Price</h3>
         <Stack spacing={0.5} direction="row">
        <Button variant="text">-</Button>
        <span>1</span>
        <Button variant="text">+</Button>
        </Stack>
        </CardContent>
       </Card>
       <hr></hr>
       <h6>Total</h6>
       </Box>
   </Container>
  )
}

export default Checkout;
