import React from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationType } from '../../types/types';
import { Screens } from '../../types/enums';
import MovieItem from '../../components/MovieItem';
import { styles } from './styles.ts';
import { useMovieListScreen } from './useMovieListScreen.ts';

const MovieListScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const {favoriteIds, search, setSearch, toggleFavorite, filteredMovies } = useMovieListScreen();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Поиск по названию..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredMovies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MovieItem
            movie={item}
            onPress={movie => navigation.navigate(Screens.DETAILS, { movie })}
            isFavorite={favoriteIds.includes(item.id)}
            onToggleFav={toggleFavorite}
          />
        )}
        ListEmptyComponent={
          <Text style={{ padding: 16 }}>Фильмы не найдены</Text>
        }
      />
    </View>
  );
};

export default MovieListScreen;
