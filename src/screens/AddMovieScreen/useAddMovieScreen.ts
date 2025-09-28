import { useState } from 'react';
import { Alert } from 'react-native';
import { Movie } from '../../types/types.ts';
import { v4 as uuidv4 } from 'uuid';
import { loadMovies, saveMovies } from '../../store/moviesStorage.ts';

export const useAddMovieScreen = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genres, setGenres] = useState('');
  const [actors, setActors] = useState('');

  const addMovie = async () => {
    if (!title || !year) {
      Alert.alert('Ошибка', 'Название и год обязательны');
      return;
    }

    const newMovie: Movie = {
      id: uuidv4(),
      title,
      year: Number(year),
      genres: genres.split(',').map(g => g.trim()),
      actors: actors.split(',').map(a => a.trim()),
    };

    const movies = (await loadMovies()) || [];
    await saveMovies([...movies, newMovie]);

    setTitle('');
    setYear('');
    setGenres('');
    setActors('');
    Alert.alert('Успех', 'Фильм добавлен');
  };

  return {
    addMovie,
    title,
    setTitle,
    year,
    setYear,
    genres,
    setGenres,
    actors,
    setActors,
  }
}