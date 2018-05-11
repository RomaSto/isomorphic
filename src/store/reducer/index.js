import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

// import { faqReducer } from 'views/website/FAQ/reducer';
import loginReducer from '../../views/Login/reducer';
// import { pinReducer} from 'views/auth/Pin/reducer';
// import { signupReducer} from 'views/onboarding/reducer';
// import { bankReducer } from 'views/onboarding/Bank/reducer';
// import { userReducer } from 'views/dashboard/User/reducer';
// import { loanReducer } from 'views/dashboard/Loans/reducer';

// const initialState = {};
// const appReducer = (state = initialState, action) => {
//   return state;
// };

const rootReducer = combineReducers({
  // form: formReducer,
  loginReducer,
  // pinReducer: pinReducer,
  // signupReducer: signupReducer,
  // faqReducer: faqReducer,
  // bankReducer: bankReducer,
  // userReducer: userReducer,
  // loanReducer: loanReducer,
  // app: appReducer
});

export default rootReducer;
