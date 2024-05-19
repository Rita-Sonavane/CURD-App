import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFlag'
})
export class CountryFlagPipe implements PipeTransform {

  transform(country: string): string {
    const countryCode = this.getCountryCode(country);
    return `https://flagcdn.com/w320/${countryCode}.png`;
  }

  getCountryCode(country: string): string {
    const countryCodes: { [key: string]: string } = {
      'USA': 'us',
      'Canada': 'ca',
      'United Kingdom': 'gb',
      'Germany': 'de',
      'France': 'fr', 
      'India': 'in',
    };

    return countryCodes[country] || 'unknown'; 
  }

}
