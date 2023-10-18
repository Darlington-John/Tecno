import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import TechnoLogoImg from './../../Assets/Images/TechnoLogo.svg';
import faceBookIcon from './../../Assets/Icons/faceBook.svg';
import twitterIcon from './../../Assets/Icons/twitter.svg';
import instagramIcon from './../../Assets/Icons/instagram.svg';
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="link-sections">
          <h1 className="link-sections-header">About Tecno</h1>
          <Link>About us</Link>
          <Link>News </Link>
          <Link>Contact Us</Link>
        </div>
        <div className="link-sections">
          <h1 className="link-sections-header">Products </h1>
          <Link>PHANTOM</Link>
          <Link>CAMON </Link>
          <Link>POVA</Link>
          <Link>SPARK</Link>
          <Link>POP</Link>
          <Link>LAPTOPS </Link>
          <Link>ACCESSORIES</Link>
        </div>
        <div className="link-sections">
          <h1 className="link-sections-header">Support</h1>
          <Link>FAQ</Link>
          <Link>Downloads</Link>
          <Link>Carlcare </Link>
          <Link>Warranty Check</Link>
          <Link>Security Response Center </Link>
          <Link>Eu Declaration Of Conformity</Link>
        </div>
        <div className="link-sections">
          <h1 className="link-sections-header">Apps & Services </h1>
          <Link>HiOS </Link>
          <Link>Boomplay Music</Link>
          <Link>Vskit</Link>
        </div>
        <div className="link-sections logo-link ">
          <img src={TechnoLogoImg} style={{ width: '90px' }} />
          <div className="tecno-link">
            <img src={faceBookIcon} />
            <img src={instagramIcon} />
            <img src={twitterIcon} />
          </div>
        </div>
      </div>
      <div className="footer-policy">
        <div className="privacy-policy">
          <Link>Privacy Policy </Link>
          <Link>Terms of Use</Link>
          <Link>Site Map</Link>
          <Link>Global </Link>
        </div>
        <div className="published">
          <span>©2018-2023 TECNO Mobile</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
