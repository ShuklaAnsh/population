import { useQuery } from "@apollo/client";
import { Country, RouteParams } from "../types";
import { NavLink, useParams } from "react-router-dom";
import { GET_COUNTRY_QUERY } from "../graphql/queries/getCountry";

export const CountryPage = () => {
  const params: RouteParams = useParams();

  const { loading, error, data } = useQuery<{
    country: Country;
  }>(GET_COUNTRY_QUERY, {
    variables: {
      countryCode: params.countryCode,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul>
        Cities:
        {data?.country.cities?.map((city) => (
          <li key={city.id}>
            <article>
              <NavLink to={`/country/${params.countryCode}/city/${city.id}`}>
                <h2>
                  {city.name} {city.isCapital ? " *" : ""}
                </h2>
              </NavLink>
              <p>
                <b>Population:</b> {city.population}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};
