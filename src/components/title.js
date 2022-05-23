import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { pxToDp, style } from '@/tools';

const styles = StyleSheet.create({
  ...style,
  content: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  require: { color: '#FF3B3B', fontSize: pxToDp(30) },
  line: { height: pxToDp(30), width: pxToDp(6), borderRadius: pxToDp(3), backgroundColor: '#FC1E1E', marginRight: pxToDp(15) },
  text: { color: '#28282C', fontSize: pxToDp(30) }
});

export default ({ title, style = {}, titleStyle = {}, type = 'text' }) => {
  
  return (
    <View style={[styles.content, style]}>
      {
        type === 'require' && <Text style={styles.require}>*</Text>
      }
      {
        type === 'line' && <View style={styles.line}></View>
      }
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </View>
  );
}