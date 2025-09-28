import React from 'react';
import { Text, ScrollView, Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { movieDetailsProps } from './types';

const MovieDetailsScreen = ({ route, navigation }: movieDetailsProps) => {
  const { movie } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.title}>
          {movie.title} ({movie.year})
        </Text>

        <Text style={styles.h}>Жанри</Text>
        <Text>{movie.genres.join(', ')}</Text>

        <Text style={styles.h}>Актори</Text>
        {movie.actors.map((actor: string, index: number) => (
          <Text key={index}>{actor}</Text>
        ))}

        {movie.extra && (
          <>
            <Text style={styles.h}>Додаткові дані</Text>
            <Text>{JSON.stringify(movie.extra, null, 2)}</Text>
          </>
        )}

        <View style={{ marginTop: 24 }}>
          <Button title="Назад" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailsScreen;
