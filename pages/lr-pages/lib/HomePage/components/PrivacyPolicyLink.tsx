import { Link } from "@remix-run/react";

export const PrivacyPolicyLink = () => {
  return (
    <div className="bg-primary flex justify-center">
      <Link
        to="/privacy"
        target="_blank"
        className="btn btn-primary w-full rounded-none h-auto p-1"
      >
        Privacy Policy
      </Link>
      <Link
        to="/privacy"
        target="_blank"
        className="btn btn-primary w-full rounded-none h-auto p-1"
      >
        Privacy Policy
      </Link>
    </div>
  );
};
