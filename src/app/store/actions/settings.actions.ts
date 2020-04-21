import { createAction, props } from '@ngrx/store';
import { Language } from '../../types/settings';

export const changeLang = createAction(
  '[Settings] change language',
  props<{ lang: Language }>()
);

export const changeTheme = createAction(
  '[Settings] change theme'
);
