import React, { useEffect, useState } from "react";
import app_config from "../../config";


const FloristList = () => {
  const url = app_config.backend_url;

  const [floristArray, setFloristArray] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchFlorist = () => {
    fetch(url + "/florist/getall/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setFloristArray(data);
      });
  };

  useEffect(() => {
    fetchFlorist();
  }, []);

  const displayData = () => {
    if (!loading)
      return floristArray.map(
        ({ shopName, mobile, email, address, timings }) => (
          
  <section  style={{backgroundColor: "#eee"}}>
  <div class="container py-7">
    <div class="row justify-content-center mb-3">
      <div class="col-md-12 col-xl-10">
        <div class="card shadow-0 border rounded-3">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-3 col-xl-3 mb-3 mb-lg-0">
                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp" alt=""
                    class="w-100" />
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <h5>{shopName}</h5>
                <div class="d-flex flex-row">
                  <div class="text-danger mb-1 me-2">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                <div class="mt-1 mb-0 text-muted small">
                <span class="text-primary"> • </span>
                  <span style={{fontSize:"15px", color:"black"}}>Timing : {timings} </span>
                  <br></br>
                  <span class="text-primary"> • </span>
                  <span style={{fontSize:"15px", color:"black"}}>Contact No: {mobile} </span>
                  <br></br>
                  <span class="text-primary"> • </span>
                  <span style={{fontSize:"15px", color:"black"}}>Email : {email} </span>
                  <br></br>
                  <span class="text-primary"> • </span>
                  <span style={{fontSize:"15px", color:"black"}}> Address: {address} </span>
                  
                </div>
              </div>
                <div style={{dispay: "flex" , justifyContent:"flex-end"}} sx={{mt:47}}>
                  <button class="btn btn-secondary " type="button">VISIT</button>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        )
      );
  };

  return (
    <section  style={{backgroundColor: "#eee"}}>
      <div class="container py-5">{displayData()}</div>
    </section>
  );
};


export default FloristList;
