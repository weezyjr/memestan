import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, switchMap, withLatestFrom } from 'rxjs/operators';
import * as fromStore from '../index';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { THEME_DATA_ATTR, THEME_CODE, LANG_CODE } from 'src/Constants';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageHelper } from 'src/app/helpers/localStorage.helper';

@Injectable()
export class SettingsEffects {
  @Effect({ dispatch: false })
  changeTheme$ = this.actions$.pipe(
    ofType(fromStore.changeTheme),
    switchMap((action) =>
      of(action).pipe(withLatestFrom(this.store.select(fromStore.getTheme)))
    ),
    tap(([action, theme]) => {
      document.documentElement.setAttribute(
        THEME_DATA_ATTR,
        THEME_CODE[+theme]
      );
      LocalStorageHelper.setTheme(theme);
    })
  );

  @Effect({ dispatch: false })
  changeLang$ = this.actions$.pipe(
    ofType(fromStore.changeLang),
    switchMap((action) =>
      of(action).pipe(withLatestFrom(this.store.select(fromStore.getLang)))
    ),
    tap(([action, lang]) => {
      this.translateService.use(LANG_CODE[+lang]);
      LocalStorageHelper.setLang(lang);
    })
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromStore.State>,
    private translateService: TranslateService
  ) {}
}
