import { FlatList, Text, View } from 'react-native';
import MovieItem from '../../components/MovieItem';
import { useFavoritesScreen } from './useFavoritesScreen.ts';

const FavoritesScreen = () => {
  const { onPress, favList } = useFavoritesScreen();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={favList}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={{ padding: 16 }}>Нет избранных фильмов</Text>
        }
        renderItem={({ item }) => (
          <MovieItem
            movie={item}
            onPress={onPress}
            isFavorite={true}
            onToggleFav={() => {}}
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
