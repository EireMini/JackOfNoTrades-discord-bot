import { Document, model, Schema } from "mongoose";

export interface UserInterface extends Document {
	id: string;
	isAdmin: boolean;
	hasPriority: boolean;
	isSubscribed: boolean;
	flag: string;
}

export const UserModel = new Schema(
	{
		id: String,
		isAdmin: Boolean,
		hasPriority: Boolean,
		isSubscribed: Boolean,
		flag: String
	},
	{ collection: "users" }
);

export default model<UserInterface>("users", UserModel);
