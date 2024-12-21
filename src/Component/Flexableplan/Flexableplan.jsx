import React from "react";
import "./Flexableplan.css";
import roghtarroworange from "../../assets/tail-right-orange.png";

const Flexableplan = () => {
  return (
    <div className="Flexableplan">
      <h5 className="headingtext">
        Flexible Plans,
        <br /> Transparent Pricing
      </h5>
      <p className="headingdiscription">
        Find the Perfect Fit for You <br />
        <span>30-day free trial with money-back guarantee.</span>
      </p>
      <h4 className="compare">Compare our plans</h4>
      <div class="firstflex">
        <h6>Features</h6>
        <div className="firstflexdivtwo">
          <h6>Starter</h6>
          <p>$17/month, billed monthly</p>
        </div>
        <div className="firstflexdivthree">
          <h6>Premium</h6>
          <p>$88/month, billed monthly</p>
        </div>
      </div>
      <h5 className="basichead">Basic Management</h5>
      <div class="tablediv">
        <div class="tabledivone">
          <ul>
            <li>Users</li>
            <li>Branches</li>
            <li>Courses</li>
            <li>Max. Students Allowed</li>
            <li>Communication</li>
            <li>Bulk Updates</li>
            <li>User Roles</li>
          </ul>
        </div>
        <div class="tabledivtwo">
          <ul>
            <li>1</li>
            <li>1</li>
            <li>3</li>
            <li>25</li>
            <li>25</li>
            <li>25</li>
            <li>25</li>
          </ul>
          <button>
            Get Started <img src={roghtarroworange} alt="roghtarroworange" />
          </button>
          <p>No credit card required</p>
        </div>
        <div class="tabledivthree">
          <ul>
            <li>15</li>
            <li>10</li>
            <li>15/branch</li>
            <li>500</li>
            <li>yes</li>
            <li>yes</li>
            <li>yes</li>
          </ul>
          <button>
            Get Started <img src={roghtarroworange} alt="roghtarroworange" />
          </button>
          <p>No credit card required</p>
        </div>
      </div>
    </div>
  );
};

export default Flexableplan;
