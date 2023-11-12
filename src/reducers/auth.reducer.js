const SET_USER = 'set_user';
const LOGOUT = 'logout';

const initialState = {
  user: null
};


export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}