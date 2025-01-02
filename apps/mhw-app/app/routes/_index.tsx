import type { MetaFunction } from "@netlify/remix-runtime";
import { App } from "./App";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export default function Index() {
  return (
    <>
      <Link to="privacy">Privacy Policy</Link>
      <App />
    </>
  );
}
