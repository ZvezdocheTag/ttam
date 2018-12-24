import axios from 'axios';

export const CREATE_USER_REQUEST = 'modules/user/CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'modules/user/CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'modules/user/CREATE_USER_FAILURE';

const initialState = {
  loading: false,
  user: null,
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
        user: action.value,
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

export const fetchUser = id => {
  return dispatch => {
    dispatch(createUserRequestAction());
    axios
      .get(`/api/user/${id}`)
      .then(res => {
        if (res.status === 201) {
          dispatch(createUserSuccessAction(res.data[0]));
        }
      })
      .catch(e => dispatch(createUserFailAction()));
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
