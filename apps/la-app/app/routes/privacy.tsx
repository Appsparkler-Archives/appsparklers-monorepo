import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy Policy - Library App" },
    {
      name: "description",
      content: "description for Library App...",
    },
  ];
};

export default function PrivacyPage() {
  return (
    <div>
      <h1>Library App</h1>
      <h2>Privacy Policy</h2>
    </div>
  )
}
