import React, { useState, useEffect, useCallback } from 'react';
import fetch from 'isomorphic-fetch';
import { useDispatch, useSelector } from 'react-redux';
import { summaryDonations } from '../../helpers';
import type { Charity, ReduxState } from './types';
import { Container, Content, Header } from './styles';

export default function Home() {
  const [charities, setCharities] = useState<Charity[]>([]);
  const dispatch = useDispatch();
  const donate = useSelector((state: ReduxState) => state.donate);
  const message = useSelector((state: ReduxState) => state.message);

  useEffect(() => {
    fetch('http://localhost:3001/charities')
      .then((resp) => resp.json())
      .then((data) => setCharities(data));
  }, []);

  const fetchPayments = useCallback(() => {
    fetch('http://localhost:3001/payments')
      .then((resp) => resp.json())
      .then((data) => {
        const totalDonations = summaryDonations(
          data.map((item: { amount: number }) => item.amount)
        );
        dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount: totalDonations,
        });
      });
  }, [dispatch]);

  useEffect(() => {
    fetchPayments();
  }, [fetchPayments]);

  const handlePay = async (id: number, currency: string, amount?: number) => {
    if (amount) {
      const response = await fetch('http://localhost:3001/payments', {
        method: 'POST',
        body: JSON.stringify({ charitiesId: id, amount, currency }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        fetchPayments();
      }
    }
  };

  return (
    <Container>
      <Header>
        <h1>Tamboon React</h1>
        <p>All donations: {donate}</p>
        <p
          style={{
            color: 'red',
            margin: '1em 0',
            fontWeight: 'bold',
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          {message}
        </p>
      </Header>
      <Content>
        {charities.map((item, i) => (
          <div>{item.name}</div>
        ))}
      </Content>
    </Container>
  );
}
