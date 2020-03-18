import { createAction, props, union } from '@ngrx/store';
import { User } from 'src/app/users.service';

export const setCurrentUserAdmin = createAction(
  '[App] Set Current User Admin',
);

export const setCurrentUserNonAdmin = createAction(
  '[App] Set Current User Not Admin',
);

export const setCurrentUserLocation = createAction(
  '[App] Set Current User Location',
  props<{ location: { city: string, country: string } }>(),
);

export const setCurrentUsername = createAction(
  '[App] Set Current User Username',
  props<{ newUserName: string }>(),
);

export const loadUsers = createAction(
  '[Users] Load Users',
);

export const loadUsersSuceeded = createAction(
  '[Users] Load Users Succeeded',
  props<{ users: Array<User> }>(),
);

export const deleteUser = createAction(
  '[Users] delete user',
  props<{ name: string }>(),
);

export const deleteUserSucceeded = createAction(
  '[Users] delete user suceeded',
  props<{ name: string }>(),
);

const all = union({
  deleteUser,
  deleteUserSucceeded,
  setCurrentUserAdmin,
  setCurrentUserNonAdmin,
  setCurrentUserLocation,
  setCurrentUsername,
  loadUsers,
  loadUsersSuceeded,
});

export type AppActionsUnion = typeof all;
