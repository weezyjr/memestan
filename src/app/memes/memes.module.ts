import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMemes from './store';
import { MemesContainerComponent } from './containers/memes-container/memes-container.component';
import { STORE_FEATURES } from 'src/Constants';

@NgModule({
  declarations: [MemesContainerComponent],
  imports: [CommonModule, StoreModule.forFeature(STORE_FEATURES.memes, fromMemes.memesReducers)],
  exports: [MemesContainerComponent],
})
export class MemesModule {}
