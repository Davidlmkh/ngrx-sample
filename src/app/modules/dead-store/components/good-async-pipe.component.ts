import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

const fakeResult = {
  name: 'john',
  age: 12,
};

@Component({
  selector: 'app-good-async-pipe',
  template: `<ng-container *ngIf="obs$ | async as obs">
    <span>name: {{ obs?.name }}</span>
    <span>age: {{ obs?.age }}</span>
  </ng-container>`,
})
export class GoodAsyncPipeComponent {

  obs$ = of(fakeResult).pipe( // simulates an http result after 2 seconds
    tap(() => console.log('launch http call')),
    delay(2000),
  );

}
