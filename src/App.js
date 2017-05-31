import React, { Component } from 'react';
import './App.css';
import './App.less';
import Column from './components/Column';
import { instanceOf } from 'prop-types';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

class App extends Component {
  constructor(props) {
    super(props);

    const { cookies } = this.props;

    if (cookies.get('columns') === undefined) {
      cookies.set('columns', this.props.initialData, { path: '/' })
    }

    this.state = {
      columns: cookies.get('columns')
    };
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
              this.state.columns.map((title)=>
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

App.propTypes = {
  cookies: instanceOf(Cookies).isRequired
}

export default withCookies(App);
