import { createSelector } from '@ngrx/store';
import * as fromStore from '../reducers';
import * as fromSetting from '../reducers/settings.reducer';

export const selectSettingsFeature = (state: fromStore.State) =>
  state.settings;

export const getLang = createSelector(
  selectSettingsFeature,
  (state: fromSetting.SettingsState) => state.arabicLanguage
);

export const getTheme = createSelector(
  selectSettingsFeature,
  (state: fromSetting.SettingsState) => state.darkTheme
);
