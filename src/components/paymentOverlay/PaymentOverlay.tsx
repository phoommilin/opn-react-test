import React, { useState } from 'react';

import { PAYMENT_OPTIONS } from '../../constants';

import PaymentLabel from '../ui/paymentLabel';
import { CloseButton, OverlayWrapper, PayButton, RadioGroup } from './styles';

import type { PaymentOverlayProps } from './types';

export default function PaymentOverlay({
  charityId,
  currency,
  handlePay,
  onClose,
}: PaymentOverlayProps) {
  const [selectedAmount, setSelectedAmount] = useState(10);

  function paymentHandler() {
    handlePay(charityId, currency, selectedAmount);
    onClose();
  }

  return (
    <OverlayWrapper>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <h3>Select the amount to donate ({currency})</h3>
      <RadioGroup>
        {PAYMENT_OPTIONS.map((amount, i) => (
          <PaymentLabel
            id={i}
            checked={selectedAmount === amount}
            onClick={() => setSelectedAmount(amount)}
            amount={amount}
          />
        ))}
      </RadioGroup>
      <PayButton onClick={paymentHandler}>Pay</PayButton>
    </OverlayWrapper>
  );
}
