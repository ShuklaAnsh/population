import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { City, Country } from "../types";
import { convertEmoji } from "../utils";
import { FilterMenu } from "../components/filter-menu";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { GET_INITIAL_COUNTRIES_QUERY } from "../graphql/queries/getInitialCountries";
import { GET_INITIAL_CITIES_QUERY } from "../graphql/queries/getInitialCities";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [groupBy, setGroupBy] = useState<"Country" | "City">("Country");

  const navigate = useNavigate();
  const [getInitialCountries, countriesQuery] = useLazyQuery<{
    countries: Country[];
  }>(GET_INITIAL_COUNTRIES_QUERY);

  const [getInitialCities, citiesQuery] = useLazyQuery<{
    cities: City[];
  }>(GET_INITIAL_CITIES_QUERY);

  useEffect(() => {
    if (groupBy === "Country") {
      getInitialCountries();
    } else if (groupBy === "City") {
      getInitialCities();
    }
  }, [
    citiesQuery.called,
    countriesQuery.called,
    getInitialCities,
    getInitialCountries,
    groupBy,
  ]);

  if (countriesQuery.loading || citiesQuery.loading) return <p>Loading...</p>;

  const error = countriesQuery.error ?? citiesQuery.error;
  if (error) return <p>Error : {error.message}</p>;

  const countries = countriesQuery.data?.countries.map((country) => (
    <Card key={country.countryCode}>
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

  const cities = citiesQuery.data?.cities.map((city) => (
    <Card key={city.id}>
      <Card.Header className="flex flex-row items-center justify-center space-x-2">
        <h2 className="m-0">{city.name}</h2>
        {city.isCapital ? (
          <span role="img" aria-label="capital" className="m-0 text-3xl">
            ⭐️
          </span>
        ) : (
          <></>
        )}
      </Card.Header>
      <Card.Content>
        <p>
          <b>Population: </b>
          {city.population}
        </p>
        <Button
          className="self-center"
          onClick={() =>
            navigate(`/country/${city.country.countryCode}/city/${city.id}`)
          }
        >
          View More
        </Button>
      </Card.Content>
    </Card>
  ));

  const onFilterApply = (filter: number) => {
    if (groupBy == "Country") {
      countriesQuery.refetch({
        countriesInput: {
          population: {
            greaterThan: filter,
          },
        },
      });
    } else {
      citiesQuery.refetch({
        citiesInput: {
          population: {
            greaterThan: filter,
          },
        },
      });
    }
  };

  return (
    <div className="prose max-w-full space-y-4">
      <div>
        <h3>Group By: {groupBy}</h3>
        <label>
          <input
            onChange={() => setGroupBy("Country")}
            type="radio"
            name="groupBy"
            value="Country"
            checked={groupBy === "Country"}
          />
          <span>Countries</span>
        </label>
        <label>
          <input
            onChange={() => setGroupBy("City")}
            type="radio"
            name="groupBy"
            value="City"
            checked={groupBy === "City"}
          />
          <span>Cities</span>
        </label>
      </div>

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
        {groupBy === "Country" ? countries : cities}
      </div>
    </div>
  );
};
