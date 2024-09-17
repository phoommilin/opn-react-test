import React from 'react';
import { PaymentOptionProps } from './types';

export default function PaymentOptions({
  amount,
  onClick,
}: PaymentOptionProps) {
  return (
    <label>
      <input type="radio" name="payment" onClick={onClick} />
      {amount}
    </label>
  );
}
