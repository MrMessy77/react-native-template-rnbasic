import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

import { pxToDp, style } from '@/tools';

const styles = StyleSheet.create({
  ...style,
  content: {width: pxToDp(630), height: pxToDp(90), borderRadius: pxToDp(10), backgroundColor: '#F8F8F8', paddingLeft: pxToDp(30), paddingRight: pxToDp(30)}
});

export default ({ leftComponent, rightComponent, placeholder, onChangeText, style = {}, ...rest }) => {

  return (
    <View style={[styles.flex, styles.flex_direction_row, styles.align_center, styles.content, style]}>
      {leftComponent}
      <Input
        containerStyle={{ flex: 1, marginRight: pxToDp(20), height: '100%', paddingHorizontal: 0 }}
        inputContainerStyle={{ width: '100%', height: '100%', borderBottomWidth: 0 }}
        inputStyle={{ fontSize: pxToDp(28) }}
        autoFocus={false}
        autoCapitalize="none"
        autoCorrect={false}
        selectionColor="#FF3A3A"
        placeholderTextColor="#999"
        placeholder={placeholder || ''}
        onChangeText={onChangeText}
        {...rest}
      />
      {rightComponent}
    </View>
  );
}