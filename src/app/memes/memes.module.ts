import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMemes from './store';
import { MemesContainerComponent } from './containers/memes-container/memes-container.component';

@NgModule({
  declarations: [MemesContainerComponent],
  imports: [CommonModule, StoreModule.forFeature('memes', fromMemes.reducers)],
  exports: [MemesContainerComponent],
})
export class MemesModule {}
