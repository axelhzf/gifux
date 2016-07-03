import gifs from "../fixtures/gifs";
import _ from "lodash";

export const FETCH_SEARCH_REQUEST = "FETCH_SEARCH_REQUEST";
export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS";
export const FETCH_SEARCH_ERROR = "FETCH_SEARCH_ERROR";

export const fetchSearch = (query) => async (dispatch) => {
  try {
    dispatch({type: FETCH_SEARCH_REQUEST, query});
    
    /*
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`;
    const response = await fetch(url);
    const body = await response.json();
    */
  
    
    await timeout(5000);
    
    const body = gifs;
    
    dispatch({type: FETCH_SEARCH_SUCCESS, data: body})
  } catch(e) {
    dispatch({type: FETCH_SEARCH_ERROR, error: e});
  }
};

const timeout = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

