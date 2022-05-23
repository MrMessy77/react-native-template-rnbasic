import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { pxToDp, style } from '@/tools';

const styles = StyleSheet.create({
  ...style,
  buttonStyle: { width: pxToDp(630), height: pxToDp(90), borderRadius: pxToDp(10), backgroundColor: '#fff', elevation: 0 },
  text: { fontSize: pxToDp(30), fontWeight: '500' }
});

export default ({ title, onPress, style = {}, containerStyle = {}, buttonStyle = {}, titleStyle = {}, ...rest }) => {
  return (
    <Button
      {...rest}
      title={title}
      containerStyle={containerStyle}
      buttonStyle={[styles.buttonStyle, buttonStyle]}
      titleStyle={[styles.text, titleStyle]}
      onPress={onPress}
    />
  );
}