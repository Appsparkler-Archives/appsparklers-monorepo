---
to: "apps/<%= shortName %>-app/app/routes/privacy.tsx"
force: true
---
import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy Policy - <%= appName %>" },
    {
      name: "description",
      content: "description for <%= appName %>...",
    },
  ];
};

export default function PrivacyPage() {
  return (
    <div>
      <h1><%= appName %></h1>
      <h2>Privacy Policy</h2>
    </div>
  )
}
