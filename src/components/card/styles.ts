import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: solid 1px #007bff;
  color: #007bff;
  padding: 0.625rem 1.25rem;
  border-radius: 4px;
  height: fit-content;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 550px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1200px) {
    max-width: 470px;
  }

  @media (max-width: 992px) {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    width: 100vw;
    max-width: 100%;
  }
`;

export const Content = styled.div`
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #000;
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;

    h3 {
      font-size: 1rem;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 200px;
  }
`;