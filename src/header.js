import React from 'react';
import Logo from './images/logo.png';
import './header.css'

function Header() {
    return (
      <div>{/* navigation bar */}
        <nav class="navbar navbar-expand-lg navbar-light border">
  <a class="navbar-brand" href="#">
  <img src={Logo}  width='236px' height="53px" alt="clinistate-logo" loading="lazy"></img>
     
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse  nav-class" id="navbarSupportedContent">
   
          <ul class="navbar-nav  px-5 text-center">
              <li class="nav-item ">
                <a class="nav-link px-2" href="#">Home </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link px-2" href="#">Features </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link px-2" href="#">Plans </a>
              </li>
              <li class="nav-item  ">
                <a class="nav-link px-2" href="#">Testomial </a>
              </li>   
              
              <li class="nav-item " style={{paddingLeft:'250px'}}>
                <a class="nav-link " href="#"><i class="fa fa-phone px-2" aria-hidden="true"></i>Call Us </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#"><i class="fa fa-location-arrow px-2" aria-hidden="true"></i>Mail Us</a>
              </li>  
              
             
    </ul>
    
  </div>
</nav>
      </div>
    );
  }
  
  export default Header;