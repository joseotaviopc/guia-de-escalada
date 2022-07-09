import { createContext, ReactNode, useContext, useState } from 'react';

type TProviderChildren = {
	children: ReactNode;
};

const initialValue = {
	user: '',
	setUser: (value: string) => {},
	email: '',
	setEmail: (value: string) => {},
};

export const UserContext = createContext<typeof initialValue>(initialValue);

export const UserProvider = ({ children }: TProviderChildren) => {
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');

	return (
		<UserContext.Provider value={{ user, setUser, email, setEmail }}>
			{children}
		</UserContext.Provider>
	);
};

export function useUser() {
	const context = useContext(UserContext);

	return context;
}
