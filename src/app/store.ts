import { INCREMENT } from './actions';
import { tassign } from 'tassign';
// tslint:disable-next-line:class-name
export interface iAppState {
  counter: number;
}

export const INITIAL_STATE: iAppState = {
  counter: 0
};

export function rootReducer(state: iAppState, action): iAppState {
  switch (action.type) {
  case INCREMENT:
  return tassign(state, {counter: state.counter + 1});
  }
  return state;
}
