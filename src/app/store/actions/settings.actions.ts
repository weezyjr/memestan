import { createAction, props } from '@ngrx/store';

export const changeLang = createAction(
  '[Settings] change language',
);

export const changeTheme = createAction(
  '[Settings] change theme'
);
