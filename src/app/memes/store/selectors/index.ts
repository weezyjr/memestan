import { memeAdapter, State } from '../reducers';
import { createFeatureSelector } from '@ngrx/store';

export const selectMemes = createFeatureSelector<State>('memes');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = memeAdapter.getSelectors<State>((state: State) => selectMemes(state));
