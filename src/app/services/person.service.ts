import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

   persons: Person[] = [
    {
      id: 1,
      name: 'Mithali Raj',
      email: 'mithali@gmail.com',
      dob: '1999-12-04',
      avatar: 'assets/svg/1.svg',
      country: 'India'
    },
    {
      id: 2,
      name: 'Joshua F.',
      email: 'Joshua@gmail.com',
      dob: '2000-05-27',
      avatar: 'assets/svg/2.svg',
      country: 'USA'
    },
    {
      id: 3,
      name: 'Erik A.',
      email: 'Erik@gmail.com',
      dob: '1996-05-15',
      avatar: 'assets/svg/3.svg',
      country: 'Canada'
    },
    {
      id: 4,
      name: 'Melany D.',
      email: 'Melany@gmail.com',
      dob: '1978-05-15',
      avatar: 'assets/svg/4.svg',
      country: 'Germany'
    },
    {
      id: 5,
      name: 'Jimmy S.',
      email: 'Jimmy@gmail.com',
      dob: '1973-05-15',
      avatar: 'assets/svg/6.svg',
      country: 'France'
    },
    {
      id: 6,
      name: 'Tara B.',
      email: 'Tara@gmail.com',
      dob: '1990-05-15',
      avatar: 'assets/svg/9.svg',
      country: 'United Kingdom'
    },
    {
      id: 7,
      name: 'Shubham W.',
      email: 'shubham@gmail.com',
      dob: '1990-05-15',
      avatar: 'assets/svg/3.svg',
      country: 'India'
    },
    {
      id: 8,
      name: 'Henry H.',
      email: 'Henry@gmail.com',
      dob: '1990-05-15',
      avatar: 'assets/svg/2.svg',
      country: 'Canada'
    },
    {
      id: 9,
      name: 'Mary S.',
      email: 'Mary@gmail.com',
      dob: '1990-05-15',
      avatar: 'assets/svg/9.svg',
      country: 'United Kingdom'
    },
    {
      id: 10,
      name: 'Akshay B.',
      email: 'akshay@gmail.com',
      dob: '1990-05-15',
      avatar: 'assets/svg/12.svg',
      country: 'India'
    }

  ];


  // avtar

 avatars:any = [
    'assets/svg/1.svg',
    'assets/svg/2.svg',
    'assets/svg/3.svg',
    'assets/svg/4.svg',
    'assets/svg/5.svg',
    'assets/svg/6.svg',
    'assets/svg/7.svg',
    'assets/svg/8.svg',
    'assets/svg/9.svg',
    'assets/svg/10.svg',
    'assets/svg/11.svg',
    'assets/svg/12.svg',
  ]

  constructor() { }


  getPersons(): Person[] {
    return this.persons;
  }

  getPersonById(id: number): Person | any {
    return this.persons.find(person => person.id == id);
  }

  addPerson(person: Person): void {
    console.log("from Service addPerson",person);
    const randomAvatarIndex = Math.floor(Math.random() * this.avatars.length);
    person.avatar = this.avatars[randomAvatarIndex];
    this.persons.push(person);
  }

  
  updatePerson(updatedPerson: any) {
    const index = this.persons.findIndex(person => person.id === updatedPerson.id);
    if (index !== -1) {
      const randomAvatarIndex = Math.floor(Math.random() * this.avatars.length);
      updatedPerson.avatar = this.avatars[randomAvatarIndex];
      this.persons[index] = updatedPerson;
    }
  }


  deletePerson(id: number){
    const index = this.persons.findIndex(person => person.id == id);
    if (index !== -1) {
      this.persons.splice(index, 1);
    }
  }










}
