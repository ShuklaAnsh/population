import { gql, useQuery } from "@apollo/client";
import { City, Country } from "./gql-types";

export interface ICountryPageProps {
  country: Country;
}

const GET_CITIES_QUERY = gql`
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

export const CountryPage = (props: ICountryPageProps) => {
  const { loading, error, data } = useQuery<{
    cities: City[];
  }>(GET_CITIES_QUERY, {
    variables: {
      input: {
        countryCodes: {
          in: [props.country.countryCode],
        },
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul>
        Cities:
        {data?.cities.map((city) => (
          <li key={city.id}>
            {city.name} {city.isCapital ? " *" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};
