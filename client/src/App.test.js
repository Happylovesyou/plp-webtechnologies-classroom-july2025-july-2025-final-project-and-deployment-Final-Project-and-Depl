// client/src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';

// Mock axios to prevent real HTTP requests
jest.mock('axios');

test('renders message from backend heading', async () => {
  // Mock the API response
  axios.get.mockResolvedValue({ data: { message: 'Hello from backend' } });

  render(<App />);

  // Wait for the backend message to appear
  const messageElement = await screen.findByText(/Hello from backend/i);
  expect(messageElement).toBeInTheDocument();
});

test('renders the app without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});



