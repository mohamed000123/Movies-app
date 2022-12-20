import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useState, useEffect} from 'react';
const MovieDetails = ({route}) => {
  const movie = route.params.item;
  return (
    <ImageBackground
      source={require('../../../../assets/Icons/background.jpg')}
      resizeMode="cover"
      blurRadius={3}
      style={styles.background}>
      <ScrollView>
        {movie.backdrop_path ? (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
            }}
            style={styles.img}
          />
        ) : (
          <Image
            source={require('../../../../assets/Icons/notAvailable.jpg')}
            style={styles.img}
          />
        )}

        <View style={styles.details}>
          <Text style={{...styles.Text, fontSize: 20, fontWeight: 'bold'}}>
            {movie.original_title}
          </Text>
          <Text style={styles.Text}>{movie.overview}</Text>
          <Text style={styles.Text}>average vote: {movie.vote_average}</Text>
          <Text style={styles.Text}>{movie.release_date}</Text>
          <Text style={styles.Text}>
            original language: {movie.original_language}
          </Text>
          {movie.adult ? (
            <Text style={{...styles.Text, color: 'red'}}>+18</Text>
          ) : (
            <Text style={{...styles.Text, color: 'red'}}>+13</Text>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    marginTop: 10,
    borderRadius: 10,
    width: '100%',
    height: 400,
    resizeMode: 'stretch',
  },
  Text: {
    marginVertical: 5,
    marginLeft: 16,
    color: 'white',
  },
  details: {
    marginTop: 15,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default MovieDetails;
