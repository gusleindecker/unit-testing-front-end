import { rest } from "msw";
import { setupServer, type SetupServer } from "msw/node";

export interface MockEndpointOptions {
  body: any;
  httpVerb?: "get" | "post" | "put" | "patch" | "delete";
  status?: number;
}

export const mockServer: SetupServer = setupServer();

export const mockEndpoint = (
  endpoint: string,
  { body, httpVerb = "get", status = 200 }: MockEndpointOptions
) => {
  mockServer.use(
    rest[httpVerb](endpoint, (req, res, ctx) =>
      res(ctx.status(status), ctx.json(body))
    )
  );
};
