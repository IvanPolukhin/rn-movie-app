/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { JSX } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/features/Navigation';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
