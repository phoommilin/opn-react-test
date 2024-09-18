import styled from "styled-components"

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
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
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
`;

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