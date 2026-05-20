import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './src/components/Nav';
import { test, expect } from '@jest/globals';
import '@testing-library/jest-dom';

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Manage Products/i)).toBeInTheDocument();
  expect(screen.getByText(/Add New Product/i)).toBeInTheDocument();
});
