import { useQuery } from "@apollo/client";
import { City, RouteParams } from "../types";
import { GET_CITY_QUERY } from "../graphql/queries/getCity";
import { useParams } from "react-router-dom";

export const CityPage = () => {
  const params: RouteParams = useParams();
  const { loading, error, data } = useQuery<{
    city: City;
  }>(GET_CITY_QUERY, {
    variables: {
      id: parseInt(params.cityId ?? "-1"),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <article>
      <h2>
        {data?.city.name} {data?.city.isCapital ? " *" : ""}
      </h2>
      <p>
        <b>Population:</b> {data?.city.population}
      </p>
    </article>
  );
};
