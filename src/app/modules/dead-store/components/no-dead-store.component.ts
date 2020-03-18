import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// | async unsubscribe automatically when template is destroyed
// there is no local affected variable, all is stream threw observables

@Component({
  selector: 'app-no-dead-store',
  template: `
    <button (click)="toto = !toto">switch</button>
    <span *ngIf="toto">no dead store : {{ value$ | async }}</span>
  `,
})
export class NoDeadStoreComponent implements OnInit {

  toto = false;

  obs$ = interval(1000);

  value$: Observable<number>;

  ngOnInit() {
    this.value$ = this.obs$.pipe(
      tap(console.log),
      map(v => v * 2),
    );
  }
}
