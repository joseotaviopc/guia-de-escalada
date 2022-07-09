// Just a small function which destroys the session on the server side

import { withIronSessionApiRoute } from 'iron-session/next';

const cookie = {
	cookieName: import.meta.env.COOKIE_NAME,
	password: import.meta.env.COOKIE_PASSWORD,
	cookieOptions: { secure: import.meta.env.NODE_ENV === 'production' },
};

export default withIronSessionApiRoute(function signOut(req: any, res: any) {
	req.session.destroy();
	res.status(200).json({ ok: true });
}, cookie);
