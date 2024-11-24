import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  ...prefix("movies", [
    index("routes/movies.tsx"),
    route(":id", "routes/movies.$id.tsx"),
  ]),
] satisfies RouteConfig;
