import { initialState, InitialState } from './initialState';
import { BoardActions } from './actions';
import { AnyAction } from 'redux';

export const reducer = (state: InitialState = initialState, action: AnyAction) => {
  switch (action.type) {
    case BoardActions.SET_BOARD:
      return { ...state, board: action.payload }
  }

  return state
}