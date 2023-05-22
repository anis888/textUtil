import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  const linkRef = useRef(null);
  const handleLinkClick = () => {
    linkRef.current.focus();
  };
  

  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <label className="navbar-brand">{props.title}</label>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link ref={linkRef} onClick={handleLinkClick} className="nav-link" to="/">Home</Link>

        </li>
        <li className="nav-item">
          <Link ref={linkRef} onClick={handleLinkClick} className="nav-link" to="/About">{props.aboutText}</Link>
        </li>      
       
      </ul>
      <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" for="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
      {/* <form className="d-flex mx-2" role="search">
        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}
 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText:PropTypes.string
  };

 Navbar.defaultProps={
    title: 'set title here',
    aboutText:'about text here'
 };
