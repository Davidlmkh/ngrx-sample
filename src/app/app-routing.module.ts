import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './modules/current-user/components/user-detail/user-detail.component';
import { BadPipeAsyncComponent } from './modules/dead-store/components/bad-pipe-async.component';
import { DeadStoreComponent } from './modules/dead-store/components/dead-store.component';
import { EmptyComponent } from './modules/dead-store/components/empty.component';
import { GoodAsyncPipeComponent } from './modules/dead-store/components/good-async-pipe.component';
import { ManualNoDeadStoreComponent } from './modules/dead-store/components/manual-no-dead-store.component';
import { NoDeadStoreComponent } from './modules/dead-store/components/no-dead-store.component';

const routes: Routes = [
  {
    path: 'current-user',
    children: [
      {
        path: '',
        redirectTo: 'detail',
        pathMatch: 'full',
      },
      {
        path: 'detail',
        component: UserDetailComponent,
      },
    ],
  },
  {
    path: 'dead-store',
    children: [
      {
        path: '',
        component: EmptyComponent,
      },
      {
        path: 'sample',
        component: DeadStoreComponent,
      },
      {
        path: 'manual-solution',
        component: ManualNoDeadStoreComponent,
      },
      {
        path: 'auto-solution',
        component: NoDeadStoreComponent,
      },
      {
        path: 'bad-async-pipe',
        component: BadPipeAsyncComponent,
      },
      {
        path: 'good-async-pipe',
        component: GoodAsyncPipeComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
