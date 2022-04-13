import React, {Fragment} from 'react';
import Button from '../components/Button';


const Navbar = ({name}) => {
  return (
    <Fragment>
      <nav className='topNav' id='navBar'>
        <div className="container">
          <ul className="nav__section nav__section--main">
            <li className="nav__section-item">
              <a href="/" className="logo">{name}</a>
            </li>
            <li className="nav__section-item  nav__section-item--large">
              <ul className="subnav">
                <li className="nav__link-item"><a href="#" className="nav__link">About</a></li>
                <li className="nav__link-item"><a href="#" className="nav__link">Services</a></li>
                <li className="nav__link-item"><a href="#" className="nav__link">Pricing</a></li>
                <li className="nav__link-item"><a href="#" className="nav__link">Blog</a></li>
              </ul>
            </li>
            <li className="nav__section-item">
              <Button 
                type="standart" 
                name="Contact" 
              />
            </li>
          </ul>

          <ul className="nav__section nav__section--burger">
            <li className="nav__section-item"><a href="/" className="logo">Agency</a></li>
            <li className="nav__section-item">
              <button className="burger-btn">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
        
    </Fragment>
  )
}

export default Navbar