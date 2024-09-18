import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Open Sans', sans-serif;
  max-width: 1140px;
  margin: 0 auto;
  box-sizing: border-box;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 0.5rem;
  }

  p.donate {
    font-weight: bold;
    color: #00796b;
  }
`;
