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

  constructor(private router: Router, private personService: PersonService) { }

  ngOnInit(): void {

  }

  navigateToEdit(personId: number) {
    console.log(personId);
    this.router.navigate(['/edit', personId]);
  }

  deletePerson(personId: number) {
    if(window.confirm('Are you sure you want to delete this person?')) {
      this.personService.deletePerson(personId);
      this.personService.getPersons(); 
    }
  }




}
