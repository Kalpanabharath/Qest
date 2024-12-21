import React from "react";
import Applesmall from "../../assets/whitelogoap.png";
import logo from "../../assets/playsmall.png";
import "./Footer.css";
import fb from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";
import twit from "../../assets/twit.png";
import insta from "../../assets/twit.png";

const Footer = () => {
  return (
    <div className="footer">
      <div class="footercontent">
        <div>
          <h6>Company</h6>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h6>Business Size</h6>
          <ul>
            <li>Enterpreneurs</li>
            <li>SMBs</li>
            <li>Growth Bussiness</li>
            <li>Household Services</li>
            <li>Enterprise</li>
          </ul>
        </div>
        <div>
          <h6>Business Type</h6>
          <ul>
            <li>Health & Wellness</li>
            <li>Sports</li>
            <li>Learning Activites</li>
            <li>Household Services</li>
            <li>Miscellaneous</li>
          </ul>
        </div>
        <div>
          <h6>Download</h6>
          <ul>
            <li>
              <img src={Applesmall} alt="Applesmall" />
              Bussiness App
            </li>
            <li>
              <img
                src={logo}
                alt="logo"
                style={{ width: "20px", height: "auto" }}
              />
              Bussiness App
            </li>
            <li>
              <img src={Applesmall} alt="Applesmall" />
              User App
            </li>
            <li>
              <img
                src={logo}
                alt="logo"
                style={{ width: "20px", height: "auto" }}
              />
              User App
            </li>
          </ul>
        </div>
        <div>
          <h6>Legal</h6>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div>
          <h6>Contact us</h6>
          <ul>
            <li>support@Rmax.com</li>
            <li>+91-8459671235</li>
          </ul>
        </div>
      </div>
      <hr className="footarhr" />
      <div class="copyrightlogo">
        <p>© 2024 Copyright, All Right Reserved@RMax</p>
        <div class="logodib">
          <img src={twit} alt="twit" />
          <img src={fb} alt="fb" />
          <img src={insta} alt="insta" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
