import { Heading, VStack, Text, Input, Select, Button } from "@chakra-ui/react";
import { useState } from "react";

type BillFormProps = {
	total: number;
	myExpense: number;
	remainToPay: number;
	friendSelected: string;
	handleBillSplit?: (number: number) => void;
	onBillChange: (billValue: number) => void;
	onMyBillChange: (myBillValue: number) => void;
};

type whoPaysT = "user" | "friend";

export const BillForm = ({
	total, // * Total of the bill
	myExpense, // * What the user spent
	remainToPay, // * What is left to pay
	friendSelected, // * who is the current friend
	// handleBillSplit, // * who is the current friend
	onBillChange, // * initial bill change
	onMyBillChange, // * update the bill
}: BillFormProps) => {
	const [whosPaying, setWhosPaying] = useState<whoPaysT>("user");
	return friendSelected !== "" ? (
		<VStack
			borderRadius='10px'
			border='1px solid black'
			backgroundColor='brand.50'
			alignItems='left'
			padding='1rem'
			width='400px'
		>
			<Heading>Split a bill with {friendSelected}</Heading>
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
			<Text>👯 {friendSelected}'s expense </Text>
			<Input readOnly disabled value={remainToPay} />
			<Text>🤑 Who is paying the bill? </Text>
			<Select
				cursor='pointer'
				value={whosPaying}
				onChange={(e) => setWhosPaying(e.target.value as whoPaysT)}
			>
				<option value='user'>You</option>
				<option value='friend'>{friendSelected}</option>
			</Select>
			<Button mt='1rem' backgroundColor='brand.10' color='brand.50'>
				Split Bill
			</Button>
		</VStack>
	) : (
		<></>
	);
};
