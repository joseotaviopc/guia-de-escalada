import { createContext, ReactNode, useContext, useState } from "react";

type TProviderChildren = {
	children: ReactNode;
};

interface User {
	displayName: string;
	photoURL: string;
	refreshToken: string;
}

const initialValue = {
	user: {
		displayName: "",
		photoURL: "",
		refreshToken: "",
	},
	setUser: (value: User) => {},
};

export const UserContext = createContext<typeof initialValue>(initialValue);

export const UserProvider = ({ children }: TProviderChildren) => {
	const [user, setUser] = useState(initialValue.user);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export function useUser() {
	const context = useContext(UserContext);

	return context;
}
