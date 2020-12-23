import React from 'react';
import {View, StyleSheet} from 'react-native';
import MainFeatureSub from './MainFeaturesSub';

const MainFeatureOvo = () => {
  return (
    <View style={styles.wrapperMainFeature}>
      <MainFeatureSub
        image={require('../../assets/icon/food.jpg')}
        title="Food"
      />
      <MainFeatureSub
        image={require('../../assets/icon/bike.jpg')}
        title="Bike"
      />
      <MainFeatureSub
        image={require('../../assets/icon/car.jpg')}
        title="Car"
      />
      <MainFeatureSub
        image={require('../../assets/icon/send.jpg')}
        title="Delivery"
      />
      <MainFeatureSub
        image={require('../../assets/icon/subscribe.jpg')}
        title="Subscription"
      />
      <MainFeatureSub
        image={require('../../assets/icon/doctor.jpg')}
        title="Doctor"
      />
      <MainFeatureSub
        image={require('../../assets/icon/pulsa.jpg')}
        title="Pulsa/Token"
      />
      <MainFeatureSub
        image={require('../../assets/icon/more.jpg')}
        title="More"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperMainFeature: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-between',
  },
});

export default MainFeatureOvo;
