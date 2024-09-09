import React from 'react';

const itemsArray = [
  {
    item: 'Wallet',
    location: 'H Mart Little Ferry, Bergen Turnpike, Little Ferry, NJ, USA',
    category: 'Personal Accessories',
  },
  {
    item: 'Permanent Resident Card Paolo A Miranda Montecinos',
    location: 'JFK Airport (JFK), Queens, NY, USA',
    category: 'ID',
  },
  {
    item: 'Gift boxs of Cookies',
    location: 'JFK Airport (JFK), Queens, NY, USA',
    category: 'ID',
  },
  {
    item: 'Laptop',
    location: 'Coffee Shop, Main Street, City, Country',
    category: 'Electronics',
  },
  {
    item: 'Gift boxs of Cookies',
    location: 'JFK Airport (JFK), Queens, NY, USA',
    category: 'ID',
  },
  {
    item: 'Permanent Resident Card Paolo A Miranda Montecinos',
    location: 'JFK Airport (JFK), Queens, NY, USA',
    category: 'ID',
  },
  {
    item: 'Sunglasses',
    location: 'Beach, Coastal City, Country',
    category: 'Accessories',
  },
  {
    item: 'Fitness Tracker',
    location: 'Gym, Fitness Street, City, Country',
    category: 'Electronics',
  },
  {
    item: 'Headphones',
    location: 'Public Transport, City, Country',
    category: 'Electronics',
  },
];

const Report = () => {
  return (
    <div style={{ paddingTop: 40 }}>
      <div className="report-container" style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="report-title" style={{ paddingTop: 20, color: 'black' }}>Recent Lost Item Reports</h2>
        <h1 style={{ color: 'white' }}><b>___________</b></h1>
        <p style={{ color: 'white' }}><b>See Below For Recent Lost Item Reports</b></p>
        <div className="item-container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
          {itemsArray.map((item, index) => (
            <div key={index} className="item" style={{ backgroundColor: 'white', padding: 16, borderRadius: 8, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '30%', margin: '0 8px 16px' }}>
              <p className="report-content" style={{ color: '#0c3053' }}>
                <b>Item Lost: {item.item}</b>
                <p>Location: {item.location}</p>
                <p>Category: {item.category}</p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;
