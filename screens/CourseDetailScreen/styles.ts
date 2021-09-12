import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  image: {

    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  match: {
    color: '#00aa00',
    fontWeight: 'bold',
    marginRight: 10
  },
  year: {
    color: '#818080',
    marginRight: 10
  },
  difficultyContainer: {
    backgroundColor: '#e6e229',
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
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


