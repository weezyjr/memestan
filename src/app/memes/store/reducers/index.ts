import { Meme } from '../../models/meme.model';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ActionReducer, createReducer, Action, on } from '@ngrx/store';
import * as MemesActions from '../actions';

export interface MemeState extends EntityState<Meme> {
  currentMeme: Meme;
  loading: boolean;
  loaded: boolean;
  error: Error;
}

export const memeAdapter: EntityAdapter<Meme> = createEntityAdapter<Meme>();
const initialState = memeAdapter.getInitialState({
  entities: {
    12: {
      id: 12,
      name: 'meme',
    },
  },
  ids: [12],
  loaded: false,
  loading: false,
  currentMeme: null,
  error: null,
});

const featureReducer: ActionReducer<MemeState, Action> = createReducer(
  initialState,
  on(MemesActions.getAllMemes, (state) => ({ ...state })),
  on(MemesActions.getAllMemesSuccess, (state, { payload }) =>
    memeAdapter.setAll(payload, state)
  ),
  on(MemesActions.getAllMemesFail, (state, error) => ({ ...state, error }))
);

export function memesReducers(state: MemeState, action: Action) {
  return featureReducer(state, action);
}
