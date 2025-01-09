import type { MetaFunction } from "@netlify/remix-runtime";

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
  return <div>LR App...</div>;
}
