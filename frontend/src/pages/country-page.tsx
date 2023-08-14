import { useQuery } from "@apollo/client";
import { Country, RouteParams } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import { GET_COUNTRY_QUERY } from "../graphql/queries/getCountry";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { convertEmoji } from "../utils";

export const CountryPage = () => {
  const params: RouteParams = useParams();
  const navigate = useNavigate();

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
    <div className="prose max-w-full space-y-4">
      <h1>
        {data?.country.name} {convertEmoji(data?.country.flagEmoji ?? "")}
      </h1>
      <h2>Additional details:</h2>
      <h3>Population:</h3> {data?.country.population}
      <h3>Cities:</h3>
      <div className="flex flex-wrap justify-start">
        {data?.country.cities?.map((city) => (
          <Card key={city.id}>
            <Card.Header>
              <h2 className="text-center">
                {city.name} {city.isCapital ? " ⭐️" : ""}
              </h2>
            </Card.Header>
            <Card.Content>
              <p>
                <b>Population:</b> {city.population}
              </p>
              <Button
                className="self-center"
                onClick={() =>
                  navigate(`/country/${params.countryCode}/city/${city.id}`)
                }
              >
                View More
              </Button>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
};
