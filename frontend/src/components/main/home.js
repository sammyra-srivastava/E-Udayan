import React from 'react' 
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div
    id="carouselVideoExample"
    className="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
   
    <div className="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselVideoExample"
        data-mdb-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselVideoExample"
        data-mdb-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselVideoExample"
        data-mdb-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
  
   
    <div className="carousel-inner">
     
      <div className="carousel-item active">
        <video className="img-fluid" autoplay loop muted>
          <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
        </video>
        <div className="carousel-caption d-none d-md-block">
          <h5>Send Flower like you mean it</h5>
          <p>
            Flowers are our inspiration to create lasting memories.
          </p>
        </div>
      </div>
  
     
      <div className="carousel-item">
        <video className="img-fluid" autoplay loop muted>
          <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
        </video>
        <div className="carousel-caption d-none d-md-block">
          <h5>Let's make beautiful flower a part of your life</h5>
          <p>
           When you think of flowers think of our's.
          </p>
        </div>
      </div>
  
 
      <div className="carousel-item">
        <video className="img-fluid" autoplay loop muted>
          <source
            src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
            type="video/mp4"
          />
        </video>
        <div className="carousel-caption d-none d-md-block">
          <h5>Creative solution for all your floral meet</h5>
          <p>
            An impressive finest blossoms hand-picked especially for you to make your ocassion more auspasious.
          </p>
        </div>
      </div>
    </div>
   
    <button
      className="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  )
}
export default Home;
