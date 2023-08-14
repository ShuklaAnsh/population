import { gql } from "@apollo/client";

export const GET_INITIAL_COUNTRIES_QUERY = gql`
  query HomePageCountryDetails($countriesInput: CountriesInput) {
    countries(input: $countriesInput) {
      name
      countryCode
      flagEmoji
      population
    }
  }
`;
