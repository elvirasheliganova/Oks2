import React, { useState } from 'react'
import { View, Text } from '../../components/Themed';
import { Pressable } from 'react-native';
import styles from './styles'
import courses from '../../assets/data/courses'
import { Entypo, Feather, Ionicons, MaterialIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import EpisodeItem from '../../components/EpisodItem';
import { FlatList } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import Videoplayer from '../../components/VideoPlayer';





const firstEpisode = courses.seasons.items[0].episodes.items[0]

const firstSeason = courses.seasons.items[0]

const CourseDetailScreen = () => {

  const seasonNames = courses.seasons.items.map(season => season.name)

  const [currentSeason, setCurrentSeason] = useState(firstSeason)
  const [currentEpisode, setCurrentEpisode] = useState(firstSeason.episodes.items[0])




  return (
    <View>
      <Videoplayer episode={currentEpisode} />


      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (

          <EpisodeItem
            episode={item}
            onPress={setCurrentEpisode}
          />)}
        style={{ marginBottom: 250 }}
        ListHeaderComponent={(
          <View style={{ padding: 10 }}>
            <Text style={styles.title}>{courses.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{courses.year}</Text>
              <View style={styles.difficultyContainer}>
                <Feather name="star" size={16} color="black" />
              </View>
              <Text style={styles.year}>{courses.numberOfSeasons} lessons</Text>
              <MaterialIcons name="hd" size={28} color="white" />
            </View>

            {/*  Play Button */}
            <Pressable onPress={() => { console.warn('Play') }} style={styles.playButton}>
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16} color="black" />
                Play</Text>
            </Pressable>

            {/*  Download Button */}
            <Pressable onPress={() => { console.warn('Download') }} style={styles.downloadButton}>
              <Text style={styles.downloadButtonText}>
                <Feather name="download" size={16} color="white"
                />
                {'  '}
                Download</Text>
            </Pressable>

            <Text style={{ marginVertical: 10 }}>{courses.plot}</Text>
            <Text style={styles.year}>{courses.cast}</Text>
            <Text style={styles.year}>{courses.creator}</Text>

            {/* Row with icon buttons  */}
            <View style={{ flexDirection: 'row', width: '75%', justifyContent: 'space-around', marginTop: 15 }}>
              <View>
                <AntDesign name="plus" size={30} color="white" />
                <Text style={{ color: 'darkgrey' }}>My List</Text>
              </View>
              <View>
                <Feather name="thumbs-up" size={30} color="white" />
                <Text style={{ color: 'darkgrey' }}>Rate</Text>
              </View>
              <View>
                <Feather name="send" size={26} color="white" />
                <Text style={{ color: 'darkgrey' }}>Share</Text>
              </View>
              {/* <View>
            <Ionicons name="caret-back" size={24} color="#818080" />
          </View>*/}

            </View>
            <View style={{}}>
              <Picker
                itemStyle={{ color: 'white', backgroundColor: 'black', height: 110, fontSize: 14, fontWeight: 'bold', width: 200 }}

                //style={{ height: 200, }}
                selectedValue={currentSeason.name}
                onValueChange={(itemValue, itemIndex) => {
                  setCurrentSeason(courses.seasons.items[itemIndex])
                }
                }>
                {seasonNames.map(seasonName => (
                  <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                ))}

              </Picker>
            </View>


          </View>
        )}
      />

    </View>
  )
}

export default CourseDetailScreen
