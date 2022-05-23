import React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Video from 'react-native-video'

import { pxToDp } from '@/tools';

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  size: {
    width: pxToDp(150),
    height: pxToDp(150)
  },
  item: {
    borderRadius: pxToDp(10),
    marginRight: pxToDp(20),
    marginBottom: pxToDp(20),
    overflow: 'hidden'
  },
  image: {
    overflow: 'hidden'
  },
  closeWrap: {
    width: 20,
    height: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 3
  },
  closeText: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontSize: 20,
    height: 20,
    marginTop: -8,
    fontWeight: '300'
  }
});

export default (props) => {
  const { mediaType = 'image', images = [], maxSheets = 1, type = 'default', onImageClick, removeImage, showPicker, style = {} } = props;
  return (
    <View style={[styles.container, style]}>
      {
        (images || []).map((item, index) => (
          <View key={index} style={[styles.item, styles.size]}>
            {
              mediaType === 'image' && (
                <Pressable onPress={() => {
                  onImageClick && onImageClick(index, images);
                }}>
                  <Image source={{ uri: item }} style={[styles.size, styles.image]} />
                </Pressable>
              )
            }
            {
              mediaType === 'video' && (
                <Video
                  resizeMode="contain"
                  controls={true}
                  paused={true}
                  source={{ uri: item }}
                  style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', borderRadius: pxToDp(5), backgroundColor: '#000' }}
                />
              )
            }
            <Pressable style={styles.closeWrap} onPress={() => {
              removeImage && removeImage(index);
            }}>
              <Text style={styles.closeText}>{'\xD7'}</Text>
            </Pressable>
          </View>
        ))
      }
      {
        (images.length != maxSheets) && (
          <Pressable
            style={[{ alignItems: 'center', justifyContent: 'center', backgroundColor: type === 'default' ? '#F8F8F8' : '#fff' }, styles.size, styles.item]}
            onPress={showPicker}
          >
            <AntDesignIcon name="plus" size={pxToDp(50)} color="#999" />
          </Pressable>
        )
      }
    </View>
  )
}