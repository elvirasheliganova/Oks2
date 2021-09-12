import React, { useState, useRef, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Episode } from '../../types'
import { Video } from 'expo-av'
import styles from './styles'
import { Playback } from 'expo-av/build/AV'




interface VideoPlayerProps {
  episode: Episode
}

const Videoplayer = (props: VideoPlayerProps) => {

  const { episode } = props
  const video = useRef<Video>(null)
  const [status, setStatus] = useState({})

  useEffect(() => {
    if (!video) {
      return
    }
    (async () => {
      await video?.current?.unloadAsync()
      await video?.current?.loadAsync(
        { uri: episode.video },
        {},
        false
      )
    })()
  }, [episode])


  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        usePoster
        posterSource={{ uri: episode.poster }}
        posterStyle={{ width: '80%', alignSelf: 'center' }}
        useNativeControls
        resizeMode="contain"

        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  )
}

export default Videoplayer