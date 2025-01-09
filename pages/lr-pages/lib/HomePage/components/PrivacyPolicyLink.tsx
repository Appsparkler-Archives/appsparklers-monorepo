import { Link } from "@remix-run/react";

export const PrivacyPolicyLink = () => {
  return (
    <div className="bg-primary flex justify-center">
      <Link
        to="/privacy"
        target="_blank"
        className="btn rounded-none btn-sm w-full btn-ghost text-sm"
      >
        Privacy Policy
      </Link>
    </div>
  );
};
