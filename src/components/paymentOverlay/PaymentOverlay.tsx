import { PAYMENT_OPTIONS } from '../../constants';

import React, { useState } from 'react';

import PaymentLabel from '../ui/paymentLabel';
import { CloseButton, OverlayWrapper, PayButton, RadioGroup } from './styles';

import type { PaymentOverlayProps } from './types';

const PaymentOverlay = ({
  charityId,
  currency,
  handlePay,
  onClose,
}: PaymentOverlayProps) => {
  const [selectedAmount, setSelectedAmount] = useState(10);

  function paymentHandler() {
    try {
      handlePay(charityId, currency, selectedAmount);
      onClose();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <OverlayWrapper>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <h3>Select the amount to donate (THB)</h3>
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
};

export default PaymentOverlay;
