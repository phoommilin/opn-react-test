import styled from 'styled-components';

export const OverlayWrapper = styled.div`
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

export const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 2rem;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2.5rem;
  cursor: pointer;
`;

export const PayButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;