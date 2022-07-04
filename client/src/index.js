import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { Provider } from 'react-redux';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Theme from './config/Theme';
import './index.css';

const store = configureStore({ reducer });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
