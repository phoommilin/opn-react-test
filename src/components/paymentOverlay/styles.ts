import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
`;

export const OverlayWrapper = styled.div`
  animation: ${fadeIn} 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  color: #000;

  h3 {
    margin: 1.5rem 0;
  }
`;

export const PayButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;