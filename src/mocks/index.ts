import type { RouteLocationNormalizedLoaded } from "vue-router";

export * from "./users";

export const usersEndpoint = "https://jsonplaceholder.typicode.com/users";
export const mockUsersRoute: RouteLocationNormalizedLoaded = {
  fullPath: "/users",
  hash: "",
  matched: [],
  meta: {},
  name: "Users",
  params: {},
  path: "/users",
  query: {},
  redirectedFrom: undefined,
};
export const loadingUsersText = "Loading users...";
