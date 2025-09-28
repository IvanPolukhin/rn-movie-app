import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { Screens } from '../../types/enums';

export type movieDetailsProps = NativeStackScreenProps<RootStackParamList, Screens.DETAILS>;