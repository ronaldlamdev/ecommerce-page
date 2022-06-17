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

const Header = () => {
  return (
    <header>
      <div className="header-section-1">
        <img src={Close} alt="close" className="close-icon"/>
        <img src={MobileMenu} alt="mobile menu" className="mobile-menu" />
        <img src={Logo} alt="logo" className="logo" />
        <nav className="nav-links">
          <ul className="menu-list">
            <HeaderMenuList link="#collections" list="Collections"/>
            <HeaderMenuList link="#men" list="Men"/>
            <HeaderMenuList link="#women" list="Women"/>
            <HeaderMenuList link="#about" list="About"/>
            <HeaderMenuList link="#contact" list="Contact"/>
          </ul>
        </nav>
      </div>
      <div className="header-section-2">
        <img src={HeaderCart} alt="cart" className="header-cart"/>
        <img src={Avatar} alt="avatar" className="avatar"/>
      </div>
    </header>
  )
}

export default Header;