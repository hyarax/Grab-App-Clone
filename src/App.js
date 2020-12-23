import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StatusBar, ScrollView, Text} from 'react-native';
import Router from '../src/router/index';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
    </NavigationContainer>
  );
};

export default App;
