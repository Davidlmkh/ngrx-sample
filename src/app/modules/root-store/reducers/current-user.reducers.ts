import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { AppActions } from 'src/app/modules/root-store/actions';
import { User } from 'src/app/users.service';
import { AppActionsUnion } from './../actions/app.actions';

export interface CurrentUserState extends EntityState<User> {
  username: string;
  birthDate: Date;
  admin: boolean;
  location: {
    city: string;
    country: string;
  };
  usersLoading: boolean;
}

export const adapter = createEntityAdapter<User>({
  selectId: u => u.name,
});

const initialState: CurrentUserState = adapter.getInitialState({
  admin: false,
  birthDate: new Date('1993-01-01'),
  username: 'Toto',
  location: {
    city: 'Lyon',
    country: 'France',
  },
  usersLoading: false,
});

const reducer = createReducer(
  initialState,
  on(
    AppActions.loadUsers,
    state => ({
      ...state,
      usersLoading: true,
    }),
  ),
  on(
    AppActions.loadUsersSuceeded,
    (state, { users }) => adapter.setAll(users, {
      ...state,
      usersLoading: false,
    }),
  ),
  on(
    AppActions.deleteUser,
    state => ({
      ...state,
      usersLoading: true,
    }),
  ),
  on(
    AppActions.deleteUserSucceeded,
    (state, { name }) => adapter.removeOne(name, {
      ...state,
      usersLoading: false,
    }),
  ),
  on(
    AppActions.setCurrentUserAdmin,
    state => ({ // literal return
      ...state,
      admin: true,
    }),
  ),
  on(
    AppActions.setCurrentUserNonAdmin,
    state => {
      return {
        ...state,
        admin: false,
      };
    },
  ),
  on(
    AppActions.setCurrentUserLocation,
    (state, { location }) => ({ // destructuration !
      ...state,
      location,
    }),
  ),
  on(
    AppActions.setCurrentUsername,
    (state, action) => ({ // not destructured
      ...state,
      username: action.newUserName,
    }),
  ),
);

export const currentUserReducer = (
  state: CurrentUserState,
  action: AppActionsUnion,
): CurrentUserState => {
  return reducer(state, action);
};
