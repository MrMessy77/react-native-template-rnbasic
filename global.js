import React from 'react';
import { LogBox, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import moment from 'moment';
import * as Tools from './src/tools';
import { Toast } from './src/tools/components';

//去除打印盒子
LogBox.ignoreAllLogs();

global._ = _;
global.moment = moment;
global.Toast = Toast;

// Tools 工具库全局声明
Object.entries(Tools).map(([name, func]) => {
  global[name] = func;
});


//定制组件
//去除点击透明化
const TouchRender = TouchableOpacity.render;
TouchableOpacity.render = function(...args) {
  const originTouch = TouchRender.apply(this, args);
  return React.cloneElement(originTouch, {
    activeOpacity: 1
  });
};


