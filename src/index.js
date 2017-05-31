import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const initialData = ['Ideation', 'TODO', 'Claimed', 'Done'];

ReactDOM.render(<App initialData={initialData}/>, document.getElementById('root'));
