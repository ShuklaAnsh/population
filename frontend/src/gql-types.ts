export interface City {
  id?: number;
  name: string;
  population?: number;
  isCapital?: boolean;
  cities?: City[];
  country?: Country;
}

export interface Country {
  name: string;
  population: number;
  flagEmoji: string;
  cities?: City[];
  countryCode: string;
}
