import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hotel.css";
import Header from "./Header"; // Import your CSS file for styling

const ReportForm = () => {
  const [itemName, setItemName] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have a function to handle the form submission
    // You can replace this with your own logic for handling the form data
    // For example, sending a request to a server or updating state in a parent component

    console.log("Item Name:", itemName);
    console.log("Location:", location);
    console.log("Category:", category);
    console.log("Description:", description);

    // Redirect to the home page or any other page after form submission
    navigate("/");
  };

  return (
    <div>
      <Header/>
    <div className="report-form-container">
      <h2 className="report-form-title">Lost or Found Item</h2>
      <form className="report-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Item Name:
          <input
            className="form-input"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="form-label">
          Location:
          <input
            className="form-input"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="form-label">
          Category:
          <input
            className="form-input"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="form-label">
          Description:
          <textarea
            className="form-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </label>
        <br />
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default ReportForm;