import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { AlbumView } from 'teaset';

import Modal from './modal';

export default Preview = (props) => {
  const { visible = false, defaultIndex = 0, images = [], onRequestClose, ...rest } = props;

  return (
    <Modal
      onModalShow={() => {
        if (Platform.OS === 'android') {
          StatusBar.setBackgroundColor('rgba(0,0,0,1)', true);
        } else {
          StatusBar.setHidden(true);
        }
      }}
      onModalHide={() => {
        if (Platform.OS === 'android') {
          StatusBar.setBackgroundColor('#fff', true);
        } else {
          StatusBar.setHidden(false);
        }
      }}
      isVisible={visible}
      backdropOpacity={1}
      animationIn='slideInRight'
      animationOut='slideOutRight'
      onBackdropPress={onRequestClose}
      onBackButtonPress={onRequestClose}
      {...rest}
    >
      <AlbumView
        style={{ flex: 1 }}
        maxScale={5}
        defaultIndex={defaultIndex}
        images={images}
        onPress={onRequestClose}
      />
    </Modal>
  )
}