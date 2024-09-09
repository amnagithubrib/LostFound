
import React, { useState, useEffect } from 'react';
import { HiArrowSmUp } from 'react-icons/hi';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import Steps from './Steps';
import Services from './Services';
import Report from './Report';

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      const isBelowThreshold = window.scrollY > scrollThreshold;

      setShowScrollTop(isBelowThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollTopButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: '#007bff',
    color: '#FFC800',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: showScrollTop ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  return (
    <div className="App">
      <Header />
      <Slider />
      <Steps />
      <Services />
      <Report />
      <div style={scrollTopButtonStyle} onClick={scrollToTop}>
        <HiArrowSmUp size={24} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;