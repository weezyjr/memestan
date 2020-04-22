import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss'],
})
export class AppSettingsComponent {
  public lang$ = this.store.select(fromStore.getLang);
  constructor(private store: Store<fromStore.State>) {}
  changeTheme() {
    this.store.dispatch(fromStore.changeTheme());
  }
  changeLang() {
    this.store.dispatch(fromStore.changeLang());
  }
}
