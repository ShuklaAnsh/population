import { gql } from "@apollo/client";

export const GET_CITIES_QUERY = gql`
  query Cities($input: CitiesInput) {
    cities(input: $input) {
      id
      isCapital
      name
      population
      country {
        name
      }
    }
  }
`;
