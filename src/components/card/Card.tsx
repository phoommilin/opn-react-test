import React, { useState } from 'react';

import { Button, CardWrapper, Content, Image } from './styles';
import PaymentOverlay from '../paymentOverlay';
import type { CardProps } from './types';

export default function Card({
  id,
  currency,
  image,
  name,
  onClick,
}: CardProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <CardWrapper>
      {image && <Image src={`/images/${image}`} alt={name} />}
      <Content>
        <h3>{name}</h3>
        <Button onClick={() => setShowOverlay(true)}>Donate</Button>
      </Content>

      {showOverlay && (
        <PaymentOverlay
          charityId={id}
          currency={currency}
          handlePay={onClick}
          onClose={() => setShowOverlay(false)}
        />
      )}
    </CardWrapper>
  );
}
