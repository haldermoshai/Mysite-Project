import React from 'react';
import "../styles/Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <section className='footerLeft'>
          <p>Copyright by Sourav Halder 2023.</p>
        </section>
        <section className='footerRight'>
          <span><AiFillFacebook /></span>
          <span><AiFillInstagram /></span>
          <span><AiFillMail /></span>
          <span><AiFillGithub /></span>
        </section>
      </div>
    </div>
  );
}

export default Footer;