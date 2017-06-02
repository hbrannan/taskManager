import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

const defaultColumnData = [
  { title: 'Ideation',
    tasks: ['Come up with an Idea','Chart it out'],
    deletedTaskStack: []
  },
  { title:'TODO',
    tasks:['Formalize Workflow','go to church'],
    deletedTaskStack: []
  },
  { title:'Doing',
    tasks:['Organize Task Manager','Lists Tasks and Etd.'],
    deletedTaskStack: []
  },
  { title:'Done',
    tasks:['eat cheese', 'go to church'],
    deletedTaskStack: []
  }
];

const defaultTitle = 'Organize Your Life';

ReactDOM.render(
  <CookiesProvider>
    <App columns={defaultColumnData} title={defaultTitle}/>
  </CookiesProvider>,

  document.getElementById('root')
);
