import React, { Component } from 'react';
import './App.css';
import './App.less';
import Column from './components/Column';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Reactttt</h2>
        </div>
        <p className="App-intro">
          To get it, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ul>
            {
              this.props.initialData.map((title)=>
                <li key={title}>
                  <Column title={title}/>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
