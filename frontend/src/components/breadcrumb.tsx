import { useParams, NavLink } from "react-router-dom";
import { RouteParams } from "../types";

export const Breadcrumb = () => {
  const params: RouteParams = useParams();

  const homeLink = <NavLink to="/">Home </NavLink>;
  const countryLink = params.countryCode ? (
    <>
      {" > "}
      <NavLink to={`/country/${params.countryCode}`}>
        {params.countryCode}
      </NavLink>
    </>
  ) : (
    <></>
  );

  const cityLink = params.countryCode ? (
    <>
      {" > "}
      <NavLink to={`/country/${params.countryCode}/city/${params.cityId}`}>
        {params.cityId}
      </NavLink>
    </>
  ) : (
    <></>
  );

  return (
    <div>
      {homeLink} {countryLink} {cityLink}
    </div>
  );
};
