import { NumberFilter, StringListFilter } from "../generated/graphql";
import { isValidNumber, isValidString } from "./validation.js";

export const handleNumberFilter = (
  filter: NumberFilter,
  field: string,
  query: string,
  queryArgs: any[],
) => {
  if (isValidNumber(filter.eq)) {
    queryArgs.push(filter.eq);
    query += ` ${queryArgs.length > 1 ? "AND" : "WHERE"} ${field} = \$${
      queryArgs.length
    }`;
  }
  if (isValidNumber(filter.greaterThan)) {
    queryArgs.push(filter.greaterThan);
    query += ` ${queryArgs.length > 1 ? "AND" : "WHERE"} ${field} > \$${
      queryArgs.length
    }`;
  }
  if (isValidNumber(filter.lessThan)) {
    queryArgs.push(filter.lessThan);
    query += ` ${queryArgs.length > 1 ? "AND" : "WHERE"} ${field} < \$${
      queryArgs.length
    }`;
  }
  if (isValidNumber(filter.neq)) {
    queryArgs.push(filter.neq);
    query += ` ${queryArgs.length > 1 ? "AND" : "WHERE"} ${field} != \$${
      queryArgs.length
    }`;
  }
  return { query, queryArgs };
};

export const handleStringListFilter = (
  filter: StringListFilter,
  field: string,
  query: string,
  queryArgs: any[],
) => {
  console.log("here", filter.in);
  const inList = filter.in?.filter((i) => isValidString(i));
  console.log("here2", inList);
  if (inList?.length > 0) {
    queryArgs.push(inList);
    query += ` ${queryArgs.length > 1 ? "AND" : "WHERE"} ${field} = ANY(\$${
      queryArgs.length
    }::text[])`;
  }
  const ninList = filter.notIn?.filter((i) => isValidString(i));
  if (ninList?.length > 0) {
    queryArgs.push(inList);
    query += ` ${queryArgs.length > 1 ? "AND" : "WHERE"} ${field} != ANY(\$${
      queryArgs.length
    }::text[])`;
  }
  return { query, queryArgs };
};
