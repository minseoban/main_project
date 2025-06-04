import React from 'react';
import { GoPerson } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";


function Header() {
  return (
    <header>
      <nav>
        <ul>
          <div className="logo_img">
            <img className="default_img" src="./images/brlogo.png" alt="logo"></img>
            <img className="hover_img" src="./images/brlogohover.png" alt="hoverlogo"></img>
          </div>
          <li><a href="#">Menu</a></li>
          <li><a href="#">BR Play</a></li>
          <li><a href="#">BR Story</a></li>
          <li><a href="#">Delivery/Store</a></li>
        </ul>
      </nav>
      <div className="icons">
        <a className="underline" href="">___________</a>
        <a className="search" href=""><IoIosSearch /></a>
        &nbsp; &nbsp;
        <a href=""><GoPerson /></a>
      </div>
    </header>
  );
}

export default Header;