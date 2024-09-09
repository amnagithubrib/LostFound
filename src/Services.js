import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faHotel,
  faSearch,
  faPaw,
  faUniversity,
  faTaxi,
  faUtensils,
  faTree,
  faGlassCheers,
} from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const Industry = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <h1>Industries Serviced</h1>
      <div className="service">
        <Link to="/hotel-service" className="step1">
          <h5>
            <FontAwesomeIcon icon={faHotel} /> Hotel Services
          </h5>
        </Link>

        <Link to="/hotel-service" className="step1">
          <h5>
            <FontAwesomeIcon icon={faPlane} /> Hotel Services
          </h5>
        </Link>

        <Link to="/hotel-service" className="step1">
          <h5>
            <FontAwesomeIcon icon={faSearch} /> Lost and Found
          </h5>
        </Link>

        <Link to="/hotel-service" className="step1">
          <h5>
            <FontAwesomeIcon icon={faGlassCheers} /> Bar Lost
          </h5>
        </Link>

        <Link to="/hotel-service" className="step1">
          <h5>
            <FontAwesomeIcon icon={faTree} /> Restaurant/Park
          </h5>
        </Link>

        <Link to="/hotel-service" className="step1">
          <h5>
            <FontAwesomeIcon icon={faTaxi} /> Taxi Service
          </h5>
        </Link>

        <Link to="/hotel-service" className="step1">
          <h5>
            <FontAwesomeIcon icon={faPaw} /> Animal/Pet Services
          </h5>
        </Link>

        <Link to="/hotel-service" className="step1">
          <h5>
            <FontAwesomeIcon icon={faUniversity} /> College Lost Items
          </h5>
        </Link>

        <Link to="/hotel-service" className="step1">
          <h5>
            <FontAwesomeIcon icon={faUtensils} /> Venue Reservation
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default Industry;