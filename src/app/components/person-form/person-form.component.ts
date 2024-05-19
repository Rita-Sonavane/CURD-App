import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  @ViewChild('personForm') personForm: NgForm | ElementRef | any;

  isEditMode: boolean = false;

  selectedCountry: string = "India";

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const personId: any = params.get('id');
      if (personId) {
        this.isEditMode = true;
        console.log("from ngOnInit  this.isEditMode", this.isEditMode);
        const existingPerson = this.personService.getPersonById(personId);
        if (!existingPerson) {
          this.router.navigate(['/']);
        } else {
          this.person = existingPerson;
        }
      } else {
        this.isEditMode = false;
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.isEditMode) {
        this.setFormValues();
      }
    }, 0);
  }

  setFormValues(): void {    
    if (this.personForm) {
     
      this.personForm.setValue({
        name: this.person.name,
        email: this.person.email,
        dob: this.person.dob,
        // avatar: this.person.avatar,
        country: this.person.country
      });
    }
  }

  onSubmit(personForm: NgForm) {
    console.log("this.isEditMode", this.isEditMode, personForm.value);
    if (personForm.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    if (this.isEditMode) {
      this.updatePerson(personForm);
    } else {
      this.addPerson(personForm);
    }
  }

  addPerson(form: NgForm) {
    console.log("addPerson called", form.value);
    const id = new Date().getTime();
    const personWithId = { ...form.value, id: id };
    this.personService.addPerson(personWithId);
    this.router.navigate(['/']);
  }

  updatePerson(form: NgForm) {
    const personWithId = { ...form.value, id: this.person.id }; 
    setTimeout(() => {
      this.personService.updatePerson(personWithId);
      console.log("updatePerson called", form.value, this.person.id);
      this.router.navigate(['/']);
    }, 0)
  }

  cancel(){
    this.router.navigate(['/']);
  }
}
