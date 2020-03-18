import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppActions } from 'src/app/modules/root-store/actions';
import { AppState } from 'src/app/modules/root-store/reducers';
import { User } from 'src/app/users.service';
import { selectUsersLoading, selectAllUsers } from './../../../root-store/selectors/current-user.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: 'users-list.component.html',
})

export class UsersListComponent implements OnInit {

  loading$: Observable<boolean>;

  users$: Observable<Array<User>>;

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(selectUsersLoading));
    this.users$ = this.store.pipe(select(selectAllUsers));

    this.store.dispatch(AppActions.loadUsers());
  }

  remove(name: string) {
    this.store.dispatch(AppActions.deleteUser({ name }));
  }
}
