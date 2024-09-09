import React, { useState, useEffect } from 'react';
import './slider.css'; 
import slid1 from "./imgs/slid1.webp";
import slid2 from "./imgs/slid2.webp";
import slid3 from "./imgs/slid3.png";

const LostAndFoundForm = () => {
  const [itemType, setItemType] = useState('');
  const [location, setLocation] = useState('');

  const handleLostSubmit = () => {
    // Handle lost item submission logic
    console.log('Lost Item Submitted:', { itemType, location });
  };

  const handleFoundSubmit = () => {
    // Handle found item submission logic
    console.log('Found Item Submitted:', { itemType, location });
  };

  // Mock data for looping cards
  const loopingCardsData = [
    { 
      img: slid1, 
      text: <p><strong>Lost wallet near Islamabad.</strong> Contains essential cards and IDs. Reward offered. Please contact on my this number (03468847915). <span style={{ color: '#FFD700' }}>#LostWallet #Reward</span></p>
    },
    { 
      img: slid2, 
      text: <p><strong>Lost passport at Serena</strong> on [11/12/2023]. If found, please return to the hotel front desk or contact(03445852734). Reward offered. <span style={{ color: '#FFD700' }}>#LostPassport #Reward</span></p>
    },
    { 
      img: slid3, 
      text: <p><strong>Losing everything, like a wallet or passport, can be incredibly stressful, leaving people feeling vulnerable and anxious. Reward offered. <span style={{ color: '#FFD700' }}>#Losteverything #Reward</span></strong></p>
    },
    // Add more cards as needed
  ];
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Function to handle card animation and looping
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % loopingCardsData.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [currentCardIndex, loopingCardsData.length]);

  return (
    <div className="lost-and-found-container">
      <div className="form-content">
        <h1>Online Lost and Found</h1>
        <h3>Locate lost or found items!</h3>
        <h6>Our Online Lost & Found can Help you Find what you are Looking For</h6>
        <p>What was Lost or Found (Dog, Jacket, Smartphone, Wallet, etc.) This field may auto-populate</p>
        <label>
          <input
            type="text"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            placeholder="Enter the lost item"
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', fontSize: '16px' }}
          />
        </label>
<br />
        <label>
          Where Lost or Found
          <p>Please provide an approximate location of the lost property (Bar, Restaurant, Park, etc.)</p>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', fontSize: '16px' }}
          >
            <option value="" disabled>Select</option>
            <option value="taxi">Taxi</option>
            <option value="bar">Bar</option>
            <option value="restaurant">Restaurant</option>
            <option value="hotel">Hotel</option>
            <option value="airport">Airport</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <br />
        <button className="submit-button lost" onClick={handleLostSubmit}>Submit Lost Item</button>
        <button className="submit-button found" onClick={handleFoundSubmit}>Submit Found Item</button>
      </div>
      <div className="card-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Add your card content on the right side */}
        <div className="card">
        <img src={loopingCardsData[currentCardIndex].img} alt={`Card ${currentCardIndex + 1}`} />
          <p>{loopingCardsData[currentCardIndex].text}</p>
        </div>
      </div>
    </div>
  );
};

export default LostAndFoundForm;