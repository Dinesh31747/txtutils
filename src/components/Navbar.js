import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Footer.css';
import DarkModeIcon from '@mui/icons-material/DarkMode'; 
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Navbar(props) {
    const [isSticky, setIsSticky] = useState(false); // Optional for additional control

  window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    const sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        setIsSticky(window.pageYOffset >= sticky);}
    else {
      navbar.classList.remove("sticky");
    }
  };
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} ${
        isSticky ? 'sticky' : ''}`}  style={{ paddingTop: isSticky ? '20px' : '0' }} /*Adjust padding based on sticky state */>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/txtutils">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <button className="form-check-btn" onClick={props.toggleMode} alt = 'Enable light mode'>
                            {props.mode === 'dark' ? <LightModeIcon style={{color: props.mode === 'dark'?'white':'null'}}/> : <DarkModeIcon/>}
                        </button>
                        {/* <div >{props.mode === 'dark' ? "Enable LightMode" : "Enable DarkMode"}</div> */}
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };