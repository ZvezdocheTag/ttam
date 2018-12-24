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
    networkName: '',
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
          shared: true
        }
      };
    case SUBMIT_FORM:
      return {
        ...state,
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

export const initSocialSharing = () => ({
  type: INIT_SOCIAL_SHARING
});

export const submitForm = () => ({
  type: SUBMIT_FORM
});
