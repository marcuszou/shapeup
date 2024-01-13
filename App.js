import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View cclassName="flex-1 items-center justify-center bg-white">
      <Text>Start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
