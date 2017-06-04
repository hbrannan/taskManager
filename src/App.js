import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import './App.less';
import BoardTitle from './containers/BoardTitle';
import ColumnContainer from './containers/ColumnContainer';

class App extends Component {

  render() {
    return (
      <div className="app">
        <BoardTitle />
        <div className="container">
          <div className="container-content">
            <ColumnContainer />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
