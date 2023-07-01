import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Error from '../components/Error';
import { getArticleById } from '../services/api';

const ArticleContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = React.useState(null);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getArticleById(id);
        setArticle(data);
        setError('');
      } catch (error) {
        setError('Failed to fetch article details.');
      }
    };

    fetchArticle();
  }, [id]);

  if (error) {
    return (
      <div>
        <Error message={error} />
      </div>
    );
  }

  return (
    <div>
      {article && (
        <ArticleContainer>
          <Title>{article.title}</Title>
          <p>{article.content}</p>
        </ArticleContainer>
      )}
    </div>
  );
};

export default ArticleDetails;
