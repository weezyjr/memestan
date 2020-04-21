import { Language } from '../../types/settings';
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as actions from '../actions';

export interface State {
  lang: Language;
  theme: boolean;
}

export const initialState: State = {
  lang: 'en',
  theme: false,
};

export const featureReducer: ActionReducer<State, Action> = createReducer(
  initialState,
  on(actions.changeLang, (state, { lang }) => ({ ...state, lang })),
  on(actions.changeTheme, state => ({ ...state, theme: !state.theme }))
);

export function reducers(state: State, action: Action) {
  return featureReducer(state, action);
}
