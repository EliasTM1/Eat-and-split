import { VStack, Text, Input, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

export const AddFriendForm = () => {
	const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

	function toggleForm() {
		setIsFormOpen((previous) => !previous);
	}

	return (
		<Box position='relative' width='100%'>
			<Button
				position='absolute'
				backgroundColor='brand.10'
				top='-20px'
				right='5'
				onClick={toggleForm}
				color='brand.50'
				_hover={{
					backgroundColor: "presets.20",
				}}
			>
				{isFormOpen ? "Close" : "Add Friend"}
			</Button>
			{isFormOpen ? (
				<VStack
					backgroundColor='brand.50'
					width='100%'
					border='1px solid black'
					borderRadius='10px'
					padding='1rem'
					alignItems='flex-start'
				>
					<Text>👯 Friend name </Text>
					<Input />
					<Text>🌆 Image URL </Text>
					<Input />
					<Button width='100%' mt='1rem' backgroundColor='brand.20'>
						Split Bill
					</Button>
				</VStack>
			) : null}
		</Box>
	);
};
