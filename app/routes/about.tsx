import { Link } from "react-router";
import type { Route } from "./+types/about";

interface IAboutProps {
  loaderData: {
    message: string;
  };
}

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }, { name: "description", content: "About page" }];
}

export async function clientLoader() {
  return { message: "About data" };
}

export default function About({ loaderData }: IAboutProps) {
  return (
    <div>
      <h1>About</h1>
      <h2>{loaderData.message}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius
        vel omnis! Error, autem? Quae atque aperiam harum illo doloribus quod
        repudiandae, odit, similique, neque consectetur reiciendis optio!
        Debitis, repellat.
      </p>
      <Link to="/">Back</Link>
    </div>
  );
}
