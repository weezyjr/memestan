import { Component } from '@angular/core';
import * as fromStore from './store';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public lang$ = this.store.select(fromStore.getLang);
  constructor(
    private store: Store<fromStore.State>,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }
  changeTheme() {
    this.store.dispatch(fromStore.changeTheme());
  }
  changeLang() {
    this.store.dispatch(fromStore.changeLang());
  }
}
