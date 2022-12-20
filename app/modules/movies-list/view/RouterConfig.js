import {createStackNavigator} from '@react-navigation/stack';
import Movie from './components/Movie';
import MoviesList from './hoc/MoviesList';
import MovieDetails from './hoc/MovieDetails';
const Stack = createStackNavigator();

export default function MovisStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="MoviesList"
        component={MoviesList}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={({route}) => ({
          title: route.params.item.original_title,
        })}
      />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );
}
