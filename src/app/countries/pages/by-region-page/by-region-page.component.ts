import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?: Region;

  @Input()
  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByRegion( term: Region ): void {

    this.selectedRegion = term;
    this.countriesService.searchRegion( term ).subscribe( countries => {
      this.countries = countries;
    })
  }

}
