import { requestToUpdateUser } from './user';

export const CHANGE_EMAIL = 'modules/form/CHANGE_EMAIL';
export const INIT_SOCIAL_SHARING = 'modules/form/INIT_SOCIAL_SHARING';
export const SUBMIT_FORM = 'modules/form/SUBMIT_FORM';

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const initialState = {
  email: {
    value: '',
    isValid: false
  },
  social: {
    shared: false
  },
  submitted: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: {
          value: action.value,
          isValid: action.value.match(emailPattern) !== null
        }
      };
    case INIT_SOCIAL_SHARING:
      return {
        ...state,
        social: {
          shared: action.state || true
        }
      };
    case SUBMIT_FORM:
      return {
        ...state,
        email: {
          ...state.email,
          value: action.email
        },
        submitted: true
      };
    default:
      return state;
  }
}

export const changeEmailAction = value => ({
  type: CHANGE_EMAIL,
  value
});

export const submitForm = (email, userId) => dispatch => {
  dispatch({ type: SUBMIT_FORM, email });
  if (userId) {
    dispatch(requestToUpdateUser(userId));
  }
};

export const initSocialSharing = (state, userId) => dispatch => {
  dispatch({ type: INIT_SOCIAL_SHARING, state });
  if (userId) {
    dispatch(requestToUpdateUser(userId));
  }
};
