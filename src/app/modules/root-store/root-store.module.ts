import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersEffects } from './effects/users.effects';
import { metaReducers, reducers } from './reducers';

const effects = [
  UsersEffects,
];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([...effects]),
    StoreDevtoolsModule.instrument(),
  ],
})
export class RootStoreModule { }
