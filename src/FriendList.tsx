import { VStack } from "@chakra-ui/react";
import { Friend } from "./Friend";
import { Amigo } from "./mocks/mockData";

type FriendListProps = {
	friendList: Amigo[];
	friendSelected: string;
	onFriendSelection: (myBillValue: string) => void;
};

export const FriendList = ({
	friendList,
	friendSelected,
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
					friendSelected={friendSelected}
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
