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
    data: {"fIENURRmYtunu": true},
    error: undefined
  },
  notification: {
    visible: false,
    msg: ""
  }
};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.subscribe(() => {
  console.log("change state", store.getState())
});

export default store;
