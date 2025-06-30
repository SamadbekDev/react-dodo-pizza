import React from "react";
import Logo from '../../assets/images/logo.svg'


const Nav = () => {
  return (
    <nav className="header_nav">
      <ol className="header_nav_list">
        <li className="header_nav_item">
          <a href="http//google.com" className="header_nav_link">
            <img src={Logo} alt="Dodo Pizza Logo"  className='header_logo'/>
          </a>
        </li>
        <li className="header_nav_item">
          <a href="http//google.com" className="header_nav_link">Пицца</a>
        </li>
        <li className="header_nav_item">
          <a href="http//google.com" className="header_nav_link">Комбо</a>
        </li>
        <li className="header_nav_item">
          <a href="http//google.com" className="header_nav_link">Закуски</a>
        </li>
        <li className="header_nav_item">
          <a href="http//google.com" className="header_nav_link">Десерты</a>
        </li>
        <li className="header_nav_item">
          <a href="http//google.com" className="header_nav_link">Напитки</a>
        </li>
        <li className="header_nav_item">
          <a href="http//google.com" className="header_nav_link">Другие товары</a>
        </li>
        <li className="header_nav_item">
          <a href="http//google.com" className="header_nav_link">Акции</a>
        </li>
        <li className="header_nav_item">
          <a href="http//google.com" className="header_nav_link">Контакты</a>
        </li>
      </ol>
      <div>
        <button className="header_btn">Корзина</button>
      </div>
    </nav>
  );
};

export default Nav;
