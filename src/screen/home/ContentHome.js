import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ContentHome = () => {
  return (
    <View>
      <Text style={styles.titleText}>Trends for you</Text>
      <TouchableOpacity>
        <View style={styles.wrapperHome}>
          <View>
            <Image
              style={styles.wrapperContent}
              source={require('../../assets/images/iklan1.jpg')}
            />
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
                marginLeft: 10,
                marginTop: 10,
              }}>
              Best Top Artist 2020
            </Text>
            <View style={styles.garisOvo}></View>
            <Text
              style={{
                fontWeight: '200',
                fontSize: 15,
                marginLeft: 10,
                marginTop: 10,
              }}>
              TWICE I Can't Stop Me, LANY Malibu Nights, Joji No Fun
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.wrapperHome}>
          <View>
            <Image
              style={styles.wrapperContent}
              source={require('../../assets/images/iklan2.png')}
            />
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
                marginLeft: 10,
                marginTop: 10,
              }}>
              Best Top Artist 2020
            </Text>
            <View style={styles.garisOvo}></View>
            <Text
              style={{
                fontWeight: '200',
                fontSize: 15,
                marginLeft: 10,
                marginTop: 10,
              }}>
              TWICE I Can't Stop Me, LANY Malibu Nights, Joji No Fun
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.wrapperHome}>
          <View>
            <Image
              style={styles.wrapperContent}
              source={require('../../assets/images/iklan3.jpeg')}
            />
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
                marginLeft: 10,
                marginTop: 10,
              }}>
              Best Top Artist 2020
            </Text>
            <View style={styles.garisOvo}></View>
            <Text
              style={{
                fontWeight: '200',
                fontSize: 15,
                marginLeft: 10,
                marginTop: 10,
              }}>
              TWICE I Can't Stop Me, LANY Malibu Nights, Joji No Fun
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperHome: {
    height: 270,
    marginVertical: 15,
    marginHorizontal: 18,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 20,
  },
  titleText: {
    marginHorizontal: 18,
    fontSize: 23,
    fontWeight: 'bold',
  },
  wrapperContent: {
    width: '100%',
    height: 175,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  garisOvo: {
    height: 1,
    marginTop: 5,
    marginHorizontal: 10,
    backgroundColor: '#adadad',
  },
});

export default ContentHome;
