import { useEffect, useState } from 'react';
import { Movie } from '../../types/types.ts';
import { loadFavorites, loadMovies, saveFavorites } from '../../store/moviesStorage.ts';
import { sampleMovies } from '../../sampleData.ts';

export const useMovieListScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    (async () => {
      const storedMovies = (await loadMovies()) || sampleMovies;
      const favs = (await loadFavorites()) || [];
      setMovies(storedMovies.sort((a, b) => a.title.localeCompare(b.title)));
      setFavoriteIds(favs);
    })();
  }, []);

  const toggleFavorite = async (id: string) => {
    let newFavs: string[];
    if (favoriteIds.includes(id)) {
      newFavs = favoriteIds.filter(f => f !== id);
    } else {
      newFavs = [...favoriteIds, id];
    }
    setFavoriteIds(newFavs);
    await saveFavorites(newFavs);
  };

  const filteredMovies = movies.filter(
    m => m.title.toLowerCase().includes(search.toLowerCase())
  );

  return {
    search,
    setSearch,
    favoriteIds,
    toggleFavorite,
    filteredMovies,
  }
}