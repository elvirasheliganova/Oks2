import { isTSMethodSignature } from '@babel/types';
import * as React from 'react';
import { Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


import HomeCategory from '../../components/HomeCategory';
import { View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import styles from './styles'


//({ navigation }: RootTabScreenProps<'Home'>) 


const HomeScreen = () => {


  return (
    <View style={styles.container}>

      {/*List of categories*/}
      <FlatList
        data={categories.items}
        renderItem={({ item }) =>
          <HomeCategory category={item} />
        }
      />


    </View>
  )
}



export default HomeScreen


