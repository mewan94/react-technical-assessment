import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

afterEach(() => {
  cleanup()
})

test('Should render app component', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
  const AppElement = screen.getByTestId('app-1');
  expect(AppElement).toBeInTheDocument();
})

test('Should render User Form component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const UserFormElement = screen.getByTestId('user-form-1');
  expect(UserFormElement).toBeInTheDocument();
});

test('Should render Header component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const HeaderElement = screen.getByTestId('header-1');
  expect(HeaderElement).toBeInTheDocument();
});
