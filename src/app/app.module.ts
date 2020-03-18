import { NgModule } from '@angular/core';
import { ChangeDetectionComponent } from './modules/change-detection/change-detection.component';
import { RootStoreModule } from './modules/root-store/root-store.module';
import { SharedModule } from './modules/shared/shared.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeDetectionChildComponent } from './modules/change-detection/child/change-detection-child.component';
import { CurrentUserModule } from './modules/current-user/current-user.module';
import { DeadStoreModule } from './modules/dead-store/dead-store.module';
import { UsersListComponent } from './modules/users/components/users-list/users-list.component';

const businessModules = [
  DeadStoreModule,
  CurrentUserModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    ChangeDetectionChildComponent,
    UsersListComponent,
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
