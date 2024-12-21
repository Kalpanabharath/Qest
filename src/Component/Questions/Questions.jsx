import React from "react";
import "./Questions.css";
import search from "../../assets/search.png";
import toparrow from "../../assets/toparrow.png";
import rightblack from "../../assets/righrblackarrow.png";

const Questions = () => {
  return (
    <div className="questions">
      <h4 className="headingtext">Frequently Asked Questions</h4>
      <p className="headingdiscription">
        Find answers to common questions about our services and features. <br />
        For more details, contact our support team.
      </p>
      <div class="searchbox">
        <input
          type="text"
          placeholder="Ask Q! e.g Tell me about key Features."
        />
        <img src={search} alt="questionsearch" />
      </div>
      <div class="whatrmax">
        <div class="qeslogo">
          <h4 className="qes">What is RMax?</h4>
          <img src={toparrow} alt="toparrow" />
        </div>
        <p>
          Qest, is a SaaS platform/ecosystem that lets any small to medium
          service business setup & manage their business quickly & easily.
        </p>
      </div>
      <div class="howdoes">
        <h4 className="qes">How does it work?</h4>
        <img src={rightblack} alt="rightblack" />
      </div>
      <div class="howmuch">
        <h4 className="qes">How much does it cost?</h4>
        <img src={rightblack} alt="rightblack" />
      </div>
      <p className="qeslastpara">
        Haven’t got your answer? <span>Contact our support now</span>
      </p>
    </div>
  );
};

export default Questions;
