import { Linking, Alert, Platform } from 'react-native';
import { ActionSheet } from '@ant-design/react-native';

// 数字转换成中文数字
const toChineseNum = (num) => {
  var index = 0;
  var chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  var chnUnitChar = ["", "十", "百", "千"];
  var strIns = '', chnStr = '';
  var unitPos = 0;
  var zero = true;
  while (num > 0) {
    index++;
    var v = num % 10;
    if (v === 0) {
      if (!zero) {
        zero = true;
        chnStr = chnNumChar[v] + chnStr;
      }
    } else {
      zero = false;
      strIns = chnNumChar[v];
      if (strIns == '一' && chnUnitChar[unitPos] == "十") strIns = "";
      strIns += chnUnitChar[unitPos];
      chnStr = strIns + chnStr;
    }
    unitPos++;
    num = Math.floor(num / 10);
  }
  return chnStr;
}

// 拨打电话
const call = (phone) => {
  const url = `tel:${phone}`;
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      Alert.alert('提示', `您的设备不支持该功能，请手动拨打 ${phone}`, [
        { text: '确定' }
      ]);
      return
    }
    ActionSheet.showActionSheetWithOptions(
      {
        title: phone,
        options: [
          '呼叫',
          '取消',
        ],
        cancelButtonIndex: 1,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          Linking.openURL(url);
        }
      }
    );
    return
  }).catch((e) => {
    // console.log(e)
  });
}

// 版本对比
const versionfunegt = (ver1, ver2) => {
  var version1pre = parseFloat(ver1);
  var version2pre = parseFloat(ver2);
  var version1next = ver1.replace(version1pre + ".", "");
  var version2next = ver2.replace(version2pre + ".", "");
  if (version1pre > version2pre) {
    return true;
  } else if (version1pre < version2pre) {
    return false;
  } else {
    if (version1next >= version2next) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  toChineseNum,
  call,
  versionfunegt
};