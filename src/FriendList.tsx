import { VStack } from "@chakra-ui/react";
import { Friend } from "./Friend";
import { Amigo } from "./mocks/mockData";

type FriendListProps = {
	friendList: Amigo[];
	selectedFriend: Amigo;
	onFriendSelection: (selectedFriend: number) => void;
};

export const FriendList = ({
	friendList,
	selectedFriend,
	onFriendSelection,
}: FriendListProps) => {
	return (
		<VStack
			marginBottom='2rem'
			position='static'
			overflow='scroll'
			sx={{ "&::-webkit-scrollbar": { display: "none" } }}
			css={{ scrollbarWidth: "none" }}
		>
			{friendList.map(({ balance, id, image, name }, index) => (
				<Friend
					selectedFriend={selectedFriend}
					onFriendSelection={onFriendSelection}
					key={index}
					balance={balance}
					id={id}
					image={image}
					name={name}
				/>
			))}
		</VStack>
	);
};
