import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

const initialData = ['Ideation', 'TODO', 'Claimed', 'Done'];

ReactDOM.render(
  <CookiesProvider>
    <App initialData={initialData}/>
  </CookiesProvider>,

  document.getElementById('root')
);
