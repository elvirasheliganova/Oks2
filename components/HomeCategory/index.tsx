import { isTSMethodSignature } from '@babel/types';
import * as React from 'react';
import { Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import categories from '../../assets/data/categories';
import { Text } from '../Themed';

import styles from './styles'

interface HomeCategoryProps {
  category: {
    id: string,
    title: string,
    movies: {
      id: string,
      poster: string,
    }[]
  }
}

//({ navigation }: RootTabScreenProps<'Home'>) 

const HomeCategory = (props: HomeCategoryProps) => {

  const { category } = props
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item.poster }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}

      />

    </>
  )
}



export default HomeCategory


