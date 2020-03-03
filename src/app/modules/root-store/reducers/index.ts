import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { currentUserReducer, CurrentUserState } from './current-user.reducers';

export interface AppState {
  currentUser: CurrentUserState;
}

export const reducers: ActionReducerMap<AppState> = {
  currentUser: currentUserReducer,
};

export const metaReducers: Array<MetaReducer<AppState>> = !environment.production ? [] : [];
