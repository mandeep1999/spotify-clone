import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLISTS,
  SET_DISCOVER_WEEKLY,
  SET_ITEM,
} from '../types';

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case SET_ITEM:
      return {
        ...state,
        item: action.item,
      };

    case SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};
