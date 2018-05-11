import {
  ON_DATA,
  ON_LOADING, ON_ERROR,
  // STORE_MOBILE_NUMBER,
  // STORE_MOBILE_NUMBER_WITHOUT_CODE,
  SET_AUTHENTICATED,
} from './types';
// import { verifyAuthentication } from './authService';

const initialState = {
  error: false,
  isLoading: false,
  data: {},
  auth: { isAuthenticated: true }, // verifyAuthentication(),
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case ON_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    case ON_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case ON_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        auth: action.payload.auth,
      };
    default:
      return state;
  }
}

export default loginReducer;

