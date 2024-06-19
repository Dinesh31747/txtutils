import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer(props) {
  return (
    <div>
      <footer className="footer"style={{color: props.mode === "dark" ? "white" : "black"}}>
        <div className="footer-content" >
          <p style={{color:'red'}}>&copy; 2024 jataprolu-dinesh</p>
          <nav>
            <Link to="/about">About Us</Link> &nbsp;&nbsp;
            <Link to="/contact">Contact</Link> &nbsp;&nbsp;
            <Link to="/privacy">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
