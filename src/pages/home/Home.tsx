import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import { fetchCharities, fetchPayments, postPayment } from '../../api';
import { summaryDonations } from '../../helpers';
import {
  removeMessage,
  updateTotalDonate,
  updateMessage,
} from '../../redux/actions';
import Card from '../../components/card';

import { Container, Content, Header, Paragraph } from './styles';
import type { Charity, ReduxState } from './types';
import CountUp from 'react-countup';

export default function Home() {
  const [charities, setCharities] = useState<Charity[]>([]);
  const dispatch = useDispatch();
  const donate = useSelector((state: ReduxState) => state.donate);
  const message = useSelector((state: ReduxState) => state.message);

  const fetchAndUpdatePayments = useCallback(async () => {
    try {
      const data = await fetchPayments();
      const totalDonations = summaryDonations(
        data.map((item: { amount: number }) => item.amount)
      );
      dispatch(updateTotalDonate(totalDonations));
    } catch (error) {
      toast.error('Failed to update donations');
    }
  }, [dispatch]);

  async function getCharities() {
    try {
      const data = await fetchCharities();
      setCharities(data);
    } catch (error) {
      toast.error('Failed to load charities');
    }
  }

  async function handlePay(id: number, currency: string, amount?: number) {
    if (amount) {
      try {
        await postPayment(id, amount, currency);
        fetchAndUpdatePayments();
        const thankYouMessage = `Thank you for donating ${amount} ${currency}`;
        dispatch(updateMessage(thankYouMessage));
        toast(thankYouMessage, {
          icon: '👏',
        });
        setTimeout(() => dispatch(removeMessage()), 4000);
      } catch (error) {
        toast.error('Payment failed. Please try again.');
      }
    }
  }

  useEffect(() => {
    getCharities();
  }, []);

  useEffect(() => {
    fetchAndUpdatePayments();
  }, [fetchPayments]);

  return (
    <Container>
      <Header>
        <h1>Tamboon React</h1>
        <p>All donations: {donate && <CountUp end={donate} duration={2} />}</p>
        <Paragraph className={message ? 'show' : ''}>{message}</Paragraph>
      </Header>
      <Content>
        {charities.map((item, i) => (
          <Card
            key={i}
            id={item.id}
            name={item.name}
            currency={item.currency}
            image={item.image}
            onClick={handlePay}
          />
        ))}
      </Content>
      <Toaster />
    </Container>
  );
}
