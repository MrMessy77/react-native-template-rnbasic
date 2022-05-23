import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextareaItem } from '@ant-design/react-native';

import { style, pxToDp } from '@/tools';

const styles = StyleSheet.create({
  ...style,
  content: { width: pxToDp(630), height: pxToDp(200), borderRadius: pxToDp(10), backgroundColor: '#F8F8F8', paddingHorizontal: pxToDp(30), paddingVertical: pxToDp(10) }
});

export default ({ placeholder, rows, style = {}, ...rest }) => {
  return (
    <View style={[styles.flex, styles.content, style]}>
      <TextareaItem
        rows={rows || 4}
        last
        selectionColor="#FF3A3A"
        style={{ fontSize: pxToDp(28), paddingHorizontal: 0, height: '100%', backgroundColor: 'transparent' }}
        placeholderTextColor="#999"
        placeholder={placeholder || ''}
        {...rest}
      />
    </View>
  );
}