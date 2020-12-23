import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const HeaderHomeBanner = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        style={styles.headerBanner}
        source={require('../../assets/images/bgheader.jpg')}
      />
      <Text style={styles.greetingText}>Selamat Malam</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBanner: {
    width: '100%',
    height: 170,
  },
  greetingText: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 60,
    color: '#383838',
  },
});

export default HeaderHomeBanner;
