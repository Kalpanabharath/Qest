import React from "react";
import "./Contactform.css";
import searchicon from "../../assets/searchiconbrown.png";
import whitearrow from "../../assets/whitearrow.png";

const Contactform = () => {
  return (
    <div className="Contactform">
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
      <h5>
        Get in touch with us. <br />
        We're here to assist you.
      </h5>
      <form>
        <div className="formrow">
          <div class="singleinputdiv">
            <label>
              Business Name<span>*</span>
            </label>
            <div class="oneinp">
              <input
                type="text"
                placeholder="Search for your business listing"
              />
              <img src={searchicon} alt="searchicon" className="searchicon" />
            </div>
          </div>
          <div class="singleinputdiv">
            <label>
              Your Name<span>*</span>
            </label>

            <input type="text" placeholder="Enter your name" />
          </div>
        </div>
        <div className="formrow">
          <div class="singleinputdiv">
            <label>
              Phone Number<span>*</span>
            </label>

            <input type="tel" placeholder="Enter your number" />
          </div>
          <div class="placehold">
            <label>
              Email Address<span>*</span>
            </label>

            <input type="email" placeholder="Enter your Email" />
          </div>
        </div>
        <div className="formrow placehold">
          <label>
            Message<span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="Write here your message..."
            required
          ></textarea>
        </div>
        <button>
          Leave us a Message <img src={whitearrow} alt="whitearrow" />
        </button>
      </form>
    </div>
  );
};

export default Contactform;
