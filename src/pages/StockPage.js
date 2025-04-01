import React from "react";
import { useParams } from "react-router-dom";
import StockChart from "../components/StockChart";
import "./StockPage.css"; // Import the CSS file

const StockPage = () => {
  const { symbol } = useParams();

  return (
    <div className="stock-page-container">
      <h1 className="stock-page-title">{symbol} Stock Details</h1>
      <StockChart symbol={symbol} />
    </div>
  );
};

export default StockPage;
