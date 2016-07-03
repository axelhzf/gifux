import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk'

const initialState = {
  gifs: {},
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

export default store;
