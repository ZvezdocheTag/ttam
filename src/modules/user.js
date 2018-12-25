import axios from 'axios';
import { initSocialSharing, submitForm } from './form';

export const CREATE_USER_REQUEST = 'modules/user/CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'modules/user/CREATE_USER_SUCCESS';
export const UPDATE_USER = 'modules/user/UPDATE_USER';
export const CREATE_USER_FAILURE = 'modules/user/CREATE_USER_FAILURE';

const initialState = {
  loading: false,
  data: null,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        data: action.value,
        loading: false
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: false
      };
    default:
      return state;
  }
}

const updateUser = data => dispatch => {
  dispatch(createUserSuccessAction(data));
  dispatch(initSocialSharing(data.shared));
  if (data.email !== null) {
    dispatch(submitForm(data.email));
  }
};

export const requestToUpdateUser = id => {
  return (dispatch, getState) => {
    const {
      form: { email, social }
    } = getState();
    const data = {
      shared: social.shared,
      email: email.isValid ? email.value : null
    };

    dispatch(createUserRequestAction());
    axios.put(`/api/user/${id}`, data).then(res => {
      console.log(res);
    });
  };
};

export const fetchUser = id => {
  return dispatch => {
    dispatch(createUserRequestAction());
    axios
      .get(`/api/user/${id}`)
      .then(res => {
        if (res.status === 200) {
          console.log(res.data[0]);
          dispatch(updateUser(res.data[0]));
        }
      })
      .catch(() => dispatch(createUserFailAction()));
  };
};

export const createNewUser = id => {
  return dispatch => {
    const initialData = {
      email: null,
      shared: false,
      user_id: id
    };
    dispatch(createUserRequestAction());

    axios
      .post('/api/user', initialData)
      .then(res => {
        if (res.status === 201) {
          dispatch(createUserSuccessAction(initialData));
        }
      })
      .catch(e => dispatch(createUserFailAction()));
  };
};

export const createUserSuccessAction = value => ({
  type: CREATE_USER_SUCCESS,
  value
});

export const createUserRequestAction = () => ({
  type: CREATE_USER_REQUEST
});

export const createUserFailAction = () => ({
  type: CREATE_USER_FAILURE
});
