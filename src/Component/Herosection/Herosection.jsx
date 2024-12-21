import React from "react";
import "./Herosection.css";

import tailright from "../../assets/tail-right.png";
import fabbuttion from "../../assets/Fab Button.png";
import Ellipseten from "../../assets/Ellipse 10.png";
import Ellipseleven from "../../assets/Ellipse 11.png";

const Herosection = () => {
  return (
    <div className="Herosection">
      <div className="searchfield">
        <div className="searchtext">
          <p>AI</p>
          <p>
            R<span>Max</span>
          </p>
        </div>
        <input
          type="text"
          placeholder="Curious? Let AI Uncover the Answers!"
          className="herosectioninput"
        />
      </div>
      <div class="heroheading">
        <p>Maximize Your Impact</p>
        <p>
          Business with <span id="BlackR">R</span>
          <span id="darkbrown">Max</span>
        </p>
      </div>
      <p className="enhancepara">
        Enhance your business with Rmax's all-in-one platform—streamlining
        client <br />
        engagement, automating workflows, and fueling growth.
      </p>
      <div className="herobutton">
        <button className="getstarted">
          Get Started <img src={tailright} alt="tailright" />
        </button>
        <button className="bookdemo">Book A Demo</button>
      </div>
      <div class="endbuttiondiv">
        <button>Seemless Onboarding</button>
        <button>Client Engaementent</button>
        <button>Generate Report</button>
        <button>Revenue Growth</button>
      </div>
      <img src={fabbuttion} alt="fabbuttion" className="fabbuttion" />
      <img src={Ellipseten} alt="Ellipseten" className="Ellipseten " />
      <img src={Ellipseleven} alt="Ellipseleven" className="Ellipseleven" />
    </div>
  );
};

export default Herosection;
