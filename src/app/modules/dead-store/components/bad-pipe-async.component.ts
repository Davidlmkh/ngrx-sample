import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

// attention au async pipe, il est possible de faire de grosses erreurs avec, comme ceci :
// qui va "subscribe" deux fois et donc lancer 2 fois le call http

const fakeResult = {
  name: 'john',
  age: 12,
};

@Component({
  selector: 'app-bad-pipe-async',
  template: `<span>{{ (obs$ | async)?.name }}</span>
  <span>{{ (obs$ | async)?.age }}</span>`,
})
export class BadPipeAsyncComponent {

  obs$ = of(fakeResult).pipe( // simulates an http result after 2 seconds
    tap(() => console.log('launch http call')),
    delay(2000),
  );

}
