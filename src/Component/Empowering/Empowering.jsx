import React from "react";
import "./Empowering.css";
import sideoneimg from "../../assets/slideoneimg.png";
import sidetwoimg from "../../assets/slidetwoimg.png";
import sidethreeimg from "../../assets/slidethreeimg.png";
import rightarrow from "../../assets/Rightarrow.png";
import leftarrow from "../../assets/Leftarrow.png";

const Empowering = () => {
  return (
    <div className="Empowering">
      <h3 className="headingtext">
        Empowering Service <br /> Providers Across Industries
      </h3>
      <p className="headingdiscription">
        Whether you're in sports, education, wellness, household services, or
        niche markets, our technology <br />
        simplifies your business operations, making it easier for you to focus
        on what you do best.
      </p>
      <div class="empoweringslide">
        <img src={leftarrow} alt="leftarrow" />
        <div class="slidediv">
          <div class="singleslide">
            <img src={sideoneimg} alt="sideoneimg" />
            <h6>Sports</h6>
            <p>
              Track and manage attendance easily. Streamline for accurate,
              <span> Know more...</span>
            </p>
          </div>
          <div class="singleslide">
            <img src={sidetwoimg} alt="sidetwoimg" />
            <h6>Healthcare & Wellness</h6>
            <p>
              Health and wellness service providers—from yoga instructors and
              gyms
              <span> Know more...</span>
            </p>
          </div>
          <div class="singleslide">
            <img src={sidethreeimg} alt="sidethreeimg" />
            <h6>Learning Activites</h6>
            <p>
              Tutors, educators, and learning centers—from music schools to art
              studios
              <span> Know more...</span>
            </p>
          </div>
        </div>
        <img src={rightarrow} alt="rightarrow" />
      </div>
    </div>
  );
};

export default Empowering;
