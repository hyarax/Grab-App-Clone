/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';

const {width} = Dimensions.get('window');
const PromoItemsSub = (props) => {
  return (
    <View style={styles.wrapperItems}>
      <Image source={props.image} style={styles.promoImages} />
      <View style={styles.textContent}>
        <Text style={{fontWeight: '700', fontSize: 15}}>{props.text}</Text>
      </View>
      {props.diskon ? (
        <View style={styles.textDiskon}>
          <Text>{props.diskon}</Text>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperItems: {
    backgroundColor: 'white',
    width: width / 2 - 30,
    elevation: 3,
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 10,
    marginHorizontal: 15,
  },
  promoImages: {
    height: width / 2 - 20,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textContent: {
    marginLeft: 10,
    marginVertical: 10,
  },
  textDiskon: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 4,
    borderRadius: 3,
  },
});

export default PromoItemsSub;
