// src/components/StockMarketDashboard.jsx
import { Search, TrendingUp, BarChart3 } from "lucide-react";
import "../styles.css";

export default function StockMarketDashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="title">Stock Market Dashboard</div>
        <div className="nav">
          <button className="nav-button">
            <Search /> Search Stocks
          </button>
          <button className="nav-button">
            <TrendingUp /> Trending Stocks
          </button>
          <button className="nav-button">
            <BarChart3 /> Analytics
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Search Bar */}
        <div className="search-bar">
          <Search className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search for stocks"
          />
        </div>

        {/* Trending Stocks */}
        <div className="stocks">
          <div className="stocks-title">Trending Stocks</div>
          <div className="stocks-list">
            {/* Stock Cards */}
            <div className="stock-card">
              <div className="stock-info">
                <h3>Apple Inc.</h3>
                <p>Stock Symbol: AAPL</p>
              </div>
              <div className="stock-price">$145.09</div>
              <div className="stock-change stock-change-positive">
                +1.2% (Today)
              </div>
            </div>

            <div className="stock-card">
              <div className="stock-info">
                <h3>Tesla Inc.</h3>
                <p>Stock Symbol: TSLA</p>
              </div>
              <div className="stock-price">$717.55</div>
              <div className="stock-change stock-change-negative">
                -0.5% (Today)
              </div>
            </div>

            <div className="stock-card">
              <div className="stock-info">
                <h3>Microsoft Corp.</h3>
                <p>Stock Symbol: MSFT</p>
              </div>
              <div className="stock-price">$299.79</div>
              <div className="stock-change stock-change-positive">
                +0.8% (Today)
              </div>
            </div>

            <div className="stock-card">
              <div className="stock-info">
                <h3>Amazon.com Inc.</h3>
                <p>Stock Symbol: AMZN</p>
              </div>
              <div className="stock-price">$3,426.12</div>
              <div className="stock-change stock-change-negative">
                -1.2% (Today)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}