import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import { useDispatch, useSelector } from 'react-redux';
import { summaryDonations } from '../../helpers';
import Card from '../../components/card';
import PaymentOptions from '../../components/paymentOptions';
import type { Charity, ReduxState } from './types';

const style: React.CSSProperties = {
  color: 'red',
  margin: '1em 0',
  fontWeight: 'bold',
  fontSize: '16px',
  textAlign: 'center',
};

export default function Home() {
  const [charities, setCharities] = useState<Charity[]>([]);
  const [selectedAmount, setSelectedAmount] = useState<number>(10);
  const dispatch = useDispatch();
  const donate = useSelector((state: ReduxState) => state.donate);
  const message = useSelector((state: ReduxState) => state.message);

  const payments = [10, 20, 50, 100, 500];

  useEffect(() => {
    // Fetch charities and set local state
    fetch('http://localhost:3001/charities')
      .then((resp) => resp.json())
      .then((data) => {
        setCharities(data);
      });

    // Fetch payments and dispatch to Redux
    fetch('http://localhost:3001/payments')
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount: summaryDonations(
            data.map((item: { amount: number }) => item.amount)
          ),
        });
      });
  }, []);

  const handlePay = async (id: number, amount: number, currency: string) => {
    // Handle payment logic here
    await fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: JSON.stringify({ charitiesId: id, amount, currency }),
      headers: { 'Content-Type': 'application/json' },
    });
  };
  return (
    <div className="container">
      <h1>Tamboon React</h1>
      <p>All donations: {donate}</p>
      <p style={style}>{message}</p>
      {charities.map((item, i) => (
        <Card
          key={i}
          name={item.name}
          onClick={() => handlePay(item.id, selectedAmount, item.currency)}
        >
          {payments.map((amount, j) => {
            return (
              <PaymentOptions
                key={j}
                amount={amount}
                onClick={() => setSelectedAmount(amount)}
              />
            );
          })}
        </Card>
      ))}
    </div>
  );
}
