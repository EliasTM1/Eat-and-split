import { Box, HStack, VStack } from "@chakra-ui/react";
import { FriendList } from "./FriendList";
import { AddFriendForm } from "./AddFriendForm";
import { BillForm } from "./BillForm";
import { useState } from "react";
import { Amigo, initialFriends } from "./mocks/mockData";

function App() {
	const [friendsList, setFriendsList] = useState<Amigo[]>(initialFriends);
	const [billValue, setBillValue] = useState<number>(0);
	const [myBillExpense, setMyBillExpense] = useState<number>(0);
	const [friendSelected, setFriendSelected] = useState<string>("");
	// * Derived state
	const remainToPay =
		myBillExpense === 0 ? billValue : billValue - myBillExpense;

	function handleBillChange(billValue: number) {
		setBillValue(billValue);
	}

	function handleMyExpense(myBillValue: number) {
		setMyBillExpense(myBillValue);
	}

	function handleFriendSelection(friend: string) {
		if (friend === friendSelected) {
			setFriendSelected("");
			return;
		}
		setFriendSelected(friend);
	}

	function handleAddFriend(friend: Amigo) {
		setFriendsList((previusState) => [...previusState, friend]);
	}

	function splitTheBill(friendId: number, updatedBalance: number) {
		const foundFriend = friendsList.find((friend) => friend.id === friendId);
		if (!foundFriend) return;
		foundFriend.balance = updatedBalance;
		setFriendsList((previousState) => [...previousState, foundFriend]);
	}

	return (
		<Box
			height='100vh'
			backgroundColor='brand.90'
			display='flex'
			justifyContent='center'
		>
			<HStack
				justifyContent='center'
				alignItems='center'
				backgroundColor='brand.70'
				width='100%'
			>
				<VStack height='50%'>
					<FriendList
						friendList={friendsList}
						friendSelected={friendSelected}
						onFriendSelection={handleFriendSelection}
					/>
					<AddFriendForm onAddFriend={handleAddFriend} />
				</VStack>
				<VStack height='50%'>
					<BillForm
						friendSelected={friendSelected}
						remainToPay={remainToPay}
						myExpense={myBillExpense}
						total={billValue}
						// onSplitBill={splitTheBill}
						onMyBillChange={handleMyExpense}
						onBillChange={handleBillChange}
					/>
				</VStack>
			</HStack>
		</Box>
	);
}

export default App;
