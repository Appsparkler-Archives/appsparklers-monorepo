import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy Policy - Lets Recite App" },
    {
      name: "description",
      content: "An app to easily learn how to recite with meaning.",
    },
  ];
};

/**
 * PrivacyPage component renders the PrivacyPolicyPage component.
 * This component is responsible for displaying the privacy policy
 * information to the user.
 */

export default function PrivacyPage() {
  return <div>Privacy Policy Page</div>;
}
