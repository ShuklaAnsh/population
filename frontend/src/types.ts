export interface RouteParams {
  countryCode?: string;
  cityId?: string;
}

export interface CityBase {
  id: number;
  name: string;
  population: number;
  isCapital: boolean;
}

export interface CityMetaData {
  country: Country;
}

export interface City extends CityBase, CityMetaData {}

export interface CountryBase {
  countryCode: string;
  name: string;
  population: number;
}

export interface Country {
  name: string;
  population: number;
  flagEmoji: string;
  cities?: CityBase[];
  countryCode: string;
}
