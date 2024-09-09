import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";

const LostPropertyForm = () => {
  const [formData, setFormData] = useState({
    lostItem: '',
    category: '',
    brand: '',
    primaryColor: '',
    secondaryColor: '',
    dateLost: '',
    timeLost: '',
    image: null,
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, type } = e.target;
    const value = type === 'file' ? e.target.files[0] : e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic to handle the form submission (e.g., API call or further processing)

    console.log('Form Data Submitted:', formData);
  };

  return (
    <div>
        <Header/>
    <div style={{ textAlign: 'center', margin: '20px', color: 'navy' }}>
      <h2 style={{ color: 'navy' }}>SUBMIT FOUND ITEMS</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ width: '48%', marginBottom: '10px' }}>
            <label htmlFor="lostItem" style={{ color: 'navy', display: 'block', marginBottom: '5px' }}>
              What was Lost *
            </label>
            <input
              type="text"
              id="lostItem"
              name="lostItem"
              value={formData.lostItem}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ width: '48%', marginBottom: '10px' }}>
            <label htmlFor="category" style={{ color: 'navy', display: 'block', marginBottom: '5px' }}>
              Category *
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
<div style={{ width: '48%', marginBottom: '10px' }}>
            <label htmlFor="brand" style={{ color: 'navy', display: 'block', marginBottom: '5px' }}>
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ width: '48%', marginBottom: '10px' }}>
            <label htmlFor="primaryColor" style={{ color: 'navy', display: 'block', marginBottom: '5px' }}>
              Primary Color *
            </label>
            <input
              type="text"
              id="primaryColor"
              name="primaryColor"
              value={formData.primaryColor}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ width: '48%', marginBottom: '10px' }}>
            <label htmlFor="secondaryColor" style={{ color: 'navy', display: 'block', marginBottom: '5px' }}>
              Secondary Item Color
            </label>
            <input
              type="text"
              id="secondaryColor"
              name="secondaryColor"
              value={formData.secondaryColor}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ width: '48%', marginBottom: '10px' }}>
            <label htmlFor="dateLost" style={{ color: 'navy', display: 'block', marginBottom: '5px' }}>
              Date Lost *
            </label>
            <input
              type="date"
              id="dateLost"
              name="dateLost"
              value={formData.dateLost}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ width: '48%', marginBottom: '10px' }}>
            <label htmlFor="timeLost" style={{ color: 'navy', display: 'block', marginBottom: '5px' }}>
              Time Lost *
            </label>
            <input
              type="time"
              id="timeLost"
              name="timeLost"
              value={formData.timeLost}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
<div style={{ width: '100%', marginBottom: '10px' }}>
            <label htmlFor="image" style={{ color: 'navy', display: 'block', marginBottom: '5px' }}>
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
            {formData.image && (
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Selected"
                style={{ marginTop: '10px', maxWidth: '100%' }}
              />
            )}
          </div>

          <div style={{ width: '100%', marginBottom: '10px' }}>
            <label htmlFor="additionalInfo" style={{ color: 'navy', display: 'block', marginBottom: '5px' }}>
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows="4"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            ></textarea>
          </div>
        </div>
<button
          type="submit"
          style={{
            backgroundColor: 'orange',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default LostPropertyForm;