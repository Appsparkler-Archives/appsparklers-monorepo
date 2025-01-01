import type { MetaFunction } from "@netlify/remix-runtime";
import { HomePage } from "@repo/pages-mhw";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <HomePage onChangeBroadcastDate={async () => {}} />;
}
