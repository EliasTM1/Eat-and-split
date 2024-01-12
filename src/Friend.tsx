import { HStack, Img, VStack, Text, Button, Avatar } from "@chakra-ui/react";
import { Amigo } from "./mocks/mockData";

type FriendProps = Amigo & {
	onFriendSelection: (myBillValue: string) => void;
};

export const Friend = ({
	balance,
	image,
	name,
	onFriendSelection,
}: FriendProps) => {
	return (
		<HStack
			// justifyContent='space-between'
			backgroundColor='brand.50'
			padding='1rem'
			gap='1rem'
			borderRadius='10px'
			border='1px solid black'
			width='100%'
		>
			{image === "" ? (
				<Avatar name={name} border='1px solid black' />
			) : (
				<Img src={image} borderRadius='25' />
			)}
			<VStack flexGrow={1} alignItems='right' gap='0'>
				<Text>{name}</Text>
				<Text fontWeight="bolder" color={balance === 0 ? 'brand.90' : balance > 0 ? 'currencyCode.positive' : 'currencyCode.negative' }>
					{balance === 0
						? "Even Steven"
						: balance > 0
						? `You owe ${name} €${Math.abs(balance)}`
						: `${name} owes you €${balance}`}
				</Text>
			</VStack>
			<Button
				onClick={() => onFriendSelection(name)}
				backgroundColor='brand.10'
				color="brand.50"
				_hover={{backgroundColor: "brand.20"}}
			>
				Select
			</Button>
		</HStack>
	);
};
