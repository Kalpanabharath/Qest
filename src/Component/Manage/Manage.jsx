import React from "react";
import "./Manage.css";
import apple from "../../assets/Applelogo.png";
import googleplay from "../../assets/Logo.png";

const Manage = () => {
  return (
    <div className="Manage">
      <h4 className="headingtext">Manage Your Business On the Go</h4>
      <p className="headingdiscription ">
        With free Business Mobile App, you can manage your entire service
        business from <br /> anywhere. Stay connected and stay in control, no
        matter where your day takes you.
      </p>
      <div class="displayapp">
        <div class="apple">
          <img src={apple} alt="apple" /> <p>App Store</p>
        </div>
        <div class="googleplay">
          <img src={googleplay} alt="googleplay" /> <p>Google Play</p>
        </div>
      </div>
    </div>
  );
};

export default Manage;
