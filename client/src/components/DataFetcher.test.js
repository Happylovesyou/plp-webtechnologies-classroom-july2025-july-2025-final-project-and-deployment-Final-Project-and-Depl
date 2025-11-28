import { render, screen } from '@testing-library/react';
import DataFetcher from './DataFetcher';
import axios from 'axios';

jest.mock('axios');

test('displays message fetched from backend', async () => {
  // Mock the API call for DataFetcher
  axios.get.mockResolvedValue({ data: { message: 'Test backend message' } });

  render(<DataFetcher />);

  // Wait for the message to appear
  const messageElement = await screen.findByText(/Test backend message/i);
  expect(messageElement).toBeInTheDocument();
});

test('renders heading correctly', () => {
  render(<DataFetcher />);
  const heading = screen.getByText(/Message from Backend:/i);
  expect(heading).toBeInTheDocument();
});
