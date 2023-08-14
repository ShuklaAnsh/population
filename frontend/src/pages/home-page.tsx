import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Country } from "../types";
import { convertEmoji } from "../utils";
import { FilterMenu } from "../components/filter-menu";
import { Card } from "../components/card";
import { Button } from "../components/button";

const GET_INITIAL_COUNTRIES_QUERY = gql`
  query HomePageCountryDetails($countriesInput: CountriesInput) {
    countries(input: $countriesInput) {
      name
      countryCode
      flagEmoji
      population
    }
  }
`;

export const HomePage = () => {
  const navigate = useNavigate();
  const { loading, error, data, refetch } = useQuery<{
    countries: Country[];
  }>(GET_INITIAL_COUNTRIES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const countries = data?.countries.map((country) => (
    <Card key={country.name}>
      <Card.Header className="flex flex-row items-center justify-center space-x-2">
        <h2 className="m-0">{country.name}</h2>
        <span role="img" aria-label="flag" className="m-0 text-3xl">
          {convertEmoji(country.flagEmoji)}
        </span>
      </Card.Header>
      <Card.Content>
        <p>
          <b>Population: </b>
          {country.population}
        </p>
        <Button
          className="self-center"
          onClick={() => navigate(`/country/${country.countryCode}`)}
        >
          View More
        </Button>
      </Card.Content>
    </Card>
  ));

  const onFilterApply = (filter: number) => {
    refetch({
      countriesInput: {
        population: {
          greaterThan: filter,
        },
      },
    });
  };

  return (
    <div className="prose max-w-full space-y-4">
      <h3>Group By: Countries</h3>
      <div>Search</div>
      <FilterMenu
        title={"Filter Countries"}
        filters={[
          {
            label: "Greater than",
            onOptionSelect: onFilterApply,
          },
        ]}
      />
      <div className="flex flex-wrap justify-center md:justify-start">
        {countries}
      </div>
    </div>
  );
};
