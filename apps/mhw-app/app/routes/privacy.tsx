import { Link } from "@remix-run/react";
import { PrivacyPolicyPage } from "@repo/pages-mhw";

export default function PrivacyPage() {
  return (
    <>
      <Link to="/">Home</Link>
      <PrivacyPolicyPage />
    </>
  );
}
