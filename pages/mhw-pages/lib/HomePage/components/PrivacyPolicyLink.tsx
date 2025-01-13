import { Link } from "@remix-run/react";

export const PrivacyPolicyLink = () => {
  return (
    <div className="bg-primary flex justify-center">
      <Link
        to="/privacy"
        target="_blank"
        className="btn btn-primary btn-xs rounded-none w-full text-sm"
      >
        Privacy Policy
      </Link>
    </div>
  );
};
