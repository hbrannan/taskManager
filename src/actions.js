
var changeTitle = (by) => {
  return { type: 'ADD_CARD', by };
}

var addColumn = (by) => {
  return { type: 'ADD_CARD', by };
}

export function addCard (text, colIdx) {
  return { type: 'ADD_CARD', text, colIdx };
}

export function moveCardLeft (text, cardIdx, colIdx) {
  return { type: 'MOVE_CARD_LEFT', text, cardIdx, colIdx };
}

export function moveCardRight (text, cardIdx, colIdx) {
  return { type: 'MOVE_CARD_RIGHT', text, cardIdx, colIdx };
}

var claimCard = (by) => {
  return { type: 'ADD_CARD', by };
}
