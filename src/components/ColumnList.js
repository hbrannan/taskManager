import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column'
// import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

/*
  Can I subscribe a function to state updates? -> update cookie when update state
    - in reducer?
    - in onMount?

    on Initial Load of App, if cookie,
    on state update, trigger cookie update. (on Component did Mount)
     --- thru dispatched action at the same time? If async, ok

*/

  // constructor(props) {
  //   super(props);
  //   const { cookies } = this.props;
  //   // this._clearCookie

  //   this.state = {
  //       'columns': cookies.get('columns') || this.props.columns
  //   };
  // }

  // _clearCookie(name){
  //   const { cookies } = this.props;
  //   cookies.remove(name);
  //}

  // updateCookie (name, updateStringOrObject) {
  //     const { cookies } = this.props;
  //     cookies.remove('columns');
  //     cookies.set(name, updateStringOrObject);
  // }

const ColumnList = ({columns}) => {
      return (
          <ul>
            {
              columns.map((obj, idx, col)=>
                  <Column
                    key={idx}
                    index={idx}
                    title={obj.title}
                    tasks={obj.tasks}
                  />
              )
            }
         </ul>
      );
};

ColumnList.propTypes = {
  columns: PropTypes.array,//.isRequired,
  moveCard: PropTypes.func
};

export default ColumnList;


/*

                    moveCard={moveCard}
                    addCard={addCard}

*/
