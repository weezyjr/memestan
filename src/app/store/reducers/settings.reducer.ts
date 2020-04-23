import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as actions from '../actions';

export interface SettingsState {
  arabicLanguage: boolean;
  darkTheme: boolean;
}

const initialState: SettingsState = {
  arabicLanguage: false,
  darkTheme: false,
};

const featureReducer: ActionReducer<SettingsState, Action> = createReducer(
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

export function settingsReducers(state: SettingsState, action: Action) {
  return featureReducer(state, action);
}
