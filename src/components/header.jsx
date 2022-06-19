import React from "react";
import Close from '../images/icon-close.svg'
import Logo from '../images/logo.svg';
import MobileMenu from '../images/icon-menu.svg';
import HeaderCart from '../images/icon-cart.svg';
import Avatar from '../images/image-avatar.png';

// Create List with Link in Header Menu
const HeaderMenuList = (props) => {
  return (
    <li><a href={props.link}>{props.list}</a></li>
  )
}

// Open Menu when clicked
const MobileMenuOpener = () => {
  const OpenMenuList = document.getElementById('mobile-menu');
  OpenMenuList.style.display = 'block';
}

// Close Menu when clicked

const MobileMenuCloser = () => {
  const CloseMenuList = document.getElementById('mobile-menu');
  CloseMenuList.style.display = 'none'
}

const Header = () => {
  return (
    <header>
      <div className="header-section-1">
        {/* Mobile Menu Icon */}
        <img src={MobileMenu} alt="mobile menu" className="mobile-menu" onClick={MobileMenuOpener}/>
        {/* Logo */}
        <img src={Logo} alt="logo" className="logo" />
        {/* Menu List (Hidden when Mobile/Display on Tablet and Desktop) */}
        <nav className="nav-links" id="mobile-menu">
          <div className="nav-links-container">
            <img src={Close} alt="close" className="close-icon" onClick={MobileMenuCloser}/>
            <ul className="menu-list">
              <HeaderMenuList link="#collections" list="Collections"/>
              <HeaderMenuList link="#men" list="Men"/>
              <HeaderMenuList link="#women" list="Women"/>
              <HeaderMenuList link="#about" list="About"/>
              <HeaderMenuList link="#contact" list="Contact"/>
            </ul>
          </div>
        </nav>
      </div>
      <div className="header-section-2">
        {/* Cart */}
        <img src={HeaderCart} alt="cart" className="header-cart"/>
        {/* Avatar */}
        <img src={Avatar} alt="avatar" className="avatar"/>
      </div>
    </header>
  )
}

export default Header;