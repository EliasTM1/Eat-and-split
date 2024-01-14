export type AddFriendFormProps = {
	onAddFriend: (friend: Amigo) => void;
};

export type BillFormProps = {
	total: number;
	myExpense: number;
	remainToPay: number;
	friendSelected: Amigo;
	onSplitBill: (
		friendId: number,
		updatedBalance: number,
		whoIsPaying: whoPaysT
	) => void;
	onBillChange: (billValue: number) => void;
	onMyBillChange: (myBillValue: number) => void;
};

export type whoPaysT = "user" | "friend";

export type FriendProps = Amigo & {
	selectedFriend: Amigo;
	onFriendSelection: (myBillValue: number) => void;
};

export type FriendListProps = {
	friendList: Amigo[];
	selectedFriend: Amigo;
	onFriendSelection: (selectedFriend: number) => void;
};

export type Amigo = {
	id: number;
	name: string;
	image: string;
	balance: number;
};
