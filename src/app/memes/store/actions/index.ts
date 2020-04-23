import { createAction, props } from '@ngrx/store';
import { Meme } from '../../models/meme.model';
import { IPayload } from 'src/app/models/payload.model';

export const getAllMemes = createAction(
  '[Meme] get all',
);

export const getAllMemesSuccess = createAction(
  '[Meme] get all success',
  props<IPayload<Meme[]>>()
);

export const getAllMemesFail = createAction(
  '[Meme] get all fail',
  props<Error>()
);

export const getMeme = createAction(
  '[Meme] get one',
);

export const getMemeSuccess = createAction(
  '[Meme] get one success',
  props<Meme>()
);

export const getMemeFail = createAction(
  '[Meme] get one fail',
  props<Error>()
);
