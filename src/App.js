import React, { Component } from 'react';
import './App.css';
import './App.less';
import Column from './components/Column';
import { instanceOf } from 'prop-types';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

class App extends Component {

  componentWillMount() {
    const { cookies } = this.props;

    this.state = {
      name: cookies.get('columns') || ['Ideation', 'TODO', 'Claimed', 'Done']
    };
    console.log(this.state.name)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Reactttt</h2>
        </div>

        <div className="container">
          <div className="container-content">
            <p className="App-intro">
              To get it, edit <code>src/App.js</code> and save to reload.
            </p>
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

      </div>
    );
  }
}

App.propTypes = {
  cookies: instanceOf(Cookies).isRequired
}

export default withCookies(App);
