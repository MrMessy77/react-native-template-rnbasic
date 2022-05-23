import { PermissionsAndroid, Platform } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImageMultiPicker from 'react-native-image-crop-picker';
import { ActionSheet } from '@ant-design/react-native';
import CheckPermission from './checkPermission';

const pickerActionSheet = (title = '选择图片', cb) => {
  ActionSheet.showActionSheetWithOptions(
    {
      title: undefined,
      options: [
        '拍照',
        '相册',
        '取消',
      ],
      cancelButtonIndex: 2,
      destructiveButtonIndex: 2,
    },
    buttonIndex => {
      cb(buttonIndex);
    }
  );
}

// 拍照/相册
const takePhoto = async (options) => {
  const { multi, crop, title } = options;


  // 单图
  if (!multi) {
    if (crop) {
      try {
        let result = await CheckPermission.PhotoLibrary();
        if (result) {
          let response = await ImageMultiPicker.openPicker({
            // includeBase64: true,
            // multiple: false,
            // cropping: true,
            ...options
          });
          response.uri = response.path;
          response.fileName = response.path.split('/').pop();
          return [response];
        } else {
          throw new Error('打开相册失败');
        }
      } catch (e) {
        throw new Error(e.message);
      }
    } else {
      return new Promise((resolve, reject) => {
        pickerActionSheet(title, async (buttonIndex) => {
          if (buttonIndex === 0) {//拍照
            try {
              if (Platform.OS === 'android') {
                await PermissionsAndroid.requestMultiple([
                  PermissionsAndroid.PERMISSIONS.CAMERA
                ]);
              }
              let result = await CheckPermission.Camera();

              if (result) {
                let response = await launchCamera(options);
                resolve(response.assets);
              } else {
                reject(new Error('打开摄像头失败'));
              }
            } catch (e) {
              reject(new Error(e.message));
            }
          } else if (buttonIndex === 1) {//相册
            try {
              let response = await launchImageLibrary(options);
              resolve(response.assets);
            } catch (e) {
              reject(new Error(e.message));
            }
          }
        });
      });
    }
  } else {
    try {
      await CheckPermission.PhotoLibrary();
      let response = await ImageMultiPicker.openPicker({
        includeBase64: true,
        multiple: true,
        ...options
      });
      response.forEach(el => {
        el.uri = el.path;
        el.fileName = el.path.split('/').pop();
      });
      return response;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export default {
  takePhoto
}

