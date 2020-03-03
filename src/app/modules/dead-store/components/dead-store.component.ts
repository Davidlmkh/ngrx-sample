import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

// the observer never stops and creates a dead store

@Component({
  selector: 'app-dead-store',
  template: `
    <span>Dead store : {{ value }}</span>
  `,
})
export class DeadStoreComponent implements OnInit {

  obs$ = interval(1000);

  value: number;

  ngOnInit() {
    this.obs$.pipe(
      tap(console.log),
    ).subscribe(v => this.value = v); // this will affect a value var and never stop
  }
}
