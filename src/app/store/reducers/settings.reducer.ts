import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as actions from '../actions';

export interface State {
  arabicLanguage: boolean;
  darkTheme: boolean;
}

export const initialState: State = {
  arabicLanguage: false,
  darkTheme: false,
};

export const featureReducer: ActionReducer<State, Action> = createReducer(
  initialState,
  on(actions.changeLang, (state) => ({
    ...state,
    arabicLanguage: !state.arabicLanguage,
  })),
  on(actions.changeTheme, (state) => ({
    ...state,
    darkTheme: !state.darkTheme,
  }))
);

export function reducers(state: State, action: Action) {
  return featureReducer(state, action);
}
