import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit{

  constructor( private personService: PersonService,){}

  persons: Person[] = [];


  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }
  
}
