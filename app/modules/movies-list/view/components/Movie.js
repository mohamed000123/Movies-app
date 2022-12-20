import React from 'react';

import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
const Movie = ({item, navigation}) => {
  const [selectedMovie, setSelctedMovie] = useState({});
  const imgSource = `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;

  return (
    <>
      <TouchableOpacity
        style={styles.contaner}
        onPress={() => {
          setSelctedMovie(item);
          navigation.navigate('MovieDetails', {item});
        }}>
        {item.backdrop_path ? (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
            }}
            style={styles.img}
          />
        ) : (
          <Image
            source={require('../../../../assets/Icons/notAvailable.jpg')}
            style={styles.img}
          />
        )}
        <Text style={{color: 'white'}}>{item.original_title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  contaner: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  img: {
    borderRadius: 10,
    width: '85%',
    height: 200,
    resizeMode: 'stretch',
  },
});

export default Movie;
