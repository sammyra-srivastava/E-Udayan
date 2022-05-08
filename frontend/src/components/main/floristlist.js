import React, { useEffect, useState } from "react";
import app_config from "../../config";
import "../stylesheet/floristlist.css";

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
          <li>
            <a
              href="/"
              className="card1"
              style={{
                height: "15rem",
                background:
                  "url(" +
                  "https://i.pinimg.com/originals/c8/a8/cf/c8a8cf28e2bc418808f2488043aac2e2.jpg" +
                  ")",
              }}
            >
              {/* <img
                src=
                className="card__image"
                alt=""
              /> */}
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    className="card__thumb"
                    src="https://www.designfreelogoonline.com/wp-content/uploads/2016/07/000742-flowers-logo-design-free-flower-logo-maker-03.png"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title1">The Florist Shop</h3>
                  </div>
                </div>
                <div className="card__description">
                  <h6>Timings : {timings}</h6>
                  <h6>Mobile No : {mobile}</h6>
                  {email ? <h6>Email : {email}</h6> : ""}
                  <h6>Address : {address}</h6>
                </div>
              </div>
            </a>
          </li>
        )
      );
  };

  return <ul className="cards">{displayData()}</ul>;
};

export default FloristList;
