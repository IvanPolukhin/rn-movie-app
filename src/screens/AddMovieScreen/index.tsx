import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles.ts';
import { useAddMovieScreen } from './useAddMovieScreen.ts';

const AddMovieScreen = () => {
  const {
    addMovie,
    title,
    setTitle,
    year,
    setYear,
    genres,
    setGenres,
    actors,
    setActors,
  } = useAddMovieScreen();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Название:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Год:</Text>
      <TextInput
        style={styles.input}
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Жанры (через запятую):</Text>
      <TextInput style={styles.input} value={genres} onChangeText={setGenres} />

      <Text style={styles.label}>Актёры (через запятую):</Text>
      <TextInput style={styles.input} value={actors} onChangeText={setActors} />

      <Button title="Добавить фильм" onPress={addMovie} />
    </View>
  );
};

export default AddMovieScreen;
