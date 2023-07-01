import React, { useState, useEffect } from 'react';
import { getNewsByCategory, searchNews } from '../services/api';
import NewsCard from '../components/NewsCard';
import Error from '../components/Error';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchNewsByCategory = async (category) => {
    try {
      setLoading(true);
      const data = await getNewsByCategory(category);
      setArticles(data);
      setError('');
    } catch (error) {
      setError('Failed to fetch news articles.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await searchNews(searchQuery);
      setArticles(data);
      setError('');
    } catch (error) {
      setError('Failed to perform search.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsByCategory('general');
  }, []);

  return (
    <div>
      <div>
        <div>
          <button onClick={() => fetchNewsByCategory('general')}>
            General
          </button>
          <button onClick={() => fetchNewsByCategory('business')}>
            Business
          </button>
          <button onClick={() => fetchNewsByCategory('sports')}>
            Sports
          </button>
          <button onClick={() => fetchNewsByCategory('technology')}>
            Technology
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {loading && <LoadingSpinner />}
        {error && <Error message={error} />}
        {!loading && !error && (
          <div>
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))
            ) : (
              <p>No articles to display.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;