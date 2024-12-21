import React from "react";
import "./Contactinfo.css";

const Contactinfo = () => {
  return (
    <div className="Contactinfo">
      <div class="contfirstdivinfo">
        <p>Contact Info</p>
        <h4>
          We are always <br /> happy to assist you
        </h4>
      </div>
      <div class="contactdivgroup">
        <div class="contactdivone">
          <h5>Email Address</h5>
          <h5>___</h5>
          <h5>Support@RMax.com</h5>
          <p>
            Assistance hours: <br />
            Monday - Friday 6 am to 8 pm <br /> EST
          </p>
        </div>
        <div class="contactdivtwo">
          <h5>Contact Number</h5>
          <h5>___</h5>
          <h5>+91-8657491236</h5>
          <p>
            Assistance hours: <br />
            Monday - Friday 6 am to 8 pm <br /> EST
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
