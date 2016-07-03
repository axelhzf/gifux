import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk'

const initialState = {
  gifs: {
    
  },
  tabs: {
    active: "search"
  },
  search: {
    query: "",
    isFetching: false,
    data: [],
    error: undefined
  },
  favorites: {
    isFetching: false,
    data: {},
    error: undefined
  },
  notification: {
    visible: false,
    msg: ""
  }
};


let storedState = {};
try {
  storedState = JSON.parse(window.localStorage.getItem("state"));
} catch(e) {
  
}


const store = createStore(
  reducer,
  _.merge(initialState, storedState),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.subscribe(_.throttle(() => {
  const state = store.getState();
  const stateToStore = {
    tabs: state.tabs,
    favorites: {
      data: state.favorites.data
    }
  };
  window.localStorage.setItem("state", JSON.stringify(stateToStore));
}, 1000));

export default store;
