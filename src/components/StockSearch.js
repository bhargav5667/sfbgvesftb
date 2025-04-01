import React, { useState } from "react";
import axios from "axios";
import "./StockSearch.css"; // Import the CSS file

const StockSearch = () => {
  const [stockSymbol, setStockSymbol] = useState(""); // Stock symbol input
  const [stockData, setStockData] = useState(null);  // To store the stock data
  const [error, setError] = useState("");           // Error message

  // Function to fetch stock data from API
  const fetchStockData = async (symbol) => {
    const apiKey = "ce0046c9867f411a94d0be527b1eb933"; // Your API key
    try {
      const response = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&apikey=${apiKey}`
      );
      if (response.data.status === "ok") {
        setStockData(response.data.values); // Set stock data to state
        setError("");  // Clear any previous error messages
      } else {
        setStockData(null); // If no data, set to null
        setError("Stock symbol not found or invalid API key.");
      }
    } catch (err) {
      setStockData(null);
      setError("Error fetching data.");
    }
  };

  // Handle form submission (stock symbol search)
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchStockData(stockSymbol); // Call function to fetch stock data
  };

  return (
    <div className="stock-search">
      <h2>Search for Stock</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}
          placeholder="Enter stock symbol (e.g., GOOGL)"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      {stockData && (
        <div className="stock-data">
          <h3>Stock Data for {stockSymbol.toUpperCase()}</h3>
          <table>
            <thead>
              <tr>
                <th>Datetime</th>
                <th>Open</th>
                <th>Close</th>
                <th>High</th>
                <th>Low</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((item, index) => (
                <tr key={index}>
                  <td>{item.datetime}</td>
                  <td>{item.open}</td>
                  <td>{item.close}</td>
                  <td>{item.high}</td>
                  <td>{item.low}</td>
                  <td>{item.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StockSearch;
