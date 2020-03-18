import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AppActions } from '../actions';
import { UsersMockService } from './../../../users.service';

@Injectable()
export class UsersEffects {

  loadUsers = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadUsers),
      switchMap(() => this.service.getUsers().pipe(
        map(users => AppActions.loadUsersSuceeded({ users })),
      )),
    ),
  );

  loadUsersSucceeded = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadUsersSuceeded),
      tap(({ users }) => {
        this.snackBar.open(`${users.length} utilisateurs chargés !`);
      }),
    ), { dispatch: false },
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.deleteUser),
      delay(2000),
      map(({ name }) => AppActions.deleteUserSucceeded({ name })),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly service: UsersMockService,
    private readonly snackBar: MatSnackBar,
  ) { }
}
