import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private persons: Person[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      dob: '1990-05-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'India'
    },
    {
      id: 2,
      name: 'Joshua',
      email: 'Joshua@gmail.com',
      dob: '1990-05-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'USA'
    },
    {
      id: 3,
      name: 'Erik Doe',
      email: 'Erik@gmail.com',
      dob: '1990-05-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'USA'
    },
    {
      id: 4,
      name: 'Melany Doe',
      email: 'Melany@gmail.com',
      dob: '1990-05-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'USA'
    },
    {
      id: 5,
      name: 'Jimmy Doe',
      email: 'Jimmy@gmail.com',
      dob: '1990-05-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'USA'
    },
    {
      id: 6,
      name: 'Tara Doe',
      email: 'Tara@gmail.com',
      dob: '1990-05-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'USA'
    },
    {
      id: 7,
      name: 'Esteban Doe',
      email: 'Esteban@gmail.com',
      dob: '1990-05-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'USA'
    },
    {
      id: 8,
      name: 'Henry Doe',
      email: 'Henry@gmail.com',
      dob: '1990-05-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'USA'
    },
    {
      id: 9,
      name: 'Mary Doe',
      email: 'Mary@gmail.com',
      dob: '1990-05-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'USA'
    },
    {
      id: 10,
      name: 'Carmen Doe',
      email: 'Carmen@gmail.com',
      dob: '1990-05-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'USA'
    }

  ];


  constructor() { }


  getPersons(): Person[] {
    return this.persons;
  }

  getPersonById(id: number): Person | any {
    return this.persons.find(person => person.id === id);
  }

  addPerson(person: Person): void {
    this.persons.push(person);
  }

  updatePerson(updatedPerson: Person) {
    const index = this.persons.findIndex(person => person.id === updatedPerson.id);
    if (index !== -1) {
      this.persons[index] = updatedPerson;
    }
  }










}
