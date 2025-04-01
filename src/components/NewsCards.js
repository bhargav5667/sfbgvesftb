import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsCards.css';  // Custom CSS file for styling.

const NewsCards = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch news from the Express backend
        const response = await axios.get('https://wwreger.onrender.com/api/news', {
          params: { q: 'financial' },  // Query parameter to filter news
        });

        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="news-container">
      {news.map((article, index) => (
        <div className="news-card" key={index}>
          <img
            src={article.urlToImage || 'https://via.placeholder.com/150'}
            alt={article.title}
            className="news-image"
          />
          <div className="news-content">
            <h3 className="news-title">{article.title}</h3>
            <p className="news-description">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCards;
