import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import {fetchUsers} from './modules/users/actions';

import './index.css'

const target = document.querySelector('#root');

store.dispatch(fetchUsers());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
);