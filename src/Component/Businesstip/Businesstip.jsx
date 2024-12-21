import React from "react";
import "./Businesstip.css";
import tipone from "../../assets/tipone.png";
import tiptwo from "../../assets/tiptwo.png";
import tipthree from "../../assets/tipthree.png";
import arrowimg from "../../assets/arrow.png";

const Businesstip = () => {
  return (
    <div className="Businesstip">
      <h4 className="headingtext">Onboard business in 3 simple steps</h4>
      <p className="headingdiscription">
        Quick assisted onboarding with 30day free trial. No credit card needed.
      </p>

      <div className="tipdiv">
        <img src={arrowimg} alt="arrowimg" className="arrowone" />
        <img src={arrowimg} alt="arrowimg" className="arrowtwo" />
        <div className="singletip">
          <div className="tipcontentdiv">
            <img src={tipone} alt="tipone" className="tipimgone" />
            <p className="tipcontent">1</p>
          </div>
          <h5>Claim your preset profile</h5>
          <p>
            Unlock tailored service and seamlessly elevate your experience by
            claiming your preset profile today.
          </p>
        </div>
        <div class="singletip">
          <div class="tipcontentdiv">
            <img src={tiptwo} alt="tiptwo" className="tipimgtwo" />
            <p className="tipcontent">2</p>
          </div>
          <h5>Add services</h5>
          <p>
            Make use of multiple scheduling, pricing options to add services.
            Choose from pre-created scheduling templates.
          </p>
        </div>
        <div class="singletip">
          <div class="tipcontentdiv">
            <img src={tipthree} alt="tipthree" className="tipimgthree" />
            <p className="tipcontent">3</p>
          </div>
          <h5>Built Website</h5>
          <p>
            Build your online storefront your way, seamlessly integrating all
            services for a cohesive and efficient Client experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Businesstip;
