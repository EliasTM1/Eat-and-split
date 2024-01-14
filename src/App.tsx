import { Box, HStack, VStack } from "@chakra-ui/react";
import { FriendList } from "./FriendList";
import { AddFriendForm } from "./AddFriendForm";
import { BillForm, whoPaysT } from "./BillForm";
import { useState } from "react";
import { Amigo, initialFriends } from "./mocks/mockData";

function App() {
	const [friendsList, setFriendsList] = useState<Amigo[]>(initialFriends);
	const [billValue, setBillValue] = useState<number>(0);
	const [myBillExpense, setMyBillExpense] = useState<number>(0);
	const [friendSelected, setFriendSelected] = useState<Amigo>({} as Amigo);
	// * Derived state
	const remainToPay =
		myBillExpense === 0 ? billValue : billValue - myBillExpense;
	const handleAddFriend = (friend: Amigo) =>
		setFriendsList((previusState) => [...previusState, friend]);
	const getCurrentId = (friendId: number) =>
		friendsList.find((friend) => friend.id === friendId);

	function handleBillChange(billValue: number) {
		setBillValue(billValue);
	}

	function handleMyExpense(myBillValue: number) {
		setMyBillExpense(myBillValue);
	}

	function handleFriendSelection(friendId: number) {
		const foundFriend = getCurrentId(friendId);
		if (friendId === friendSelected.id) {
			setFriendSelected({} as Amigo);
			return;
		}

		if (!foundFriend) return;

		setFriendSelected(foundFriend!);
	}

	function splitTheBill(friendId: number, updatedBalance: number, whoIsPaying: whoPaysT) {
		const foundFriend = getCurrentId(friendId);
		if (!foundFriend) return;
		foundFriend.balance =  whoIsPaying === 'user' ? -1 * updatedBalance : updatedBalance 
		const popCurrent: Amigo[] = friendsList.filter(e => e.id !== friendId);
		setFriendsList([foundFriend, ...popCurrent])
		setBillValue(0)
		setMyBillExpense(0)
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
						selectedFriend={friendSelected}
						friendList={friendsList}
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
						onSplitBill={splitTheBill}
						onMyBillChange={handleMyExpense}
						onBillChange={handleBillChange}
					/>
				</VStack>
			</HStack>
		</Box>
	);
}

export default App;
