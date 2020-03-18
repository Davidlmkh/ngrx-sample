import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppActions } from 'src/app/modules/root-store/actions';
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

  userForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.age$ = this.store.pipe(select(selectCurrentUserAge));
    this.currentUser$ = this.store.pipe(select(selectCurrentUser));

    this.userForm = this.formBuilder.group({
      name: undefined,
    });
  }

  submitForm() {
    const newUserName = this.userForm.value.name;
    this.store.dispatch(AppActions.setCurrentUsername({ newUserName }));
  }

}
