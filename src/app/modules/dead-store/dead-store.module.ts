import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BadPipeAsyncComponent } from './components/bad-pipe-async.component';
import { DeadStoreComponent } from './components/dead-store.component';
import { EmptyComponent } from './components/empty.component';
import { GoodAsyncPipeComponent } from './components/good-async-pipe.component';
import { ManualNoDeadStoreComponent } from './components/manual-no-dead-store.component';
import { NoDeadStoreComponent } from './components/no-dead-store.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    DeadStoreComponent,
    NoDeadStoreComponent,
    ManualNoDeadStoreComponent,
    BadPipeAsyncComponent,
    GoodAsyncPipeComponent,
    EmptyComponent,
  ],
})
export class DeadStoreModule { }
