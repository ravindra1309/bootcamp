import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  padding: 1rem;
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;

const Error = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};

export default Error;
