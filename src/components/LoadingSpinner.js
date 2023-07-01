import React from 'react';
import styled from 'styled-components';
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const LoadingSpinner = () => {
  return (
    <div>
      
      <SpinnerContainer>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </SpinnerContainer>
    </div>
    
  );
};

export default LoadingSpinner;
