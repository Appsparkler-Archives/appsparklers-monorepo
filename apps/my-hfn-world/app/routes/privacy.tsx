import type { MetaFunction } from "@netlify/remix-runtime";
import { PrivacyPolicyPage } from "@repo/my-hfn-world-pages";

export const meta: MetaFunction = () => {
	return [
		{ title: "Privacy Policy - My HFN World" },
		{
			name: "description",
			content: "An app to support us in our daily HFN abhyaas.",
		},
	];
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * PrivacyPage component renders the PrivacyPolicyPage component.
 * This component is responsible for displaying the privacy policy
 * information to the user.
 */

/******  efdd3824-ed5e-4cdc-beac-a9d1c47b1785  *******/
export default function PrivacyPage() {
	return <PrivacyPolicyPage />;
}
