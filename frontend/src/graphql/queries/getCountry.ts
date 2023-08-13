import { gql } from "@apollo/client";

export const GET_COUNTRY_QUERY = gql`
  query GetCountry($countryCode: String!, $citiesInput: CitiesInput) {
    country(code: $countryCode) {
      name
      flagEmoji
      population
      cities(input: $citiesInput) {
        id
        name
        population
        isCapital
      }
    }
  }
`;
