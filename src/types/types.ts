import React from 'react';
import { Screens } from './enums.ts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NativeChildrenProps = {
  children: React.ReactNode;
};

export type RootStackParamList = {
  [Screens.MOVIE]: undefined;
  [Screens.DETAILS]: { movie: Movie };
  [Screens.FAVORITES]: undefined;
  [Screens.ADD]: undefined;
};

export type NavigationType = NativeStackNavigationProp<RootStackParamList>;

export type Movie = {
  id: string;
  title: string;
  year: number;
  genres: string[];
  actors: string[];
  extra?: Record<string, unknown>;
};
