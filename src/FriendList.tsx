import { VStack } from "@chakra-ui/react";
import { Friend } from "./Friend";
import { initialFriends } from "./mocks/mockData";

type FriendListProps = {
	onFriendSelection: (myBillValue: string) => void;
};

export const FriendList = ({onFriendSelection}: FriendListProps) => {
	return (
		<VStack marginBottom='2rem' position='static'>
			{initialFriends.map(({ balance, id, image, name }, index) => (
				<Friend
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
