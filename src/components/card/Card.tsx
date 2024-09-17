import React from 'react';
import { CardProps } from './types';

export default function Card({ children, name, onClick }: CardProps) {
  return (
    <div>
      <p>{name}</p>
      {children}
      <button onClick={onClick}>Pay</button>
    </div>
  );
}
