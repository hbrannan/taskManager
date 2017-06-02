import React, { Component } from 'react';
import Column from './components/Column';
import { instanceOf } from 'prop-types';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import './App.less';

class App extends Component {
  constructor(props) {
    super(props);

  /*If cookies are storing a previous state, utilize cookie-state. Else, provide default*/
    // const { cookies } = this.props;
    // cookies.remove('columns')

    // const preExistingCookies = cookies.get('columns');
    const defaultCols = this.props.columns;

    // if (preExistingCookies){
    //   console.log('cookies already exist', preExistingCookies)
    //   this.state = {
    //     'columns': preExistingCookies
    //   };
    // } else {
      this.state = {
        'columns': defaultCols
      }
      // console.log('setting cookies', defaultCols)
      // cookies.set('columns', this.state.columns);
    // }

    // console.log('state', this.state.columns)
  }

  onAddCard (col) {
    var newInfo = prompt('Please describe task');
    const colIdx = col.props.index;
    let columns = this.state.columns;
    this.state.columns[colIdx].tasks.push(newInfo);
    this.setState({'columns': columns})

    this.updateCookie('columns', columns);
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
    this.setState({'columns': columns});

    this.updateCookie('columns', columns);
  }

  updateCookie (name, updateStringOrObject) {
    console.log(name, updateStringOrObject)
  }

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
                this.props.columns.map((obj, idx, col)=>
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
