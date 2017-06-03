import React, { Component } from 'react';
import Column from './components/Column';
import { instanceOf } from 'prop-types';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import './App.less';

/*
*
 *   Class - App
*       props, initial state, and methods
 *
*/

class App extends Component {
  constructor(props) {
    super(props);
    const { cookies } = this.props;
    this._clearCookie

    this.state = {
        'columns': cookies.get('columns') || this.props.columns
    };
  }

  _clearCookie(name){
    const { cookies } = this.props;
    cookies.remove(name);
  }

  onAddCard (col) {
    var newInfo = prompt('Please describe task');
    const colIdx = col.props.index;
    let columns = this.state.columns;
    this.state.columns[colIdx].tasks.push(newInfo);

    this.updateCookie('columns', columns);
    this.setState({'columns': columns})
  }

  onMoveCard (card, e) {
    let columns = this.state.columns;
    const text = card.props.text;
    const colIdx = card.props.colIndex;
    const cardIdx = card.props.cardIndex;
    const move = e.target.className;

    columns[colIdx].tasks.splice(cardIdx, 1);
    columns[colIdx].deletedTaskStack.push(text);

    let nextColumn;
    if (move === 'before'){
      nextColumn = colIdx - 1;
    } else {
      nextColumn = colIdx + 1;
    }
    columns[nextColumn].tasks.push(text);

    this.updateCookie('columns', columns);
    this.setState({'columns': columns});
    }

  updateCookie (name, updateStringOrObject) {
      const { cookies } = this.props;
      cookies.remove('columns');
      cookies.set(name, updateStringOrObject);
  }

/*
*
 *   Class - App
*       View
 *
*/

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>{this.props.title}</h2>
        </div>

        <div className="container">
          <div className="container-content">

            <ul>
              {
                this.state.columns.map((obj, idx, col)=>
                  <li key={idx} className="col">
                    <Column
                      index={idx}
                      title={obj.title}
                      tasks={obj.tasks}
                      moveCard={this.onMoveCard.bind(this)}
                      addCard={this.onAddCard.bind(this)}
                    />
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


export default withCookies(App);
