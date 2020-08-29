export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    'BQAmQ3tKDz8xE9XYYu0K0DRyIfpoxnIMxYzb3yjLWU7sXeH9PYbTZvdO1FUuSFA9-OhGLBEXJ_0XfHnta9eGdB4uLSCwaXI4jKv4Ce4ZlMaFo5-d7DSjwIMDZ4VnFp6S9uZOj8umvIXxYBjmBgF1dk3ec5maPjTrcMSfQ3TCwABMoO8C',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
