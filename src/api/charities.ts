import fetch from 'isomorphic-fetch';
import { API_URL } from '../constants';

export async function fetchCharities() {
  try {
    const response = await fetch(`${API_URL}/charities`);
    if (!response.ok) {
      throw new Error('Failed to fetch charities');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching charities:', error);
    throw error;
  }
};