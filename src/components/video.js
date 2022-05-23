import React, { useEffect, useState, useRef } from 'react';
import { View, Pressable, Image } from 'react-native';
import Video from 'react-native-video';

import { pxToDp } from '@/tools';

export default ({ uri, style = {} }) => {
  const [paused, setPaused] = useState(true);
  const videoRef = useRef(null);
  // 播放视频
  const playVideo = () => {
    videoRef.current.seek(0);
    setPaused(false);
  }

  return (
    <View style={[{ borderRadius: pxToDp(15), height: pxToDp(690) }, style]}>
      <Video
        ref={(ref) => {
          videoRef.current = ref;
        }}
        resizeMode="contain"
        controls={!paused}
        paused={paused}
        onEnd={() => {
          setPaused(true);
        }}
        source={{ uri }}
        style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', borderRadius: pxToDp(15), backgroundColor: '#000' }}
      />
      {
        paused && (
          <Pressable onPress={playVideo} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: pxToDp(48), height: pxToDp(48), zIndex: 99 }} source={require('image/play.png')} />
          </Pressable>
        )
      }
    </View>
  )
}