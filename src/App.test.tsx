import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import store from "./components/REDUX/state";

test('renders learn react link', () => {
  const { getByText } = render(<App store={store} />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
