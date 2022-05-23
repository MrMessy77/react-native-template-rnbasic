import pxToDp from './pxToDp';

const isDebug = false;
let baseURL = '';
if (isDebug) {
  baseURL = 'http://youban.dev.zhangxinkeji.com/';
} else {
  baseURL = 'http://app.ybteams.com/';
}

export default {
  // http访问url
  baseURL: baseURL,
  // 路由基础配置
  screenOptions: {
    headerStyle: { backgroundColor: '#fff', borderBottomColor: '#fff', borderBottomWidth: 0, elevation: 0, shadowOpacity: 0 },
    headerTintColor: '#28282C',
    headerTitleStyle: { fontSize: pxToDp(34) },
    headerBackTitle: ' '
  },
  // 第三方配置
  third: {}
}
