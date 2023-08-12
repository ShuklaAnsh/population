import { Resolvers } from "./generated/graphql";
import { CityEntity, CountryEntity } from "./model/dbEntities.js";
import {
  handleNumberFilter,
  handleStringListFilter,
} from "./utils/queryHelpers.js";

export const resolvers: Resolvers = {
  Query: {
    cities: async (_, args, context, info) => {
      console.log("Query -> cities");

      let query = "SELECT * FROM city";
      let queryArgs = [];

      if (args.input) {
        if (args.input.countryCodes) {
          const filtered = handleStringListFilter(
            args.input.countryCodes,
            "countrycode",
            query,
            queryArgs,
          );
          query = filtered.query;
          queryArgs = filtered.queryArgs;
        }
        if (args.input.population) {
          const filtered = handleNumberFilter(
            args.input.population,
            "population",
            query,
            queryArgs,
          );
          query = filtered.query;
          queryArgs = filtered.queryArgs;
        }
        if (args.input.capitalsOnly) {
          query += ` ${queryArgs.length > 1 ? "AND" : "WHERE"} capital = true`;
        }
      }
      query += " ORDER BY name ASC";
      console.log(query);
      const res = await context.db.query(query, queryArgs);
      return res.rows.map((data) => {
        const cityEntity = new CityEntity(data);
        return cityEntity.toGqlType();
      });
    },
    countries: async (_, args, context, info) => {
      console.log("Query -> countries");

      let query = "SELECT * FROM country";
      let queryArgs = [];

      if (args.input) {
        if (args.input.population) {
          const filtered = handleNumberFilter(
            args.input.population,
            "population",
            query,
            queryArgs,
          );
          query = filtered.query;
          queryArgs = filtered.queryArgs;
        }
      }
      query += " ORDER BY name ASC";
      console.log(query);
      const res = await context.db.query(query, queryArgs);

      return res.rows.map((data) => {
        const countryEntity = new CountryEntity(data);
        return countryEntity.toGqlType();
      });
    },
    city: async (_, args, context, info) => {
      console.log("Query -> city");
      const res = await context.db.query(`SELECT * FROM city WHERE id = $1`, [
        args.Id,
      ]);
      const cityEntity = new CityEntity(res.rows.at(0));
      return cityEntity.toGqlType();
    },
    country: async (_, args, context, info) => {
      console.log("Query -> country");
      const res = await context.db.query(
        `SELECT * FROM country WHERE code = $1`,
        [args.code],
      );
      const countryEntity = new CountryEntity(res.rows.at(0));
      return countryEntity.toGqlType();
    },
  },
  Country: {
    cities: async (parent, args, context, info) => {
      console.log("Country -> cities");

      let query = "SELECT * FROM city WHERE countrycode = $1";
      let queryArgs = [parent.countryCode];

      if (args.input) {
        if (args.input.capitalsOnly) {
          query += " AND capital = true";
        }
        if (args.input.population) {
          const filtered = handleNumberFilter(
            args.input.population,
            "population",
            query,
            queryArgs,
          );
          query = filtered.query;
          queryArgs = filtered.queryArgs;
        }
      }
      query += " ORDER BY name ASC";
      console.log(query);

      const res = await context.db.query(query, queryArgs);
      return res.rows.map((data) => {
        const cityEntity = new CityEntity(data);
        return cityEntity.toGqlType();
      });
    },
  },

  City: {
    country: async (parent, args, context, info) => {
      console.log("City -> country");
      const res = await context.db.query(
        `SELECT * FROM country WHERE code = $1`,
        [parent.country.countryCode],
      );
      const countryEntity = new CountryEntity(res.rows.at(0));
      return countryEntity.toGqlType();
    },
  },
};
