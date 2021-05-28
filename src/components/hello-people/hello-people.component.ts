import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/model/person';
import { PersonStoreService } from 'src/services/person-store.service';

@Component({
  selector: 'app-hello-people',
  templateUrl: './hello-people.component.html',
  styleUrls: ['./hello-people.component.css'],
})
export class HelloPeopleComponent implements OnInit {
  @Input() title!: string;

  people$: Observable<Person[]>;

  constructor(private readonly store: PersonStoreService) {
    this.people$ = store.select(({ people }) => people);
  }

  ngOnInit() {
    this.store.getPeople();
  }
}
