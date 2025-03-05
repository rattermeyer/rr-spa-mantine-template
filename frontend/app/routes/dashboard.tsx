import { Text } from "@mantine/core";

const lorem =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia, reprehenderit, earum fugiat?";

export default function Dashboard() {
	return (
		<div>
			Dashboard
			{Array(40)
				.fill(0)
				.map((_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Text size="lg" key={index} my="md" maw={600} mx="auto">
						{lorem}
					</Text>
				))}
		</div>
	);
}
