import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

const initialData = [
  {title: 'Ideation', tasks: ['eat cheese', 'go to church']},
  {title:'TODO', tasks:['buy lamp', 'orange']},
  {title:'Claimed', tasks:['eat salt', 'catch fish']},
  {title:'Done', tasks:['finish', 'list']}];

ReactDOM.render(
  <CookiesProvider>
    <App initialData={initialData}/>
  </CookiesProvider>,

  document.getElementById('root')
);
