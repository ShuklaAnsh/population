import { useQuery, gql } from "@apollo/client";
import { Country } from "./gql-types";
import { CountryPage } from "./country-page";

const GET_INITIAL_COUNTRIES_QUERY = gql`
  query InitDetails {
    countries {
      name
      flagEmoji
      population
      countryCode
      cities(input: { capitalsOnly: true }) {
        name
      }
    }
  }
`;

function DisplayCountries() {
  const { loading, error, data } = useQuery<{
    countries: Country[];
  }>(GET_INITIAL_COUNTRIES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const countries = data?.countries.map((country) => (
    <div
      className="m-1.5 min-h-[175px] min-w-[200px] max-w-fit rounded-md bg-slate-400 p-4"
      key={country.name}
    >
      <div className="flex flex-row items-center justify-center space-x-2">
        <h2 className="m-0">{country.name}</h2>
        {/* <i className="m-0 text-3xl">{country.flagEmoji}</i> */}
      </div>

      <p>
        <b>Population: </b>
        {country.population}
        <br />
        <b>Capital: </b>
        {country.cities?.at(0)?.name}
      </p>
      <button className="rounded-md bg-blue-300 p-2 shadow-sm hover:bg-blue-400 hover:shadow-lg">
        View More
      </button>
      <CountryPage country={country} />
    </div>
  ));

  return (
    <div className="prose max-w-full">
      <h1>Population Data</h1>
      <h3>Group By: Countries</h3>
      <div>Search</div>
      <div>Filter</div>
      <div className="flex flex-wrap justify-center">{countries}</div>
    </div>
  );
}

function App() {
  return (
    <main className="container mx-auto py-6 md:py-4">
      <section>
        <DisplayCountries />
      </section>
    </main>
  );
}

export default App;
