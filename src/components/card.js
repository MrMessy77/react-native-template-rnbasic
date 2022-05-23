import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text, Image } from 'react-native';

import { pxToDp } from '@/tools';

const styles = StyleSheet.create({
  container: { width: pxToDp(690), backgroundColor: '#fff', padding: pxToDp(30), borderRadius: pxToDp(10) },
  content: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  leftIcon: { width: pxToDp(80), height: pxToDp(80), marginRight: pxToDp(30), borderRadius: pxToDp(40), backgroundColor: '#f2f2f2' },
  title: { fontSize: pxToDp(30), color: '#28282C', fontWeight: '600' },
  sub_title: { fontSize: pxToDp(24), color: '#999', marginTop: pxToDp(22) },
  right_text: { fontSize: pxToDp(28), color: '#28282C' },
  arrow: { width: pxToDp(11), height: pxToDp(20) }
});

export default ({ title, titleStyle = {}, sub_title, leftIcon, leftStyle = {}, rightText, rightComponent, showArrow, onPress, style = {} }) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.content}>
        <Image style={[styles.leftIcon, leftStyle]} source={leftIcon} />
        <View style={{flex: 1}}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          {
            Boolean(sub_title) && <Text style={[styles.sub_title]}>{sub_title}</Text>
          }
        </View>
        {
          Boolean(rightText) && (
            <Text style={[styles.right_text]}>{rightText}</Text>
          )
        }
        {rightComponent}
        {showArrow && <Image style={styles.arrow} source={require('image/arrow_right.png')} />}
      </View>
    </Pressable>
  );
}