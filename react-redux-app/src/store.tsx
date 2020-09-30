import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IRootState {
  number: number;
}

export default createStore<IRootState, any, any, any>((state, action) => {
  if (state === undefined) {
    return { number: 0 };
  }

  if (action.type === 'INCREMENT') {
    return { ...state, number: state.number + action.size };
  }

  return state;
}, composeWithDevTools());
