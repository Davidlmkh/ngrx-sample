import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [
    UserDetailComponent,
  ],
  imports: [
    SharedModule,
  ],
})
export class CurrentUserModule { }
