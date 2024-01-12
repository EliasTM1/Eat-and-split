import { Heading, VStack, Text, Input, Select, Button } from "@chakra-ui/react";

type BillFormProps = {
	total: number;
	myExpense: number;
	remainToPay: number; 
	friendSelected: string;
	onBillChange: (billValue: number) => void;
	onMyBillChange: (myBillValue: number) => void;
};

export const BillForm = ({
	total,
	myExpense,
	remainToPay,
	friendSelected,
	onBillChange,
	onMyBillChange,
}: BillFormProps) => {
	return (
		friendSelected !== "" ?  
		<VStack
			borderRadius='10px'
			border='1px solid black'
			backgroundColor='brand.50'
			alignItems='left'
			padding='1rem'
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
			<Text>👯 ______ expense </Text>
			<Input readOnly disabled value={remainToPay} />
			<Text>🤑 Who is paying the bill? </Text>
			<Select cursor='pointer'>
				<option>You</option>
				<option>_______</option>
			</Select>
			<Button mt='1rem' backgroundColor='brand.20'>
				Split Bill
			</Button>
		</VStack>:
		<></>
	);
};
