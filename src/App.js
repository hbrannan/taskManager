import React, { Component } from 'react';
import './App.css';
import './App.less';
import Column from './components/Column';
import { instanceOf } from 'prop-types';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { cookies } = this.props;
    // cookies.remove('columns')

    this.state = {
      columns: cookies.get('columns') || this.props.columns
    };

  }

  onMoveCard (card, e) {

    let columns = this.state.columns;
    const move = e.target.className;
    const text = card.props.text;
    const colIdx = card.props.colIndex;
    const cardIdx = card.props.cardIndex;

    delete columns[colIdx].tasks[cardIdx];
    columns[colIdx].deletedTaskStack.push(text);

    let nextColumn;
    if (move === 'before'){
      nextColumn = colIdx - 1;
    } else {
      nextColumn = colIdx + 1;
    }
    columns[nextColumn].tasks.push(text);
    this.setState({'columns': columns});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>

        <div className="container">
          <div className="container-content">
            <p className="App-intro">
              To get it, edit <code>src/App.js</code> and save to reload.
            </p>
            <ul>
              {
                this.props.columns.map((obj, idx, col)=>
                  <li key={idx} className="col">
                    <Column index={idx} title={obj.title} tasks={obj.tasks} moveCard={this.onMoveCard.bind(this)}/>
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
