import { Box, HStack, VStack } from "@chakra-ui/react";
import { FriendList } from "./FriendList";
import { AddFriendForm } from "./AddFriendForm";
import { BillForm } from "./BillForm";
import { useState } from "react";

function App() {
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
		setFriendSelected(friend);
	}

	// function clearFriendSelection() {
	// 	setFriendSelected("");
	// }

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
					<FriendList onFriendSelection={handleFriendSelection} />
					<AddFriendForm />
				</VStack>
				<VStack height='50%'>
					<BillForm
						friendSelected={friendSelected}
						remainToPay={remainToPay}
						myExpense={myBillExpense}
						total={billValue}
						onMyBillChange={handleMyExpense}
						onBillChange={handleBillChange}
					/>
				</VStack>
			</HStack>
		</Box>
	);
}

export default App;
