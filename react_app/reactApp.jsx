
import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}
let store = createStore(counterReducer)
function reactApp() {
  const greeting = 'Hello Function Component!';
  return (< Provider store={store}><h1>{greeting}</h1></Provider>);
}

export default reactApp;