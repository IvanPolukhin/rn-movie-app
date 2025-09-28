import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieListScreen from '../../screens/MovieListScreen';
import FavoritesScreen from '../../screens/FavoritesScreen';
import AddMovieScreen from '../../screens/AddMovieScreen';
import { Screens } from '../../types/enums.ts';

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name={Screens.MOVIE} component={MovieListScreen} />
      <Tab.Screen name={Screens.FAVORITES} component={FavoritesScreen} />
      <Tab.Screen name={Screens.ADD} component={AddMovieScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
