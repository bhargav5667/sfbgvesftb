import React, { useEffect, useState } from "react";
import { fetchStockData } from "../services/stockService";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./StockChart.css"; // Import the CSS file

const StockChart = ({ symbol }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getStockData = async () => {
      const stockData = await fetchStockData(symbol);
      setData(stockData.map(d => ({ ...d, datetime: new Date(d.datetime).toLocaleTimeString() })));
    };
    getStockData();
  }, [symbol]);

  return (
    <div className="stock-chart-container">
      <h2 className="stock-chart-title">{symbol} Stock Price</h2>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="datetime" />
            <YAxis domain={["dataMin", "dataMax"]} />
            <Tooltip />
            <Line type="monotone" dataKey="close" stroke="#4CAF50" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockChart;
