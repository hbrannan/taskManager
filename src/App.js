import React, { Component } from 'react';
import './App.css';
import './App.less';
import Column from './components/Column';

class App extends Component {
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
          <Column title="TaskList1"/>
        </div>
      </div>
    );
  }
}

export default App;
