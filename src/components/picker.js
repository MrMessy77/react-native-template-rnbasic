import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Pressable, Platform } from 'react-native';
import { PickerView } from '@ant-design/react-native';
import Modal from "react-native-modal";

import { pxToDp, style } from '@/tools';

const styles = StyleSheet.create({
  ...style,
  content: { width: pxToDp(630), height: pxToDp(90), borderRadius: pxToDp(10), backgroundColor: '#F8F8F8', paddingLeft: pxToDp(30), paddingRight: pxToDp(30) },
  placeholder: { fontSize: pxToDp(28), color: '#999' },
  arrow: { width: pxToDp(11), height: pxToDp(20) }
});

export default ({ value, data = [], cols = 1, title = '选择类目', onChange, style = {}, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selValue, setSelValue] = useState([]);

  const sure = () => {
    setIsVisible(false);
    if (selValue.length === 0) {
      onChange(cols === 1 ? [(data[0] || {}).value || 0] : [(data[0] || {}).value, (((data[0] || {}).children || [])[0] || {}).value])
    } else {
      onChange(selValue);
    }
  }

  return (
    <Pressable style={style} onPress={() => {
      setIsVisible(true);
    }}>
      {children}

      <Modal
        isVisible={isVisible}
        useNativeDriver={true}
        style={{ margin: 0 }}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Pressable style={{ flex: 1 }} onPress={(e) => {
            setIsVisible(false);
          }}></Pressable>
          <View style={[styles.flex_direction_row, styles.align_center, styles.justify_between, { backgroundColor: '#f1f1f1', bottom: -1 }]}>
            <Pressable style={[styles.padding]} onPress={() => {
              setIsVisible(false);
            }}>
              <Text style={{ fontSize: pxToDp(24), color: '#666' }}>取消</Text>
            </Pressable>
            <Text style={[styles.text, styles.flex_sub, { textAlign: 'center' }]}>{title}</Text>
            <Pressable style={[styles.padding]} onPress={sure}>
              <Text style={{ fontSize: pxToDp(24), color: '#666' }}>确定</Text>
            </Pressable>
          </View>
          <View style={{ backgroundColor: '#fff' }}>
            <PickerView
              value={value || selValue}
              data={data}
              cols={cols}
              itemStyle={[{ fontSize: pxToDp(26), color: '#28282c' }, Platform.OS === 'android' ? {height: pxToDp(70), lineHeight: pxToDp(70)} : {}]}
              onChange={setSelValue}
            />
          </View>
        </View>
      </Modal>
    </Pressable>
  )
};