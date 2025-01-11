---
to: "apps/<%= shortName %>-app/app/routes/_index.tsx"
---
import type { MetaFunction } from "@netlify/remix-runtime";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "<%= appName %>" },
    {
      name: "description",
      content: "description for <%= appName %>",
    },
  ];
};

export default function Index() {
  return (
    <div className="bg-base-100 p-4">
      <h1 className="text-3xl font-bold underline">
        <%= appName %>
      </h1>
      <Link to="/privacy" className="btn btn-primary">
        Go To Privacy Policy Page
      </Link>
    </div>
  );
}
