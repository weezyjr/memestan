import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, switchMap, withLatestFrom } from 'rxjs/operators';
import * as fromStore from '../index';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { THEME_DATA_ATTR, THEME_VALUE } from 'src/Constants';

@Injectable()
export class SettingsEffects {
  @Effect({ dispatch: false })
  changeTheme$ = this.actions$.pipe(
    ofType(fromStore.changeTheme),
    switchMap((action) =>
      of(action).pipe(withLatestFrom(this.store.select(fromStore.getTheme)))
    ),
    tap(([action, theme]) =>
      document.documentElement.setAttribute(
        THEME_DATA_ATTR,
        THEME_VALUE[+theme]
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromStore.State>
  ) {}
}
