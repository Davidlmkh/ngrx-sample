import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/modules/root-store/reducers';
import { CurrentUserState } from 'src/app/modules/root-store/reducers/current-user.reducers';
import { selectCurrentUser } from 'src/app/modules/root-store/selectors/current-user.selectors';
import { selectCurrentUserAge } from './../../../root-store/selectors/current-user.selectors';

@Component({
  templateUrl: 'user-detail.component.html',
})
export class UserDetailComponent implements OnInit {

  currentUser$: Observable<CurrentUserState>;

  age$: Observable<number>;

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.age$ = this.store.pipe(select(selectCurrentUserAge));
    this.currentUser$ = this.store.pipe(select(selectCurrentUser));
  }

}
