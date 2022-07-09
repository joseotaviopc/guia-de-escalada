import axios, { AxiosResponse } from 'axios';

import { Cookies } from '../utils';

export const axiosHttpClient = async (data: any) => {
	let axiosResponse: AxiosResponse;

	try {
		axiosResponse = await axios.request({
			url: data.url,
			method: data.method,
			data: data.body,
			headers: {
				...data.headers,
				...(data.headers?.auth && {
					Authorization: `Bearer ${Cookies.get().token}`,
				}),
				...(data.headers?.refresh && {
					'x-refresh-token': Cookies.get().refreshToken,
				}),
			},
			params: data.params,
		});
	} catch (error: any) {
		axiosResponse = error.response;
	}
	return {
		statusCode: axiosResponse?.status,
		body: axiosResponse?.data,
	};
};
