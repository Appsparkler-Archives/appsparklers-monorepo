import type { MetaFunction } from "@netlify/remix-runtime";
import { App } from "./App";

export const meta: MetaFunction = () => {
	return [
		{ title: "My HFN World" },
		{
			name: "description",
			content: "An app to support us in our daily HFN abhyaas.",
		},
	];
};
export default function Index() {
	return <App />;
}
