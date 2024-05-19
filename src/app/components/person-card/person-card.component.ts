import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  @Input()
  person: Person | any;

  persons:Person []=[];

  constructor(private router: Router, private personService: PersonService) { }

  ngOnInit(): void {
  
  }

  navigateToEdit(personId: number) {
    console.log(personId);
    this.router.navigate(['/edit', personId]);
  }

  deletePerson(personId: number) {
    const person = this.personService.getPersonById(personId);
    if (person) {
      const confirmMessage = `Are you sure you want to delete ${person.name}?`;
      if (window.confirm(confirmMessage)) {
        this.personService.deletePerson(personId);
        this.persons = this.personService.getPersons();
      }
    } else {
      console.error(`Person with id ${personId} not found`);
    }
  }


}
