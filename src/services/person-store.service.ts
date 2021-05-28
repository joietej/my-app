import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map } from 'rxjs/operators';
import { Person } from 'src/model/person';

export interface PersonState {
  people: Person[];
}

export const defaultPersonState: PersonState = {
  people: [],
};

@Injectable({
  providedIn: 'root',
})
export class PersonStoreService extends ComponentStore<PersonState> {
  constructor(private http: HttpClient) {
    super(defaultPersonState);
  }

  private loadPeople = this.updater((state, people: Person[]) => ({
    ...state,
    people,
  }));

  public getPeople = this.effect(() =>
    this.http
      .get('https://5d55c66fd3db4b0014a03744.mockapi.io/api/people')
      .pipe(map((data) => this.loadPeople(data as Person[])))
  );
}
