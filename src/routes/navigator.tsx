import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { InfiniteFlatList } from '../screen/InfiniteFlatList';
import { InfiniteScrollView } from '../screen/InfiniteScrollView';
import { MainPage } from '../screen/MainPage';

export type RootStackParamList = {
  MainPage: undefined;
  FlatList: undefined;
  ScrollView: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainPage"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="FlatList" component={InfiniteFlatList} />
        <Stack.Screen name="ScrollView" component={InfiniteScrollView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
