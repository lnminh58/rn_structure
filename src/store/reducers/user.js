import { handleActions } from 'redux-actions';

const initialState = {
  profile: {
    requesting: false,
    status: '',
    result: null,
    error: null,
  },
};

const counterReducer = handleActions(
  {
    GET_USER_PROFILE_REQUEST: state => ({
      ...state,
      profile: {
        ...state.profile,
        requesting: true,
        status: '',
        result: null,
      },
    }),
    GET_USER_PROFILE_SUCCESS: (state, { payload }) => ({
      ...state,
      profile: {
        ...state.profile,
        requesting: false,
        status: 'success',
        result: payload,
      },
    }),
    GET_USER_PROFILE_FAIL: (state, { payload }) => ({
      ...state,
      profile: {
        ...state.profile,
        requesting: false,
        status: 'error',
        error: payload,
      },
    }),
  },
  initialState,
);

export default counterReducer;
