import { handleActions } from 'redux-actions';

const initialState = {
  counter: 0,
};

const counterReducer = handleActions(
  {
    INCREASE_COUNTER: (state, { payload }) => ({
      ...state,
      counter: state.counter + payload,
    }),
    DECREASE_COUNTER: (state, { payload }) => ({
      ...state,
      counter: state.counter - payload,
    }),
  },
  initialState,
);

export default counterReducer;
