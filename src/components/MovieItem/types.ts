import { Movie } from '../../types/types.ts';

export type movieProps = {
  movie: Movie;
  onPress: (movie: Movie) => void;
  isFavorite: boolean;
  onToggleFav: (id: string) => void;
};