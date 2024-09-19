import fetch from 'isomorphic-fetch';
import { API_URL } from '../constants';

export async function fetchPayments() {
  try {
    const response = await fetch(`${API_URL}/payments`);
    if (!response.ok) {
      throw new Error('Failed to fetch payments');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching payments:', error);
    throw error;
  }
};

export async function postPayment(
  id: number,
  amount: number,
  currency: string
) {
  try {
    const response = await fetch(`${API_URL}/payments`, {
      method: 'POST',
      body: JSON.stringify({ charitiesId: id, amount, currency }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Failed to post payment');
    }
    return await response.json();
  } catch (error) {
    console.error('Error posting payment:', error);
    throw error;
  }
};
