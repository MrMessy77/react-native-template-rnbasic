import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text, Image } from 'react-native';
import { Input } from 'react-native-elements';
import { TextareaItem } from '@ant-design/react-native';

import { pxToDp, style } from '@/tools';
import { Divider, Picker, DatePicker } from './index';

const styles = StyleSheet.create({
  ...style,
  container: { width: pxToDp(690), backgroundColor: '#fff', paddingLeft: pxToDp(30), paddingRight: pxToDp(30) },
  content: { minHeight: pxToDp(60), display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: pxToDp(30), marginBottom: pxToDp(30) },
  title: { fontSize: pxToDp(28), color: '#28282C', flex: 1 },
  right_text: { fontSize: pxToDp(26), color: '#6666' },
  arrow: { width: pxToDp(11), height: pxToDp(20), marginLeft: pxToDp(20) },
  placeholder: { fontSize: pxToDp(28), color: '#999' },
  picker_content: { width: pxToDp(630), height: pxToDp(90), borderRadius: pxToDp(10), backgroundColor: '#F8F8F8', paddingLeft: pxToDp(30), paddingRight: pxToDp(30) },
  require: { color: '#FF3B3B', fontSize: pxToDp(30) }
});

const ListItem = ({ leftIcon, title, titleStyle, rightIcon, rightText, hideArrow, last, onPress, type, style = {} }) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.content}>
        {
          type === 'require' && <Text style={styles.require}>*</Text>
        }
        {leftIcon}
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        {rightText && (
          <Text style={styles.right_text}>{rightText}</Text>
        )}
        {rightIcon}
        {!hideArrow && <Image style={styles.arrow} source={require('image/arrow_right.png')} />}
      </View>
      {last ? null : <Divider />}
    </Pressable>
  );
}

export const ListItemInput = ({ value, placeholder, onChangeText, symbol, ...rest }) => {
  let ListItemComponent = ListItem({
    titleStyle: { flex: 0 },
    rightIcon: (
      <Input
        value={value}
        containerStyle={{ flex: 1, marginLeft: pxToDp(20), height: pxToDp(60), paddingHorizontal: 0 }}
        inputContainerStyle={{ height: '100%', borderBottomWidth: 0 }}
        inputStyle={{ fontSize: pxToDp(26), color: '#28282C', textAlign: 'right' }}
        autoFocus={false}
        autoCapitalize="none"
        autoCorrect={false}
        selectionColor="#FF3A3A"
        placeholderTextColor="#999"
        placeholder={placeholder || ''}
        onChangeText={onChangeText}
        rightIcon={Boolean(symbol) && <Text style={{ fontSize: pxToDp(26), color: '#28282C', marginLeft: pxToDp(18) }}>{symbol}</Text>}
        {...rest}
      />
    ), ...rest
  });

  return ListItemComponent
}

export const ListItemTextarea = ({ value, placeholder, rows, onChange, symbol, textareaStyle = {}, ...rest }) => {
  let ListItemComponent = ListItem({
    titleStyle: { flex: 0 },
    rightIcon: (
      <View style={{ flex: 1 }}>
        <TextareaItem
          value={value}
          rows={rows || 4}
          last
          selectionColor="#FF3A3A"
          style={{ fontSize: pxToDp(28), color: '#28282C', paddingHorizontal: pxToDp(20), backgroundColor: '#f8f8f8', marginLeft: pxToDp(20), borderRadius: pxToDp(10), ...textareaStyle }}
          placeholderTextColor="#999"
          placeholder={placeholder || ''}
          onChange={onChange}
        />
      </View>
    ), ...rest
  });

  return ListItemComponent
}

export const ListItemPicker = ({ text, placeholder, style = {}, ...rest }) => {
  return (
    <Picker style={[styles.flex_direction_row, styles.align_center, styles.justify_between, styles.picker_content, style]} {...rest}>
      <Text style={Boolean(text) ? styles.text : styles.placeholder}>{text || placeholder}</Text>
      <Image style={styles.arrow} source={require('image/arrow_right.png')} />
    </Picker>
  );
}

export const ListItemDatePicker = ({ text, placeholder, style = {}, ...rest }) => {
  return (
    <DatePicker style={[styles.flex_direction_row, styles.align_center, styles.justify_between, styles.picker_content, style]} {...rest}>
      <Text style={Boolean(text) ? styles.text : styles.placeholder}>{text || placeholder}</Text>
      <Image style={styles.arrow} source={require('image/arrow_right.png')} />
    </DatePicker>
  );
}

export const ListItemPress = ({ text, placeholder, onPress, style = {} }) => {
  return (
    <Pressable style={[styles.flex_direction_row, styles.align_center, styles.justify_between, styles.picker_content, style]} onPress={onPress}>
      <Text style={Boolean(text) ? styles.text : styles.placeholder}>{text || placeholder}</Text>
      <Image style={styles.arrow} source={require('image/arrow_right.png')} />
    </Pressable>
  );
}

export default ListItem