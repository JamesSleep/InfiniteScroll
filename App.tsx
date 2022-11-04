import React from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { Navigator } from './src/routes/navigator';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
    </SafeAreaView>
  );
};

export default App;
