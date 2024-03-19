import React from "react";
import logo from "../images/bytebritlogo.jpeg";

import { NavLink } from "react-router-dom";


const Header = () =>{

    const navLinkStyles = ({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? '#279EFF' : '#ffffff',
          borderBottom: isActive? '3px solid #ffffff' : 'none',
        }
      }
    
    




    return(
        <>
             
<section  id='hide' className='container'>

<nav className="navbar navbar-expand-xl navbar-dark"  >


  <a className="navbar-brand" href="#" id="stico" >
    {/* <img id='logo' style={{ marginTop:"30px" }} src={logo} width={135} height={35} className="d-inline-block align-top" alt="" /> */}
    

  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse homenav" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto" >
      <li className="nav-item">
        <NavLink to="/"    id="aboutaa" style={navLinkStyles}  className="nav-link"  >
             Home
        </NavLink>
      </li>
   
      <li className="nav-item" >
        <NavLink to="/about"  id="abouta" style={navLinkStyles} className="nav-link " >   About </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink to="/order" id="abouta1" style={navLinkStyles} className="nav-link" href="#services"> Work</NavLink>
      </li>
      <li className="nav-item" >
        <NavLink to="/products" id="abouta2" style={navLinkStyles} className="nav-link " href="#sec4">  Contact</NavLink>
      </li>
      
      
      
     
    </ul>
 
  </div>


</nav>

</section>
        
        </>
    )
}
export default Header