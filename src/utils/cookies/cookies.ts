type TSetCookie = {
	name: string;
	value: string;
	expireDays: number;
};

type TCookieObject = {
	[key: string]: string;
} & {
	userName?: string;
	token?: string;
	refreshToken?: string;
};

export default {
	get() {
		const decodedCookie = decodeURIComponent(document.cookie);
		const cookieObject: TCookieObject = decodedCookie
			.split(';')
			.map((cookie) => cookie.split('='))
			.reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});

		return cookieObject;
	},
	set({ name, value, expireDays }: TSetCookie) {
		const date = new Date();
		date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
		const expires = `expires=${date.toUTCString()}`;
		document.cookie = `${name}=${value};${expires};path=/`;
	},
	delete(name: string) {
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	},
};
