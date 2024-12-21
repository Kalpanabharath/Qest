import React from "react";
import "./Whyrmax.css";
import calender from "../../assets/calendar-check-alt.png";
import rightbluearrow from "../../assets/SVG.png";
// import buildpayment from "../../assets/SVG.png";
import paymentig from "../../assets/image.png";
import briefcase from "../../assets/briefcase.png";
import starmagic from "../../assets/star-magic.png";
import endcell from "../../assets/endcell.png";

const Whyrmax = () => {
  return (
    <div className="Whyrmax">
      <h4 className="headingtext">Why Rmax?</h4>
      <p className="headingdiscription">
        Rmax is designed to simplify and transform the way service businesses
        operate. From onboarding, scheduling and billing to client management,
        payments and growth, Rmax integrates everything in one easy-to-use
        platform connecting all the stake holders.
      </p>
      <div class="whygridcontainer">
        <div class="gridcolone">
          <div class="gridcellone">
            <img src={calender} alt="calender" className="gridicon" />
            <h6>Scheduling</h6>
            <p>Manage appointments, classes, and events, workshops with...</p>
            <p className="viewdetail">
              View details <img src={rightbluearrow} alt="rightbluearrow" />
            </p>
          </div>
          <div className="gridcelltwo">
            <img src={paymentig} alt="paymentig" className="paymentigimg" />
            <h6>Billing and Payment</h6>
            <p>
              Streamline invoicing and payments with automated workflows,
              reducing ...
            </p>
            <p className="viewdetail">
              View details <img src={rightbluearrow} alt="rightbluearrow" />
            </p>
          </div>
        </div>
        <div class="gridcoltwo">
          <div class="gridtwocellone">
            <h6>Client Management & CRM</h6>
            <p>
              Keep track of customer data, preferences, and interactions to...
            </p>
            <p className="viewdetail">
              View details <img src={rightbluearrow} alt="rightbluearrow" />
            </p>
          </div>
          <div class="gridtwocelltwo">
            <img src={briefcase} alt="briefcase" className="gridicon" />
            <h6>Marketing & Engagement Tools</h6>
            <p>
              Boost client retention and grow your business with integrated...
            </p>
            <p className="viewdetail">
              View details <img src={rightbluearrow} alt="rightbluearrow" />
            </p>
          </div>
          <div class="gridtwocellthree">
            <h6> Multi-Location Management</h6>
            <p>
              Manage multiple locations with ease, assigning roles and
              permissions...
            </p>
            <p className="viewdetail">
              View details <img src={rightbluearrow} alt="rightbluearrow" />
            </p>
          </div>
        </div>
        <div class="gridcolthree">
          <div class="gridcollthreecellone">
            <img src={starmagic} alt="starmagic" className="gridicon" />
            <h6>AI Powered Insights</h6>
            <p className="viewdetail">
              View details <img src={rightbluearrow} alt="rightbluearrow" />
            </p>
            <p>
              Know exactly what is happening in business and get actionable...
            </p>
          </div>
          <div class="gridcolthreecelltwo">
            <h6>Custom Branded website</h6>
            <p>
              Qest’s Custom Branded Website Builder allows you to create a fully
              personalized...
            </p>
            <p className="viewdetail">
              View details <img src={rightbluearrow} alt="rightbluearrow" />
            </p>
            <img src={endcell} alt="endcell" className="endcellimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyrmax;
