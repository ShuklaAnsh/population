import { gql } from "@apollo/client";

export const GET_INITIAL_CITIES_QUERY = gql`
  query HomePageCitiesDetails($citiesInput: CitiesInput) {
    cities(input: $citiesInput) {
      id
      name
      population
      isCapital
      country {
        countryCode
      }
    }
  }
`;
