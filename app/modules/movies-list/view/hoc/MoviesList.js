import React from 'react';
import {getMovies} from '../../Redux/action_creators';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import Movie from '../components/Movie';
import {StyleSheet, Text, ImageBackground, FlatList, View} from 'react-native';

const MoviesList = ({navigation}) => {
  const dispatch = useDispatch();
  // const movies = useSelector(state => state.movies);
  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    getMovies()(dispatch);
  }, []);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../../../app/assets/Icons/background.jpg')}
        resizeMode="cover"
        blurRadius={2}
        style={{flex: 1}}>
        <Text style={styles.header}>Movies Land</Text>
        <FlatList
          horizontal={false}
          numColumns={2}
          data={movies}
          renderItem={({item}) => <Movie item={item} navigation={navigation} />}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 25,
    margin: 10,
    marginBottom: 15,
  },
});

export default MoviesList;
