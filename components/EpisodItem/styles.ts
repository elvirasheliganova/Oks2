import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    borderRadius: 3

  },
  titleContainer: {
    flex: 1,
    padding: 10
  },
  plot: {
    color: 'darkgrey',
    fontSize: 14,

  },

  title: {

  },
  duration: {
    color: 'grey',
    fontSize: 16,
  },
  playButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginVertical: 5

  },
  downloadButton: {
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginVertical: 5
  },
  playButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }

})

export default styles


