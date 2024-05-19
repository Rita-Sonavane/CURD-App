import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../model/person';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(persons: Person[], searchTerm: string): Person[] {
    if (!searchTerm) {
      return persons;
    }
    return persons.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
