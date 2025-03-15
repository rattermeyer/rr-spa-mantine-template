import { FeaturesTitle } from "~/pages/features-title/features-title";
import { Welcome } from "~/pages/welcome/welcome";
import type { Route } from "./+types/home";

export function meta() {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return <FeaturesTitle />;
}
