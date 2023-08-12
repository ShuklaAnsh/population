export interface CityEntity {
  id: number;
  countrycode: string;
  name: string;
  capital: boolean;
  // defined as integer in database
  population: number;
}

export interface CountryEntity {
  code: number;
  name: string;
  flag: string;
  // defined as integer in database
  population: number;
}
