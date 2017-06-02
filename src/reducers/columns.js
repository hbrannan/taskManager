/*  Column State

Arr[Obj]
    title : string
    tasks: Array[Obj]
TODO:
  If/ when increasing complexity, be mindful to normalize:
  http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html
*/

const col0 = {
  idx: 0,
  title: 'Ideation',
  tasks: ['Come up with an Idea','Chart it out'],
};

const col1 = {
  idx: 1,
  title:'TODO',
  tasks:['Formalize Workflow','go to church'],
};

const col2 = {
  idx: 2,
  title:'Doing',
  tasks:['Organize Task Manager','Lists Tasks and Etd.'],
};

const col3 = {
  idx: 3,
  title:'Done',
  tasks:['eat cheese', 'go to church'],
};

const initialColumns = [ col0, col1, col2, col3 ];


/* Actions
  ADD_CARD : { type: 'ADD_CARD', text, colIdx };
  MOVE_CARD_LEFT,
  MOVE_CARD_RIGHT: { type: 'MOVE_CARD_LEFT/RIGHT', text, cardIdx, colIdx };;

  Arr[Obj]
    title : string
    tasks: Array[Obj]
*/

const columns = (state=initialColumns, action) => {
  switch (action.type){

    case 'ADD_CARD' :
      return state.reduce((arr, col, idx) => {
        if (col.idx === action.colIdx){
          col.tasks.push(action.text);
        }
        arr.push(col);
        return arr;
      }, []);

    case 'MOVE_CARD_LEFT' :
      return  state.reduce((arr, col, idx) => {
        //Push task onto 1-less col
        if (col.idx === action.colIdx - 1){
          col.tasks.push(action.text);
        //Skip re-rendering the card onto it orig. col
        } else if (col.idx === action.colIdx){
          col.tasks = col.tasks.reduce((arr, card, idx)=>{
            if(idx === action.cardIdx){
              return arr;
            }
            arr.push(card);
            return arr;
          }, []);
        }
        //Copy and return
        arr.push(col);
        return arr;
      }, []);

    case 'MOVE_CARD_RIGHT' :
      return  state.reduce((arr, col, idx) => {
        //Skip re-rendering the card onto it orig. col
        if (col.idx === action.colIdx){
          col.tasks = col.tasks.reduce((arr, card, idx)=>{
            if(idx === action.cardIdx){
              return arr;
            }
            arr.push(card);
            return arr;
          }, []);
        //Push task onto the next col
        } else if (col.idx === action.colIdx + 1){
          col.tasks.push(action.text);
        }
        //Copy and return
        arr.push(col);
        return arr;
      }, []);
    default :
      return state;
  }
}

export default columns;

/*
    case: 'MOVE_CARD_LEFT' :
      let newState = state.reduce((arr, col, idx) => {
        // if this is the card IN the col, just return the arr
        // if this is the next col, push it on
          arr.push(col);
          return arr;
        }, []);
      return newState;

    case: 'MOVE_CARD_RIGHT' :
      return state;
*/
