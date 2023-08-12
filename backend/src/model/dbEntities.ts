import { City, Country } from "../generated/graphql";

export interface GqlConvertible<GqlType> {
  toGqlType: () => GqlType;
}

export class CountryEntity implements GqlConvertible<Country> {
  code: string;
  name: string;
  flag: string;
  population: number;

  constructor(data: Partial<CountryEntity>) {
    Object.assign(this, data);
  }

  toGqlType(): Country {
    return {
      countryCode: this.code,
      name: this.name,
      flagEmoji: this.flag,
      population: this.population,
    };
  }
}

export class CityEntity implements GqlConvertible<City> {
  id: number;
  countrycode: string;
  name: string;
  capital: boolean;
  population: number;

  constructor(data: Partial<CityEntity>) {
    Object.assign(this, data);
  }

  toGqlType(): City {
    return {
      country: {
        countryCode: this.countrycode,
        name: null,
      },
      id: this.id,
      isCapital: this.capital,
      name: this.name,
      population: this.population,
    };
  }
}
