import { Link } from "react-router";
import type { Route } from "./+types/movies";

interface IMoviesProps {
  loaderData: {
    results: {
      id: number;
      title: string;
    }[];
    total_results: number;
  };
}

export function meta({ data = {} }: Route.MetaArgs) {
  const { total_results = "--" } = data;
  return [
    { title: `Movies - ${total_results} now playing` },
    { name: "description", content: "Movies page" },
  ];
}

export async function clientLoader() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6f875d4fba2e999f480afa6275a08f75&region=BR"
  );
  if (!response.ok) {
    throw Error(response.status.toString());
  }
  return response.json();
}

export default function Movies({ loaderData }: IMoviesProps) {
  const { results } = loaderData;
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {results.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}/`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back</Link>
    </div>
  );
}
