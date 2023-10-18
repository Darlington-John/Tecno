import React from 'react';
import './../../Styles/Tailwind.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ReactComponent as TechnoLogoImg } from './../../Assets/Images/TechnoLogo.svg';
import { ReactComponent as SearchIcon } from './../../Assets/Icons/Search.svg';
import { ReactComponent as ContactWhiteIcon } from './../../Assets/Icons/ContactWhite.svg';
import BarsIcon from './../../Assets/Icons/Bars.svg';
import XmarkIcon from './../../Assets/Icons/Xmark.svg';
import { useState, useEffect } from 'react';
import { toggleNav } from './../../JavaScript.js';
import Card from './../Card/Card';
import PhantomImg from './../../Assets/Images/Phantom.png';
import FavIconIcon from './../../Assets/Icons/FavIcon.svg';
import CompareIcon from './../../Assets/Icons/Compare.svg';
import FireIcon from './../../Assets/Icons/Fire.svg';
import CamonImg from './../../Assets/Images/Camon.png';
import PovaImg from './../../Assets/Images/Pova.png';
import SparkImg from './../../Assets/Images/Spark.png';
import PopImg from './../../Assets/Images/Pop.png';
import MegaBookTImg from './../../Assets/Images/MegaBookT.png';
import MegaBookSImg from './../../Assets/Images/MegaBookS.png';
import SmartAccsImg from './../../Assets/Images/SmartAccs.png';
import SmartAudioImg from './../../Assets/Images/SmartAudio.png';
import SmartHomeImg from './../../Assets/Images/SmartHome.png';
import WristWatchImg from './../../Assets/Images/WristWatch.png';
const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('Navbar', 'TechnoLogoPath');
      const scrollHeight = window.scrollY;
      const offset = 20;

      if (scrollHeight > offset) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [icon, setIcon] = useState(BarsIcon);

  const handleToggleNav = () => {
    toggleNav();
    setIsOverlayOpen(!isOverlayOpen);
    setIcon(isOverlayOpen ? BarsIcon : XmarkIcon);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`bg-transparent text-lg py-6 justify-between flex px-52 flex-wrap items-center  w-full text-white  xl:px-12 lg:px-8 lg:text-xs md:bg-white  Navbar ${
        isHovered ? 'hovered' : ''
      }`}
      id="Navbar"
    >
      <div className="flex justify-between gap-x-10 lg:gap-x-5 hidden md:flex ">
        <Link to="#" onClick={handleToggleNav}>
          <img id="barsIcon" src={icon} className="w-6 " />
        </Link>
      </div>
      <div className="flex justify-between gap-x-10 lg:gap-x-5">
        <Link to="/">
          <TechnoLogoImg />
        </Link>
        <div className="md:hidden flex justify-between gap-x-10 lg:gap-x-5">
          <div
            className="Work"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="#">Phones</Link>
            <div className="DropDown">
              <HoverNavBar
                phantom=" "
                ButtonTitle="All Models"
                DropdownButtonImg={FavIconIcon}
                ButtonTitle2="Pare Models"
                DropdownButtonImg2={CompareIcon}
              />
            </div>
          </div>
          <div
            className="Work"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="#">Laptops</Link>
            <div className="DropDown">
              <HoverNavBar
                Laptop=" "
                ButtonTitle="All Models"
                DropdownButtonImg={FavIconIcon}
                ButtonTitle2="Pare Models"
                DropdownButtonImg2={CompareIcon}
              />
            </div>
          </div>
          <div
            className="Work"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="#">Accessories</Link>
            <div className="DropDown">
              <HoverNavBar
                Accessories=" "
                ButtonTitle="All Models"
                DropdownButtonImg={FavIconIcon}
                ButtonTitle2="Hot Sales"
                DropdownButtonImg2={FireIcon}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-x-10">
        <div className="md:hidden flex justify-between gap-x-10 lg:gap-x-5">
          <Link to="#">Stores</Link>
          <Link to="#">Support</Link>
          <Link to="#">Community</Link>
          <Link to="#" className="navbar-icon">
            <SearchIcon />
          </Link>
          {/* {isHidden && <HoverNavBar />} */}
        </div>
        <Link to="#" className="navbar-icon">
          <ContactWhiteIcon />
        </Link>
      </div>
    </div>
  );
};

export const HoverNavBar = (props) => {
  return (
    <div id="hover-nav-bar">
      {props.phantom && (
        <div className="phones-card">
          <Card ClassicCard={PhantomImg} CardLink="Phantom" />
          <Card ClassicCard={CamonImg} CardLink="Camon" />
          <Card ClassicCard={PovaImg} CardLink="Pova" />
          <Card ClassicCard={SparkImg} CardLink="Spark" />
          <Card ClassicCard={PopImg} CardLink="Pop" />
        </div>
      )}
      {props.Laptop && (
        <div className="phones-card">
          <Card
            ClassicCard={MegaBookTImg}
            CardLink="
MEGABOOK T Series
"
          />
          <Card
            ClassicCard={MegaBookSImg}
            CardLink="
MEGABOOK S Series"
          />
        </div>
      )}
      {props.Accessories && (
        <div className="phones-card">
          <Card ClassicCard={WristWatchImg} CardLink="Smart-Wearable" />
          <Card
            ClassicCard={SmartHomeImg}
            CardLink="
Smart-Home"
          />
          <Card
            ClassicCard={SmartAudioImg}
            CardLink="
Smart-Audio"
          />
          <Card
            ClassicCard={SmartAccsImg}
            CardLink="
Smart-Accessories"
          />
        </div>
      )}
      <div className="dropdown-buttons-container">
        <div className="dropdown-buttons">
          <img src={props.DropdownButtonImg} className="dropdown-button-img" />
          <span className="button-title">{props.ButtonTitle}</span>
        </div>
        <div className="dropdown-buttons">
          <img src={props.DropdownButtonImg2} className="dropdown-button-img" />
          <span className="button-title">{props.ButtonTitle2}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
