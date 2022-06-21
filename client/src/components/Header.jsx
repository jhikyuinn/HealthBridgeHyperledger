import React from 'react';
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css';


function Header() {
  
  return (
    <nav className="navba">
      <div className="container-fluid">
         <div className="navbar-header">
            <a className="navbar-bran" href="/">HEALTH BRIDGE </a>
            <FontAwesomeIcon className="bellicon" icon={faBell}/>
          </div>
         
       </div>
    </nav>
  )
}


export default Header;
