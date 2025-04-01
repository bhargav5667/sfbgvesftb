import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";  // Import the Navbar component
import StockSearch from "./components/StockSearch";
import StockList from "./components/StockList";
import StockPage from "./pages/StockPage";
import Footer from './components/Footer'; 
import NewsCards from './components/NewsCards'; 
import './App.css';
import Home from "./pages/Home";  // ✅ Import Home.js
function App() {
  return (
    <div>
      <Router>
        <Navbar /> {/* Add the Navbar here */}

        <Routes>
   
          <Route path="/" element={<StockList />} />
          <Route path="/stock/:symbol" element={<StockPage />} />
          <Route path="/search" element={<StockSearch />} />
        </Routes>

        {/* Financial News section */}
        <div className="App">
          <h1>Latest Financial News</h1>
          <div className="news-cards-container">
            <NewsCards />
          </div>
        </div>

        <Footer /> {/* Add the Footer here */}
      </Router>
    </div>
  );
}

export default App;
