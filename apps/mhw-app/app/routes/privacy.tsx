import { PrivacyPolicyPage } from "@repo/pages-mhw";
import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy Policy - My HFN World" },
    {
      name: "description",
      content: "An app to support us in our daily HFN abhyaas.",
    },
  ];
};

export default function PrivacyPage() {
  return <PrivacyPolicyPage />;
}
