import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  person: Person = {
    id: 0,
    name: '',
    email: '',
    dob: '',
    avatar: '',
    country: ''
  };
  
  constructor( private personService: PersonService,){}

  persons: Person[] = [];


  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

  onSubmit(){

  }
}
