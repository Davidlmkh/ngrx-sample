import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { concatMap, delay, exhaustMap, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';

const fakeResult = {
  name: 'john',
  age: 12,
};

const fakeAdressResult = {
  location: 'lyon',
};

const users = [
  {
    name: 'toto',
  },
  {
    name: 'tata',
  },
  {
    name: 'titi',
  },
];

@Component({
  selector: 'app-good-async-pipe',
  template: `<ng-container *ngIf="obs$ | async as obs">
    <span>name: {{ obs?.name }}</span>
    <span>age: {{ obs?.age }}</span>
  </ng-container>`,
})
export class GoodAsyncPipeComponent implements OnInit {

  private fullResult;

  ngOnInit() {

    const webSocket = interval(1000).pipe(
      filter(i => i < 3),
    );

    webSocket.pipe(
      exhaustMap(index => this.getUserByIndex(index).pipe(
        tap(user => console.log(user.name, 'mis à jour !')),
      )),
    ).subscribe();

    this.getUser$().pipe(
      map(user => user.name),
      exhaustMap(name => this.getUserLocation$(name)),
    );

    this.getUser$().subscribe(user => {
      this.getUserLocation$(user.name).subscribe(adress => {
        this.fullResult = {
          ...user,
          adress,
        };
      });
    });
  }

  getUserByIndex(index: number): Observable<{ name: string }> {
    console.log('demande du user ', index);

    return of(users).pipe(
      map(users => users[index]),
      delay(2000),
    );
  }

  getUser$(): Observable<{ name: string, age: number }> {
    return of(fakeResult).pipe( // simulates an http result after 2 seconds
      tap(({ name }) => console.log(name)),
    );
  }

  getUserLocation$(name: string): Observable<string> {
    return of(fakeAdressResult).pipe(
      map(adress => adress.location),
    );
  }

}
