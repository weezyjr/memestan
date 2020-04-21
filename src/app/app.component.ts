import { Component } from '@angular/core';
import * as fromStore from './store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public theme$ = this.store.select(fromStore.getTheme);
  constructor(private store: Store<fromStore.State>) {}
  changeTheme() {
    this.store.dispatch(fromStore.changeTheme());
  }
}
