import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { LocalStorageHelper } from '../helpers/localStorage.helper';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class SettingsGuard implements CanActivate {
  constructor(private store: Store<fromStore.State>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const lang = LocalStorageHelper.getLang();
      if (lang) {
        this.store.dispatch(fromStore.changeLang());
      }

      const theme = LocalStorageHelper.getTheme();
      if (theme) {
        this.store.dispatch(fromStore.changeTheme());
      }
      console.log(lang, theme);

      return true;
    } catch (err) {
      return false;
    }
  }
}
