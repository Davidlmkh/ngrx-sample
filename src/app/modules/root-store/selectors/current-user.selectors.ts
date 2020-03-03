import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

const yearDuration = 1000 * 60 * 60 * 24 * 365;

export const selectCurrentUser = (state: AppState) => state.currentUser;

export const selectCurrentUserName = createSelector(
  selectCurrentUser,
  user => user.username,
);

export const selectCurrentUserIsAdminitrator = createSelector(
  selectCurrentUser,
  user => user.admin,
);

export const selectCurrentUserBirthdate = createSelector(
  selectCurrentUser,
  user => user.birthDate,
);

export const selectCurrentUserAge = createSelector(
  selectCurrentUserBirthdate,
  birthDate => {
    const now = new Date();

    const diff = now.getTime() - birthDate.getTime();

    return diff / yearDuration;
  },
);

export const selectCurrentUserLocation = createSelector(
  selectCurrentUser,
  user => user.location,
);

export const selectCurrentUserCity = createSelector(
  selectCurrentUserLocation,
  location => location.city,
);

export const selectCurrentUserCountry = createSelector(
  selectCurrentUserLocation,
  location => location.country,
);
