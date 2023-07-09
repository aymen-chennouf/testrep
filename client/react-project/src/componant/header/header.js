import React , {Component} from 'react';
import { Link } from "react-router-dom";

import logo from '../../images/long logo.png';



class Header extends Component {


  render() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt='' width="150" height="50"/>
        </a>      
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">            
              <Link className="nav-link" to='/'>cows</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to='/births' >Births</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/milk" >Milk</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to = '/medicalexm'>medical examination</Link>
            </li>          
          </ul>
        </div>
      </div>
    </nav>
  );
}
}

export default Header;
