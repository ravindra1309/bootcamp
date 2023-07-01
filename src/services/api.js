import axios from 'axios';

const API_KEY = '2c03b9865da44e918cac890d1c4a7ec0';

export const getNewsByCategory = async (category) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    throw new Error('Failed to fetch news articles');
  }
};

export const searchNews = async (query) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    throw new Error('Failed to search news articles');
  }
};


export const getArticleById = async (id) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch article by ID');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch article by ID');
  }
};
