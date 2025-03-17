import {FeaturesTitle} from "~/modules/features-title/features-title";

export function meta() {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home() {
    return <FeaturesTitle/>;
}
