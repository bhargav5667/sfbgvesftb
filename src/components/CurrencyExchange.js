import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './CurrencyExchange.css';

const CurrencyExchange = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  const apiKey = 'de4c668cb733aee8a2472b64';
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        const rates = response.data.conversion_rates;

        const selectedRates = {
          'USD/INR': rates.INR,
          'EUR/INR': rates.EUR,
          'INR/JPY': 1 / rates.JPY,
          'GBP/INR': rates.GBP,
          'USD/JPY': rates.JPY,
          'EUR/USD': 1 / rates.EUR,
          'GBP/USD': 1 / rates.GBP,
          'AUD/INR': rates.AUD,
          'CAD/INR': rates.CAD,
        };

        setExchangeRate(selectedRates);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const startDragging = (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = slider.scrollLeft;
    };

    const stopDragging = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', startDragging);
    slider.addEventListener('mouseleave', stopDragging);
    slider.addEventListener('mouseup', stopDragging);
    slider.addEventListener('mousemove', move);

    slider.addEventListener('touchstart', startDragging);
    slider.addEventListener('touchend', stopDragging);
    slider.addEventListener('touchmove', move);

    return () => {
      if (!slider) return;

      slider.removeEventListener('mousedown', startDragging);
      slider.removeEventListener('mouseleave', stopDragging);
      slider.removeEventListener('mouseup', stopDragging);
      slider.removeEventListener('mousemove', move);

      slider.removeEventListener('touchstart', startDragging);
      slider.removeEventListener('touchend', stopDragging);
      slider.removeEventListener('touchmove', move);
    };
  }, []);

  if (loading) {
    return <div>Loading exchange rates...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="exchange-container">
      <h2>Currency Exchange Rates</h2>
      <div className="exchange-box" ref={scrollRef}>
        {Object.entries(exchangeRate).map(([pair, rate]) => (
          <div key={pair} className="rate-box">
            <h3>{pair}</h3>
            <p className="rate">{rate.toFixed(4)}</p>
            <p className="percentage">+0.19%</p>
            <p className="change">+0.1634</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyExchange;
