import React, {useEffect} from 'react';
import {StyleSheet, ImageBackground, Image} from 'react-native';
import {SplashBackground, Logo} from '../../assets/images';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000);
  }, [navigation]);

  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 105,
  },
});
