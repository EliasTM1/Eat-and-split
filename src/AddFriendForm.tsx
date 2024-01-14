import { VStack, Text, Input, Button, Box } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { AddFriendFormProps } from "./types";



export const AddFriendForm = ({ onAddFriend }: AddFriendFormProps) => {
	// * Form State
	const [friendName, setFriendName] = useState("");
	const [friendImage, setFriendImage] = useState("");

	const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

	function toggleForm() {
		setIsFormOpen((previous) => !previous);
	}

	function createFriend(e: FormEvent) {
		friendName.trim()
		if(friendName === "") return

		e.preventDefault()
		onAddFriend({
			name: friendName,
			image: friendImage,
			balance: 0,
			id: Date.now(),
		});
		setFriendImage("")
		setFriendName("")
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
					<form onSubmit={(e) => createFriend(e)}>
						<Text>👯 Friend name </Text>
						<Input
							value={friendName}
							onChange={(e) => setFriendName(e.target.value)}
						/>
						<Text>🌆 Image URL </Text>
						<Input
							value={friendImage}
							onChange={(e) => setFriendImage(e.target.value)}
						/>
						<Button
							width='100%'
							mt='1rem'
							backgroundColor='brand.20'
							type="submit"
							onClick={(e) => createFriend(e)}
						>
							Add Friend
						</Button>
					</form>
				</VStack>
			) : null}
		</Box>
	);
};
