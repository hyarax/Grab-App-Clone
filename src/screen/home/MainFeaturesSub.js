import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const MainFeatureSub = (props) => {
  return (
    <View style={{width: '25%', alignItems: 'center'}}>
      <Image style={styles.imageMainFeature} source={props.image} />
      <Text style={styles.mainText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageMainFeature: {
    height: 55,
    width: 55,
  },
  mainText: {
    marginTop: 4,
    textAlign: 'center',
  },
});

export default MainFeatureSub;
