import React from "react";
import "./Chooseplan.css";
import toggle from "../../assets/Toggle.png";
import tick from "../../assets/Path.png";
import remove from "../../assets/small-remove.png";
import orangearrow from "../../assets/tail-right-orange.png";

const Chooseplan = () => {
  return (
    <div className="Chooseplan">
      <h4 className="headingtext">
        Choose Plan <br />
        That’s Right For You
      </h4>
      <p className="headingdiscription">
        Simple and transparent pricing. Start for free, upgrade when you love
        it. <br /> <span>30 day free trial in a button</span>
      </p>
      <div className="choosetextbtn">
        <p>
          Running a <strong>Growth Business or Enterprise</strong> ? Let's
          connect -
        </p>
        <button>Talk to Sales</button>
      </div>
      <div class="toogle">
        <p className="monthlypara">Monthly</p>
        <img src={toggle} alt="toggle" />
        <p className="monthlypara">Yearly</p>
        <p className="save">Save 25%</p>
      </div>
      <div class="pricediv">
        <div class="started">
          <p className="pricetype">Starter</p>
          <p className="cost">
            <strong>$ </strong>
            <span>17</span> /month
          </p>
          <p className="billed">billed monthly</p>
          <ul>
            <li>
              <img src={tick} alt="tick" />
              Commercial License
            </li>
            <li>
              <img src={tick} alt="tick" />
              100+ HTML UI Elements
            </li>
            <li>
              <img src={tick} alt="tick" />
              Unlimited Domain Support
            </li>
            <li className="disable">
              <img src={remove} alt="tick" />6 Month Premium Support
            </li>
            <li className="disable">
              <img src={remove} alt="tick" />
              Life Time Updates
            </li>
          </ul>
          <button>
            Get Started <img src={orangearrow} alt="orangearrow" />
          </button>
          <p className="nocridit">No credit card required</p>
        </div>
        <div class="premium">
          <p className="pricetype">Premium</p>
          <p className="cost">
            <strong>$ </strong> <span>88</span> /month
          </p>
          <p className="billed">billed monthly</p>
          <ul>
            <li>
              <img src={tick} alt="tick" />
              Commercial License
            </li>
            <li>
              <img src={tick} alt="tick" />
              100+ HTML UI Elements
            </li>
            <li>
              <img src={tick} alt="tick" />
              Unlimited Domain Support
            </li>
            <li>
              <img src={tick} alt="tick" />6 Month Premium Support
            </li>
            <li>
              <img src={tick} alt="tick" />
              Life Time Updates
            </li>
          </ul>
          <button>
            Get Started <img src={orangearrow} alt="orangearrow" />
          </button>
          <p className="nocridit">No credit card required</p>
        </div>
      </div>
      <p className="Explore">Explore In-Depth Differences</p>
    </div>
  );
};

export default Chooseplan;
