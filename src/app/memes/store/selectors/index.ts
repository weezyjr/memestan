import { memeAdapter, MemeState } from '../reducers';
import { createFeatureSelector } from '@ngrx/store';
import { STORE_FEATURES } from 'src/Constants';

const selectMemes = createFeatureSelector<MemeState>(STORE_FEATURES.memes);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = memeAdapter.getSelectors<MemeState>((state: MemeState) => selectMemes(state));
