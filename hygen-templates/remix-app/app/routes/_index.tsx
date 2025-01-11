import type { MetaFunction } from "@netlify/remix-runtime";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Lets Recite" },
    {
      name: "description",
      content: "An app to easily learn how to recite with meaning.",
    },
  ];
};

export default function Index() {
  return (
    <div className="bg-base-100 p-4">
      LR App...
      <br />
      <Link to="/privacy" className="btn btn-primary">
        Privacy Policy
      </Link>
    </div>
  );
}
