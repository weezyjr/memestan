import { Component, OnInit } from '@angular/core';
import * as fromMemes from '../../store';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-memes-container',
  templateUrl: 'memes-container.component.html',
})
export class MemesContainerComponent implements OnInit {
  public memes$ = this.store.pipe(select(fromMemes.selectAll));
  constructor(private store: Store<fromMemes.State>) {}
  ngOnInit() {}
}
