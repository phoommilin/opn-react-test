import styled from 'styled-components';

export const CustomRadio = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #ccc;
  background-color: #fff;
  display: inline-block;
  position: relative;
  transition: border-color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #007bff;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
`;

export const CheckedRadio = styled(CustomRadio)`
  border-color: #007bff;

  &::after {
    opacity: 1;
  }
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: absolute;
  cursor: pointer;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
`;

export const RadioLabel = styled.label`
  margin-left: 0.5rem;
  font-size: 1rem;
  color: #333;
`;
