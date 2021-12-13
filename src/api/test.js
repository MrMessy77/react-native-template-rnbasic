import { axiosRequest, responseHandle } from '../tools/network';

// get请求
const get = async () => {
  return responseHandle(await axiosRequest(`api`, {
    params: {}
  }));
};

// post请求
const post = async () => {
  return responseHandle(await axiosRequest(`api`, {
    method: 'POST',
    data: {}
  }));
};