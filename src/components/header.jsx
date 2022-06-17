import React from "react";
import Logo from '../images/logo.svg';
import MobileMenu from '../images/icon-menu.svg';
import HeaderCart from '../images/icon-cart.svg';
import Avatar from '../images/image-avatar.png';

const HeaderMenuList = (props) => {
  return (
    <li><a href={props.link}>{props.list}</a></li>
  )
}

const Header = () => {
  return (
    <header>
      <div className="header-section-1">
        <img src={MobileMenu} alt="mobile menu" className="mobile-menu" />
        <img src={Logo} alt="logo" className="logo" />
        <ul>
          <HeaderMenuList />
          <HeaderMenuList />
          <HeaderMenuList />
          <HeaderMenuList />
          <HeaderMenuList />
        </ul>
      </div>
      <div className="header-section-2">
        <img src={HeaderCart} alt="cart" className="header-cart"/>
        <img src={Avatar} alt="avatar" className="avatar"/>
      </div>
    </header>
  )
}

export default Header;