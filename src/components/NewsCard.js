import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  margin-bottom: 0.5rem;
`;

const CardLink = styled.a`
  display: block;
  color: #007bff;
  text-decoration: none;
`;

const NewsCard = ({ article }) => {
  const { title, description, urlToImage, publishedAt, url } = article;

  return (
    <CardContainer>
      <CardImage src={urlToImage} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <p>{publishedAt}</p>
      <CardLink href={url} target="_blank">
        Read More
      </CardLink>
    </CardContainer>
  );
};

export default NewsCard;
