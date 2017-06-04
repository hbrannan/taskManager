import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import combinedReducer from './reducers/reducerCombiner'
import App from './App';


let store = createStore(combinedReducer);

ReactDOM.render(

  <Provider store={ store }>
    <CookiesProvider>
      <App/>
    </CookiesProvider>
  </Provider>,

  document.getElementById('root')
);
