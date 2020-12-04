// write your createStore function here

<<<<<<< HEAD
function createStore(reducer) {
=======
unction createStore(reducer) {
>>>>>>> f75f9294f50d75cb8d81728063441eb50094eb27
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render()
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState
  };

}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

const store = createStore(candyReducer)
store.dispatch({type: '@@INIT'})