import { movieProps } from './types.ts';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles.ts';

const MovieItem = ({ movie, onPress, isFavorite, onToggleFav }: movieProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(movie)}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          {movie.title} ({movie.year})
        </Text>
        <Text style={styles.sub}>{movie.genres.join(', ')}</Text>
      </View>
      <TouchableOpacity onPress={() => onToggleFav(movie.id)}>
        <Text style={{ color: isFavorite ? 'gold' : 'gray' }}>
          {isFavorite ? '★' : '☆'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MovieItem;
