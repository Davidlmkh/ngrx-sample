import { NgModule } from '@angular/core';
import { RootStoreModule } from './modules/root-store/root-store.module';
import { SharedModule } from './modules/shared/shared.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentUserModule } from './modules/current-user/current-user.module';
import { DeadStoreModule } from './modules/dead-store/dead-store.module';

const businessModules = [
  DeadStoreModule,
  CurrentUserModule,
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RootStoreModule,
    ...businessModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
