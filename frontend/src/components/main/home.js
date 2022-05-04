import React from 'react' 
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
  <>
  <Box sx={{mt:5}} >
  <div id="carouselMaterialStyle" className="carousel slide carousel-fade" data-mdb-ride="carousel"  >
  
  <div className="carousel-indicators">
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active" aria-current="true"
      aria-label="Slide 1"></button>
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
  </div>

 
  <div className="carousel-inner shadow-4-strong"  >
    
    <div className="carousel-item active" style={{height:450}} >
      <img src="https://c4.wallpaperflare.com/wallpaper/450/616/13/5bd368d7655c6-wallpaper-preview.jpg" className="d-block w-100 img-fluid "
        alt="Sunset Over the City" />
    </div>

   
    <div className="carousel-item" style={{height:450, backgroundSize:"contain"}}>
      <img src="https://wallpapercave.com/wp/wp2906115.jpg" className="d-block w-100"
        alt="Canyon at Nigh" />
    </div>

   
    <div className="carousel-item" style={{height:450}} >
      <img src="https://cutewallpaper.org/21/laptop-flower-wallpaper/Flower-Pink-Hd-Wallpapers-For-Laptop-Wallpapers-1080p.jpg" className="d-block w-100"
        alt="Cliff Above a Stormy Sea" />
  </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</Box>
<Container style={{ border:"2px solid grey",borderRadius:8,mb:-20}}>
<Typography component="div">
     <Box sx={{textAlign: 'centre', ml:26 ,mr:25,mt:10, fontSize: 50,fontStyle: 'oblique',fontFamily: 'Georgia'}}>
  <p className="text-dark">Send <b className="text-danger" >flower</b> like you mean it.</p>
  </Box>
  <Box sx={{textAlign: 'centre', ml: 10, mr:10,mb:10, fontSize: 38,fontStyle: 'oblique',fontFamily: 'Lucida Handwritinge'}}>
  <p className="text-dark">Where flower are our inspiration to create lasting memories. Whatever the occassion, our flower will make it special for you.</p>
  </Box>
  </Typography>
  </Container>


</> 
  )
}
export default Home;
