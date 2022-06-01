import { errorHandler } from "../utils/errorHandler";
import UserModel, { UserInterface } from "../database/models/UserModel";

export const isAdmin = async (user_id: string) => {
	try {
		const userData = await UserModel.findOne({ id: user_id });
		if (userData) return userData.isAdmin;
		return false;
	} catch (error) {
		errorHandler("getUserData module", error);
		return false;
	}
};

export const getUserData = async (user_id: string): Promise<UserInterface | null> => {
	try {
		const userData = await UserModel.findOne({ id: user_id });
		return userData;
	} catch (error) {
		errorHandler("getUserData module", error);
		return null;
	}
};

export const getUserFlag = async (user_id: string): Promise<string> => {
	try {
		const userData = await UserModel.findOne({ id: user_id });
		if(userData == null)
			return ' '
		return userData.flag;
	} catch (error) {
		errorHandler("getUserFlag module", error);
		return ' ';
	}
};

export const subscribeUser = async (user_id: string) => {
	try {
		const userData = await UserModel.findOne({ id: user_id });
		if (userData) {
			userData.isSubscribed = true;
			UserModel.updateOne({ id: user_id }, userData);
		} else {
			UserModel.create({ id: user_id, isSubscribed: true });
		}
	} catch (error) {
		errorHandler("subscribeUser module", error);
		return null;
	}
};

export const unsubscribeUser = async (user_id: string) => {
	try {
		const userData = await UserModel.findOne({ id: user_id });
		if (userData) {
			userData.isSubscribed = false;
			UserModel.updateOne({ id: user_id }, userData);
		}
	} catch (error) {
		errorHandler("unsubscribeUser module", error);
		return null;
	}
};

export const registerFlag = async (user_id: string, flag: string) => {
	try {
		const userData = await UserModel.findOne({ id: user_id });
		if (userData) {
			userData.flag = flag;
			UserModel.updateOne({ id: user_id }, userData);
		} else {
			UserModel.create({ id: user_id, flag: flag });
		}
	} catch (error) {
		errorHandler("registerFlag module", error);
		return null;
	}
};

export const unregisterFlag = async (user_id: string) => {
	try {
		const userData = await UserModel.findOne({ id: user_id });
		if (userData) {
			userData.flag = '';
			UserModel.updateOne({ id: user_id }, userData);
		}
	} catch (error) {
		errorHandler("unregisterFlag module", error);
		return null;
	}
};

export const getSubscribers = async (): Promise<UserInterface[] | null> => {
	try {
		const userData = await UserModel.find({ isSubscribed: true });
		return userData;
	} catch (error) {
		errorHandler("getSubscribers module", error);
		return null;
	}
};

export const getRegisteredFlags = async (): Promise<UserInterface[] | null> => {
	try {
		const userData = await UserModel.find({ isFlag: !!"" });
		return userData;
	} catch (error) {
		errorHandler("getRegisteredFlags module", error);
		return null;
	}
};
