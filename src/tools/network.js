import axios from 'axios';
import defConfig from './config';
import AsyncStorage from '@react-native-community/async-storage';

axios.defaults.baseURL = defConfig.baseURL;

const defultHandles = {
	loading: false,
	toast: true
};

const requestConfig = async (options = {}) => {
	let handles = _.cloneDeep(defultHandles);
	!_.isUndefined(options.loading) && (handles.loading = options.loading);
	!_.isUndefined(options.toast) && (handles.toast = options.toast);

	try {
		let token = await AsyncStorage.getItem('token');

		let config = { data: {}, params: {} };
		options.params && (config.params = { ...config.params, ...options.params });
		options.data && (config.data = { ...config.data, ...options.data });
		options.method && (config.method = options.method);
		options.headers && (config.headers = options.headers);

		if (token) {
			config.headers = {
				'Authorization': `Bearer ${token}`,
				...config.headers
			};
		}
		
		return { config, handles }; 
	} catch (e) {
		throw new Error('get token error');
	}
};

const axiosRequestWithMethod = async (url, options = {}) => {
	const { config, handles } = await requestConfig(options);

	let key = null;
	if (handles.loading) {
		key = Toast.show('加载中...', 'loading');
	}

	config.url = url;
	// config.data = qs.stringify(config.data);
	try {
		let result = await axios(config);

		handles.loading && Toast.hide(key);
		return result.data || {};
	} catch (e) {
		handles.loading && Toast.hide(key);
		let msg = '';
		msg = e && e.response && (_.isObject(e.response.data) ? e.message : e.response.data);

		handles.toast && Toast.show(msg, 'fail', 2);
		throw new Error(msg);
	}
};

const axiosGet = async (url, options = {}) => {
	const { config, handles } = await requestConfig(options);

	let key = null;
	if (handles.loading) {
		key = Toast.show('加载中...', 'loading');
	}

	try {
		let result = await axios.get(url, { params: config.params, headers: config.headers });

		handles.loading && Toast.hide(key);
		return result.data || {};
	} catch (e) {
		handles.loading && Toast.hide(key);
		let msg = '';
		console.log(e)
		msg = e && e.response && _.isObject(e.response.data) ? e.response.data : e.message;
		console.log(msg)

		handles.toast && Toast.show(msg, 'fail', 2);
		throw new Error(msg);
	}
};

const axiosRequest = async (url, options = {}) => {
	if (options.method) {
		return await axiosRequestWithMethod(url, options);
	} else {
		return await axiosGet(url, options);
	}
};

//接口结果返回处理
const responseHandle = (responseData) => {
	if (responseData.code === 0) {
		return responseData.data || {};
	} else {
		throw new Error(responseData.msg || '');
	}
};

module.exports = {
	axiosRequest,
	responseHandle
};
