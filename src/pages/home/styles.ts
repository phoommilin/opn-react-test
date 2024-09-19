import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  max-width: 1140px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Header = styled.header`
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  padding: 1rem;
  text-align: center;

  h1 {
    color: #333;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p.donate {
    color: #00796b;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const Paragraph = styled.p`
  height: 18px;
  margin: 0 auto;
  max-width: 450px;
  padding: 0.25rem;
  text-align: center;
  background-color: #f0fff0;
  border: 2px solid lightgreen;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #28a745;
  font-size: 1.125rem;
  line-height: 1;
  font-weight: bold;
  opacity: 0;

  &.show {
    opacity: 1;
    animation: ${fadeIn} 0.8s ease-in-out;
  }
`;

