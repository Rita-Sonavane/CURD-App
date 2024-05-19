import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit{

  constructor( private personService: PersonService,private router: Router){}

  persons: Person[] = [];
  searchTerm: string = '';


  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

  navigateToAddPerson(): void {
    this.router.navigate(['/add']);
  }

}
