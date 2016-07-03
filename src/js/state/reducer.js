import update from 'immutability-helper';
import * as actions from "./actions";
import _ from "lodash";

export default function reducer(state, action) {
  
  switch (action.type) {
    case actions.FETCH_SEARCH_REQUEST:
      return update(state, {
        search: {
          $set: {
            query: action.query,
            isFetching: true,
            error: undefined,
            data: []
          }
        }
      });
    
    case actions.FETCH_SEARCH_SUCCESS:
      const gifs = _.map(action.data, (gif) => ({id: gif.id, url: gif.images.fixed_height.url}));
      const gifsById = _.keyBy(gifs, "id");
      const ids = _.keys(gifsById);
      return update(state, {
        search: {
          isFetching: {$set: false},
          data: {$set: ids}
        },
        gifs: {$merge: gifsById}
      });
    
    case actions.FETCH_SEARCH_ERROR:
      return update(state, {
        search: {
          isFetching: {$set: false},
          error: {$set: action.error.message}
        }
      });
    
    case actions.TOGGLE_FAVORITE:
      const id = action.id;
      const isFavorite = state.favorites.data[id];
      return update(state, {
        favorites: {
          data: {
            [id]: {$set: !isFavorite}
          }
        }
      });
    
  }
  
  return state;
}
