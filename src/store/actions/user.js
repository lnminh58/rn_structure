import { createActions } from 'redux-actions';
import User from '@/api/User';

const {
  getUserProfileRequest,
  getUserProfileSuccess,
  getUserProfileFail,
} = createActions({
  GET_USER_PROFILE_REQUEST: () => {},
  GET_USER_PROFILE_SUCCESS: data => ({ data }),
  GET_USER_PROFILE_FAIL: error => ({ error }),
});

export const getUserProfile = () => async dispatch => {
  dispatch(getUserProfileRequest());
  try {
    const data = await User.getUserData();
    dispatch(getUserProfileSuccess(data));
  } catch (error) {
    dispatch(getUserProfileFail(error));
  }
};
