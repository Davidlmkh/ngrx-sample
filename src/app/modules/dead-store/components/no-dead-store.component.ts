import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// | async unsubscribe automatically when template is destroyed
// there is no local affected variable, all is stream threw observables

@Component({
  selector: 'app-no-dead-store',
  template: `<span>no dead store : {{ value$ | async }}</span>`,
})
export class NoDeadStoreComponent implements OnInit {

  obs$ = interval(1000);

  value$: Observable<number>;

  ngOnInit() {
    this.value$ = this.obs$.pipe(tap(console.log));
  }
}
