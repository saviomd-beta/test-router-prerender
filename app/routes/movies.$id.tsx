import { Link } from "react-router";
import type { Route } from "./+types/movies.$id";

interface IClientLoader {
  params: {
    id: string;
  };
}

interface IMoviesIdProps {
  loaderData: {
    overview: string;
    release_date: string;
    runtime: number;
    title: string;
  };
}

export function meta({ data = {} }: Route.MetaArgs) {
  const { title = "--" } = data;
  return [
    { title: `MoviesId - ${title}` },
    { name: "description", content: "MoviesId page" },
  ];
}

export async function clientLoader({ params }: IClientLoader) {
  const { id } = params;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=6f875d4fba2e999f480afa6275a08f75`
  );
  if (!response.ok) {
    throw Error(response.status.toString());
  }
  return response.json();
}

export default function MoviesId({ loaderData }: IMoviesIdProps) {
  const { overview, release_date, runtime, title } = loaderData;
  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
      <p>
        {release_date}, {runtime} minutes
      </p>
      <Link to="/movies">Back</Link>
    </div>
  );
}
