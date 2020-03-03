import { createAction, props, union } from '@ngrx/store';

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

const all = union({
  setCurrentUserAdmin,
  setCurrentUserNonAdmin,
  setCurrentUserLocation,
  setCurrentUsername,
});

export type AppActionsUnion = typeof all;
