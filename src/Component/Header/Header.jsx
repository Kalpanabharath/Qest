import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/RMax.png";
import downArrow from "../../assets/downArrow.png";
import bunButtion from "../../assets/bunButtion.png";
import airplay from "../../assets/airplay.png";
import mobile from "../../assets/mobile.png";
import imageGallery from "../../assets/image-gallery-plus.png";
import bookOpen from "../../assets/book-open-reader.png";
import school from "../../assets/school.png";
import Appointments from "../../assets/document.png";
import Services from "../../assets/user-change.png";
import Retreats from "../../assets/star-magic.png";
import Payments from "../../assets/credit-card-check.png";
import DesignTools from "../../assets/layout-web-4.png";
import Communication from "../../assets/envelope-shield.png";
import triangle from "../../assets/triangle.png";
import userSettings from "../../assets/user-Settings.png";
import homedashuser from "../../assets/home-dash-user.png";
import chartline from "../../assets/chart-line.png";
import signsdirection from "../../assets/signs-direction.png";
import ranking from "../../assets/ranking.png";
import angleright from "../../assets/angle-right.png";
import chattextplus from "../../assets/chat-text-plus.png";
import filelist from "../../assets/file-list.png";

const Header = () => {
  const [menuvisiblity, ubdatemenuvisiblity] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  let mobilemenu = () => {
    ubdatemenuvisiblity(!menuvisiblity);
  };
  return (
    <div className="Header">
      <nav>
        <img src={logo} alt="logo" className="logoimage" />
        <div
          className="navcontent"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <ul className={menuvisiblity ? "visiblemenu" : "invisiblemenu"}>
            <li>
              <Link to="/Qest/">Home</Link>
            </li>
            <li>
              Features <img src={downArrow} alt="downarrow" />
            </li>
            <li>
              <Link to="/Qest/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/Qest/solutions">Solutions</Link>
              <img src={downArrow} alt="downarrow" />
            </li>
          </ul>
          <hr className="navline" />
          <button className="loginbutton">Login</button>
          <button className="trybuttion">Try For Free</button>
          <img
            src={bunButtion}
            alt="navigationButtion"
            className="navigationbuttion"
            onClick={mobilemenu}
          />
        </div>
      </nav>
      {dropdownVisible && (
        <div className="featureDropdown">
          <div className="discover">
            <h5>Discover</h5>
            <ul>
              <li>
                <img src={airplay} alt="airplay" />
                Custom Branded website
              </li>
              <li>
                <img src={mobile} alt="mobile" />
                Custom Branded website
              </li>
              <li>
                <img src={imageGallery} alt="imageGallery" />
                Business Webpage
              </li>
            </ul>
          </div>
          <hr className="FeatureDropdoenhr" />
          <div className="manage">
            <h5>Manage</h5>
            <div className="managenav">
              <div className="managedivone">
                <li>
                  <img src={bookOpen} alt="bookOpen" />
                  Courses
                </li>
                <li>
                  <img src={school} alt="school" />
                  Classess
                </li>
                <li>
                  <img src={Appointments} alt="Appointments" />
                  Appointments
                </li>
                <li>
                  <img src={Services} alt="Services" />
                  Services
                </li>
                <li>
                  <img src={Retreats} alt="Retreats" />
                  Retreats
                </li>
                <li>
                  <img src={Payments} alt="Payments" />
                  Payments
                </li>
                <li>
                  <img src={DesignTools} alt="Design Tools" />
                  Design Tools
                </li>
              </div>

              <div className="managedivtwo">
                <li>
                  <img src={Communication} alt="Communication" />
                  Communication
                </li>
                <li>
                  <img src={triangle} alt="triangle" />
                  Trail Session
                </li>
                <li>
                  <img src={userSettings} alt="userSettings" />
                  Staff Roles
                </li>
                <li>
                  <img src={homedashuser} alt="homedashuser" />
                  Workshops
                </li>
                <li>
                  <img src={chartline} alt="chartline" />
                  Reporting tools
                </li>
                <li>
                  <img src={signsdirection} alt="signsdirection" />
                  Multi-Location
                </li>
                <li>
                  <img src={ranking} alt="ranking" />
                  Events
                </li>
              </div>
            </div>
            <button className="managebuttion">
              See all features <img src={angleright} alt="angleright" />{" "}
            </button>
          </div>
          <hr className="FeatureDropdoenhr" />
          <div className="grow">
            <h5>Grow</h5>
            <ul>
              <li>
                <img src={Retreats} alt="Retreats" />
                AI Marketing Tools
              </li>
              <li>
                <img src={chattextplus} alt="chattextplus" />
                Social Media Integration
              </li>
              <li>
                <img src={filelist} alt="filelist" />
                CRM
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
