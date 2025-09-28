import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../../types/enums.ts';
import MovieDetailsScreen from '../../screens/MovieDetailsScreen';
import Tabs from '../Tabs';
import { RootStackParamList } from '../../types/types.ts';

const Navigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.MOVIE} component={Tabs} />
        <Stack.Screen name={Screens.DETAILS} component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
