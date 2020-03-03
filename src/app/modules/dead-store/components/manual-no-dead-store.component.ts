import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

// this requires several manual actions and potential lacks / errors

@Component({
  selector: 'app-manual-no-dead-store',
  template: `<span>no dead store : {{ value }}</span>`,
})
export class ManualNoDeadStoreComponent implements OnInit, OnDestroy {

  obs$ = interval(1000);

  value: number;

  private subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.obs$.pipe(
      tap(console.log),
    ).subscribe(v => this.value = v);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
