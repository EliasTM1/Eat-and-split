import { Heading, VStack, Text, Input, Select, Button } from "@chakra-ui/react";
import { useState } from "react";
import { BillFormProps, whoPaysT } from "./types";


export const BillForm = ({
	total, // * Total of the bill
	myExpense, // * What the user spent
	remainToPay, // * What is left to pay
	friendSelected, // * who is the current friend
	onSplitBill, // * who is the current friend
	onBillChange, // * initial bill change
	onMyBillChange, // * update the bill
}: BillFormProps) => {
	const [whosPaying, setWhosPaying] = useState<whoPaysT>("user");

	return friendSelected.name ? (
		<VStack
			borderRadius='10px'
			border='1px solid black'
			backgroundColor='brand.50'
			alignItems='left'
			padding='1rem'
			width='400px'
		>
			<Heading>Split a bill with {friendSelected.name}</Heading>
			<Text>💰💰 Bill value </Text>
			<Input
				value={total}
				onChange={(e) => onBillChange(Number(e.target.value))}
			/>
			<Text>😨 Your expense </Text>
			<Input
				value={myExpense}
				onChange={(e) => onMyBillChange(Number(e.target.value))}
			/>
			<Text>👯 {friendSelected.name}'s expense </Text>
			<Input readOnly disabled value={remainToPay} />
			<Text>🤑 Who is paying the bill? </Text>
			<Select
				cursor='pointer'
				value={whosPaying}
				onChange={(e) => setWhosPaying(e.target.value as whoPaysT)}
			>
				Manzano98mil3
				<option value='user'>You</option>
				<option value='friend'>{friendSelected.name}</option>
			</Select>
			<Button
				mt='1rem'
				backgroundColor='brand.10'
				color='brand.50'
				onClick={() => onSplitBill(friendSelected.id, remainToPay, whosPaying)}
			>
				Split Bill
			</Button>
		</VStack>
	) : (
		<></>
	);
};
