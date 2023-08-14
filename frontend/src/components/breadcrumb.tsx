import { useParams, Link } from "react-router-dom";
import { RouteParams } from "../types";

const BreadCrumbNavLink = (props: {
  to: string;
  label: string;
  show: boolean;
  active?: boolean;
  first?: boolean;
}) =>
  props.show ? (
    <>
      {props.first ? "" : " > "}
      <Link
        className={props.active ? "text-pd-amber" : "text-white"}
        to={props.to}
      >
        {props.label}
      </Link>
    </>
  ) : (
    <></>
  );

export const Breadcrumb = () => {
  const params: RouteParams = useParams();

  return (
    <div>
      <BreadCrumbNavLink
        label="Home"
        to="/"
        first
        show
        active={!params.countryCode && !params.cityId}
      />
      <BreadCrumbNavLink
        label={params.countryCode!}
        to={`/country/${params.countryCode}`}
        show={!!params.countryCode}
        active={!!params.countryCode && !params.cityId}
      />
      <BreadCrumbNavLink
        label={params.cityId!}
        to={`/country/${params.countryCode}/city/${params.cityId}`}
        show={!!params.cityId}
        active={!!params.countryCode && !!params.cityId}
      />
    </div>
  );
};
