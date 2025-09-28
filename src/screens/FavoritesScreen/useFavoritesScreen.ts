import { useEffect, useState } from 'react';
import { Movie } from '../../types/types';
import { useNavigation } from '@react-navigation/native';
import { NavigationType } from '../../types/types';
import { Screens } from '../../types/enums';
import { loadFavorites, loadMovies } from '../../store/moviesStorage.ts';

export const useFavoritesScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favoritesIds, setFavoritesIds] = useState<string[]>([]);
  const navigation = useNavigation<NavigationType>();

  useEffect(() => {
    (async () => {
      const m = (await loadMovies()) || [];
      const favS = (await loadFavorites()) || [];
      setMovies(m);
      setFavoritesIds(favS);
    })();
  }, []);

  const favList = movies
    .filter(m => favoritesIds.includes(m.id))
    .sort((a, b) => a.title.localeCompare(b.title));

  const onPress = (movie: Movie) => {
    navigation.navigate(Screens.DETAILS, { movie });
  };

  return {
    movies,
    favoritesIds,
    onPress,
    favList,
  };
};
