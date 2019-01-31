import Pretender from "pretender";
import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
import { graphql as execute } from "graphql";

import serverSchema from "../graphql/schema";

export function initialize(application) {
  const schema = makeExecutableSchema({ typeDefs: serverSchema });
  addMockFunctionsToSchema({ schema });

  const server = new Pretender(function() {
    this.post("/api/graphql", async request => {
      const body = JSON.parse(request.requestBody);

      const response = await execute(
        schema,
        body.query,
        {},
        {},
        body.variables
      );

      return [
        200,
        { "Content-Type": "application/json" },
        JSON.stringify(response)
      ];
    });
  });

  application.register("server:pretender", server);
}

export default {
  initialize
};
