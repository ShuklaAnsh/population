import { gql } from "@apollo/client";

export const GET_CITY_QUERY = gql`
  query GetCity($id: Int!) {
    city(Id: $id) {
      id
      name
      population
      isCapital
    }
  }
`;
