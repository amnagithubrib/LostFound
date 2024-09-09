import React from "react";
import { TiTick } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Steps.css";

const services = [
 

];

const Step = () => {
  return (
    <div className="lost-found-form">
      <h2 className="heading">Step-By-Step Process</h2>

      <div className="step">
        <h4 className="heading" >
          <TiTick className="tick-icon" />
          Enter lost or found item details
        </h4>
      </div>

      <div className="step">
        <h4 className="heading">
          <TiTick className="tick-icon" />
          Review details and submit
        </h4>
      </div>

      <div className="step">
        <h4 className="heading1">
          <TiTick className="tick-icon" />
          Receive an email with login information
        </h4>
        {/* Display login information */}
      </div>

      <div className="step">
        <h4 className="heading">
          <TiTick className="tick-icon" />
          Print fliers within the dashboard
        </h4>
        {/* Display dashboard and print fliers button */}
      </div>

      <div className="step">
        <h4 className="heading">
          <TiTick className="tick-icon" />
          Receive real-time notifications
        </h4>
      </div>

      {/* FontAwesome services */}
      {services.map((service, index) => (
        <div key={index} className="step">
          <h4>
            <FontAwesomeIcon icon={service.icon} /> {service.name}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Step;