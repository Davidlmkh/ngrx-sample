import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const mock: Array<User> = [
  {
    name: 'david',
    age: 60,
    active: true,
  },
  {
    name: 'théo',
    age: 25,
    active: false,
  },
];

@Injectable({
  providedIn: 'root',
})
export class UsersMockService {

  getUsers(): Observable<Array<User>> {
    return of(mock).pipe(
      delay(4000),
    );
  }
}

export interface User {
  name: string;
  age: number;
  active: boolean;
}

export interface UserGroup {
  label: string;
}
