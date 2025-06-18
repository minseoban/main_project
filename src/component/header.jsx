import React, { useEffect } from 'react';
import { GoPerson } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";

function Header({ onNavigate }) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav>
        <ul>
          <div className="logo_img">
            <a href="#" onClick={() => onNavigate("home")}><img className="default_img" src={process.env.PUBLIC_URL + "/images/brlogo.png"} alt="logo" /></a>
            <a href="#" onClick={() => onNavigate("home")}><img className="hover_img" src={process.env.PUBLIC_URL + "/images/brlogohover.png"} alt="hoverlogo" /></a>
          </div>
          <li><a href="#" onClick={() => onNavigate("menu")}>Menu</a></li>
          <li><a href="#" onClick={() => onNavigate("br play")}>BR Play</a></li>
          <li><a href="#" onClick={() => onNavigate("br story")}>BR Story</a></li>
          <li><a href="#" onClick={() => onNavigate("deliverystore")}>Delivery/Store</a></li>
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
