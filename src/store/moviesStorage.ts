import AsyncStorage from '@react-native-async-storage/async-storage';
import { Movie } from '../types/types';

const MOVIES_KEY = 'MOVIES_KEY';
const FAVORITES_KEY = 'FAVORITES_KEY';

export const saveMovies = async (movies: Movie[]) => {
  try {
    await AsyncStorage.setItem(MOVIES_KEY, JSON.stringify(movies));
  } catch (e) {
    console.error('Error saving movies', e);
  }
};

export const loadMovies = async (): Promise<Movie[] | null> => {
  try {
    const json = await AsyncStorage.getItem(MOVIES_KEY);
    return json ? JSON.parse(json) : null;
  } catch (e) {
    console.error('Error loading movies', e);
    return null;
  }
};

export const saveFavorites = async (ids: string[]) => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
  } catch (e) {
    console.error('Error saving favorites', e);
  }
};

export const loadFavorites = async (): Promise<string[] | null> => {
  try {
    const json = await AsyncStorage.getItem(FAVORITES_KEY);
    return json ? JSON.parse(json) : null;
  } catch (e) {
    console.error('Error loading favorites', e);
    return null;
  }
};
