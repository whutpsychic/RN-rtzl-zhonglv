import postData from '../core/myFetch.js';
import config from '../config.js';
import Toast from '../components/Toast/index';
import mockData from './mockData.js';
import storage from '../core/storage.js';

// main-query
const {mainQueryData} = mockData;
// =================================================
let defaultUrl = '192.168.0.133';
let defaultPort = '18085';

// 超时设置
const loginTimeout = 2000;
const timeout = 10000;
const api = {};

// ***************************************************
// 简化一般请求方法
const buildFetcher = (url, data = {}, type) => {
	// 先确认地址
	let commonPrefix = '';
	let p1 = storage.getData('zhonglv_URL');
	let p2 = storage.getData('zhonglv_Port');
	return Promise.all([p1, p2])
		.then((resArr) => {
			commonPrefix = `http://${resArr[0] || defaultUrl}:${
				resArr[1] || defaultPort
			}/api/consumer/`;

			return commonPrefix;
		})
		.then((commonPrefix) => {
			const controller = new AbortController();
			let signal = controller.signal;

			const timeoutPromise = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve({errcode: 504, errmsg: 'timeout'});
					controller.abort();
				}, timeout);
			});

			const fetchPromise = postData(commonPrefix + url, data, signal, type)
				.then((response) => {
					// return response;
					return response.json();
				})
				.catch((err) => {
					// 超时之后的错误不予以处理
					console.log(err);
					return {errcode: 256, errmsg: 'failed'};
				});

			return Promise.race([fetchPromise, timeoutPromise]);
		});
};

// ***************************************************
// =============================================================

// 登录
// 返回:
// response(成功)/err(错误)/undefined(超时)
api.login = (userName, password) => {
	const controller = new AbortController();
	let signal = controller.signal;

	let url = '';
	let p1 = storage.getData('zhonglv_URL');
	let p2 = storage.getData('zhonglv_Port');

	return Promise.all([p1, p2]).then((resArr) => {
		url = `http://${resArr[0] || defaultUrl}:${resArr[1] || defaultPort}`;
		const timeoutPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(new Response('timeout', {status: 504, statusText: 'timeout'}));
				controller.abort();
			}, loginTimeout);
		});

		const fetchPromise = postData(
			url + '/login',
			{userName, password},
			signal,
			'post',
		)
			.then((response) => {
				return response.json();
			})
			.catch((err) => {
				// 超时之后的错误不予以处理
				console.log(err);
			});

		return Promise.race([fetchPromise, timeoutPromise]);
	});
};

// ==========================公用接口================================

// 机构树数据
api.getInstitutionsTree = () => {
	return buildFetcher('institutions/tree', {lng: 'cn'}, 'get');
};
// ==========================页面接口================================

// 选择树之后装填默认数据
api.getDefaultValues = (date, number) => {
	console.log(date, number);
	return buildFetcher(
		`productingRecord/cellAnyDayReport/${date}/${number}`,
		{lng: 'cn'},
		'get',
	);
};

// 提交录入内容
api.postData = (condition) => {
	return buildFetcher('productingRecord/insertOrUpdate', condition, 'post');
};

export default api;
