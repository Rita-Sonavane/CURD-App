import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit{

  constructor( private personService: PersonService,){}

  persons: Person[] = [];


  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

}
