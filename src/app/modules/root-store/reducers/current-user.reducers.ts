import { Action, createReducer, on } from '@ngrx/store';
import { AppActions } from '../actions';
import { AppActionsUnion } from './../actions/app.actions';

export interface CurrentUserState {
  username: string;
  birthDate: Date;
  admin: boolean;
  location: {
    city: string;
    country: string;
  };
}

const initialState: CurrentUserState = {
  admin: false,
  birthDate: new Date('1993-01-01'),
  username: 'Toto',
  location: {
    city: 'Lyon',
    country: 'France',
  },
};

const reducer = createReducer(
  initialState,
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
      return { // syntax is different by behavior is the same
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
