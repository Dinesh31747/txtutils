import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import lightBgVideo from '../Assets/Mesh.mp4';
// import darkBgVideo from '../Assets/Starfield.mp4';
import '../App.css';
function HomePage(props) {
  return (
    <div style={{width:"100%", height:"800px", paddingTop:50, paddingBottom:95}}>
    <div id = {props.mode === 'dark'?'Dhome-bg':'Lhome-bg'} className="home-page d-flex flex-column min-vh-100 align-items-center justify-content-center"style={{color: props.mode==='dark'?'white':'black'}}>
      <section className="hero text-center" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Effortless Text Transformation</h1>
        <p>Simplify your text editing with one powerful tool.</p>
        <div className="d-flex justify-content-center mt-4">
          <Button className="mx-3" variant="primary" as={Link} size="lg" to="/home">
            Try Now
          </Button>
          <Button className="mx-3" variant="outline-primary" as={Link} size="lg" to="/about">
            Learn More
          </Button>
        </div>
      </section>
    </div>
    </div>
  );
}

export default HomePage;
