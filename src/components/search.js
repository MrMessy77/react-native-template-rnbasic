import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { pxToDp, style } from '@/tools';

const styles = StyleSheet.create({
  ...style,
  containerStyle: { width: pxToDp(690), backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0, padding: 0 },
  inputContainerStyle: { backgroundColor: '#F1F1F1', height: pxToDp(66), borderRadius: pxToDp(33) },
  inputStyle: { fontSize: pxToDp(26), color: '#28282C', marginLeft: pxToDp(10) },
  searchIcon: { width: pxToDp(24), height: pxToDp(26) }
});

export default ({ placeholder, style = {}, onChangeText, ...rest }) => {
  const [keywords, setKeywords] = useState('');

  return (
    <SearchBar
      value={keywords}
      returnKeyType='search'
      containerStyle={[styles.containerStyle, style]}
      inputContainerStyle={[styles.inputContainerStyle]}
      inputStyle={[styles.inputStyle]}
      searchIcon={<Image style={styles.searchIcon} source={require('image/search.png')} />}
      leftIconContainerStyle={{ marginLeft: pxToDp(30) }}
      placeholder={placeholder}
      placeholderTextColor="#c1c1c1"
      selectionColor="#FF3A3A"
      onChangeText={setKeywords}
      {...rest}
    />
  );
}