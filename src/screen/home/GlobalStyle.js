import React from 'react';
import {View, StyleSheet} from 'react-native';

const GlobalStyle = () => {
  return <View style={styles.divider}></View>;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 15,
    backgroundColor: '#ededed',
    marginVertical: 15,
  },
});

export default GlobalStyle;
