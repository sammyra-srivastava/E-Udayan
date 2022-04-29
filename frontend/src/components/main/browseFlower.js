import React from 'react'
import Container from '@mui/material/Container';
const browseFlower = () => {
  return (
    <Container sx={{ mt: 8 }} >
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
      <div class="card h-100">
        <div className="card">
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="https://a.rgbimg.com/users/x/xy/xymonau/600/2dyVezH.jpg" className="card-img-top" alt="Lilly Flower" style={{ cursor:"pointer" }}/>
          <a href="#!">
          <div style={{ backgroundColor:"rgba(251, 251, 251, 0.15)" }} />
          </a>
        </div>
          <div className="card-body">
            <h4 className="card-title">White Lilly</h4>
            <h6>Shop Name:</h6>
            <h6>Timings:</h6>
            <span><a href="#!" class="btn btn-secondary" sx={{ mt: 3 }}  >Buy Now</a></span>
            <span><a href="#!" class="btn btn-secondary" sx={{ mt: 3 }} >Add to Cart</a></span>
          </div>
        </div>
        </div>
      </div>
      <div className="col">
      <div class="card h-100">
        <div className="card">
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="https://c1.wallpaperflare.com/preview/846/239/681/roses-flowers-rou-red.jpg" className="card-img-top" alt="Rose Flower" style={{ cursor:"pointer" }}/>
          <a href="#!">
          <div style={{ backgroundColor:"rgba(251, 251, 251, 0.15)" }} />
          </a>
        </div>
          <div className="card-body">
            <h4 className="card-title">Red Roses</h4>
            <h6>Shop Name:</h6>
            <h6>Timings:</h6>
            <span><a href="#!" class="btn btn-secondary" sx={{ mt: 3 }}  >Buy Now</a></span>
            <span><a href="#!" class="btn btn-secondary" sx={{ mt: 3 }} >Add to Cart</a></span>
          </div>
        </div>
        </div>
      </div>
      <div className="col">
      <div class="card h-100">
        <div className="card">
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="https://www.flourishroses.com/wp-content/uploads/2020/10/JFK-rose.jpg" className="card-img-top" alt="Rose Flower" style={{ cursor:"pointer" }}/>
          <a href="#!">
          <div style={{ backgroundColor:"rgba(251, 251, 251, 0.15)" }} />
          </a>
        </div>
          <div className="card-body">
            <h4 className="card-title">White Roses</h4>
            <h6>Shop Name:</h6>
            <h6>Timings:</h6>
            <span><a href="#!" class="btn btn-secondary" sx={{ mt: 3 }}  >Buy Now</a></span>
            <span><a href="#!" class="btn btn-secondary" sx={{ mt: 3 }} >Add to Cart</a></span>
          </div>
        </div>
        </div>
      </div>
      <div className="col">
      <div class="card h-100">
        <div className="card">
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="https://www.teahub.io/photos/full/41-416150_free-download-images-of-roses.jpg" className="card-img-top" alt="Rose Flower" style={{ cursor:"pointer" }}/>
          <a href="#!">
          <div style={{ backgroundColor:"rgba(251, 251, 251, 0.15)" }} />
          </a>
        </div>
          <div className="card-body">
            <h4 className="card-title">Pink Roses</h4>
            <h6>Shop Name:</h6>
            <h6>Timings:</h6>
            <span><a href="#!" class="btn btn-secondary" sx={{ mt: 3 }}  >Buy Now</a></span>
            <span><a href="#!" class="btn btn-secondary" sx={{ mt: 3 }} >Add to Cart</a></span>
          </div>
        </div>
        </div>
      </div>
      <div className="col">
      <div class="card h-100">
        <div className="card">
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="https://p4.wallpaperbetter.com/wallpaper/94/178/550/orchids-flowers-exotic-greens-wallpaper-preview.jpg" className="card-img-top" alt="Orchid Flower" style={{ cursor:"pointer" }}/>
          <a href="#!">
          <div style={{ backgroundColor:"rgba(251, 251, 251, 0.15)" }} />
          </a>
        </div>
          <div className="card-body">
            <h4 className="card-title">Pink Orchids</h4>
            <h6>Shop Name:</h6>
            <h6>Timings:</h6>
            <span><a href="#!" class="btn btn-secondary" sx={{ mt: 3 }}  >Buy Now</a></span>
            <span><a href="#!" class="btn btn-secondary" sx={{ mt: 3 }} >Add to Cart</a></span>
          </div>
        </div>
        </div>
      </div>
      <div className="col">
      <div class="card h-100">
        <div className="card">
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="https://hdfreewallpaper.net/wp-content/uploads/2017/11/Purple-Orchid-Flower.jpg" className="card-img-top" alt=" Orchid Flower"  style={{ cursor:"pointer" }}/>
          <a href="#!">
          <div style={{ backgroundColor:"rgba(251, 251, 251, 0.15)" }} />
          </a>
        </div>
          <div className="card-body">
            <h4 className="card-title">Purple Orchids</h4>
            <h6>Shop Name:</h6>
            <h6>Timings:</h6>
            <span><a href="#!" class="btn btn-secondary" sx={{ mt: 3 }}  >Buy Now</a></span>
            <span><a href="#!" class="btn btn-secondary" sx={{ mt: 3 }} >Add to Cart</a></span>
          </div>
        </div>
        </div>
      </div>
     
      
    </div>
    </Container>
      )
    }
    const styles ={
     Container :{
       display:"flex",
      
     }
    }

export default browseFlower;
