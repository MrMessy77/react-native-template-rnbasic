import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Pressable, Platform } from 'react-native';
import { DatePickerView } from '@ant-design/react-native';
import Modal from "react-native-modal";

import { style } from '@/tools';

const styles = StyleSheet.create({
  ...style,
  content: { width: pxToDp(630), height: pxToDp(90), borderRadius: pxToDp(10), backgroundColor: '#F8F8F8', paddingLeft: pxToDp(30), paddingRight: pxToDp(30) },
  picker: {},
  placeholder: { fontSize: pxToDp(28), color: '#999' },
  arrow: { width: pxToDp(11), height: pxToDp(20) }
});

export default ({ placeholder, text, title = '选择时间', style = {}, onChange, children, defaultValue = new Date(), mode = 'date', ...rest }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selValue, setSelValue] = useState(defaultValue);
  const [selDate, setSelDate] = useState(defaultValue);
  const [selTime, setSelTime] = useState(defaultValue);

  const sure = () => {
    setIsVisible(false);
    if (mode === 'datetime') {
      onChange(`${moment(selDate).format('YYYY-MM-DD')} ${moment(selTime).format('HH:mm')}`);
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
          <View style={[{ backgroundColor: '#fff' }]}>
            {
              mode === 'datetime' ? (
                <View>
                  <DatePickerView
                    value={selDate}
                    itemStyle={[{ fontSize: pxToDp(26), color: '#28282c' }, Platform.OS === 'android' ? { height: pxToDp(70), lineHeight: pxToDp(70) } : {}]}
                    onChange={setSelDate}
                    mode='date'
                    // {...rest}
                  />
                  <DatePickerView
                    value={selTime}
                    itemStyle={[{ fontSize: pxToDp(26), color: '#28282c' }, Platform.OS === 'android' ? { height: pxToDp(70), lineHeight: pxToDp(70) } : {}]}
                    onChange={setSelTime}
                    mode='time'
                    // {...rest}
                  />
                </View>
              ) : (
                <DatePickerView
                  value={selValue}
                  itemStyle={[{ fontSize: pxToDp(26), color: '#28282c' }, Platform.OS === 'android' ? { height: pxToDp(70), lineHeight: pxToDp(70) } : {}]}
                  onChange={setSelValue}
                  mode={mode}
                  {...rest}
                />
              )
            }
          </View>
        </View>
      </Modal>
    </Pressable>
  )
}