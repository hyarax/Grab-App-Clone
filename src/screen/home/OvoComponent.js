import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const OvoComponent = () => {
  return (
    <View style={styles.wrapperOvo}>
      <View style={styles.saldoBalance}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#383838'}}>
          Ovo Balance
        </Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#383838'}}>
          Rp 10.000.000
        </Text>
      </View>
      <View style={styles.garisOvo}></View>
      <View style={styles.wrapperPayment}>
        <View>
          <Image
            style={styles.ovoPaymentIcon}
            source={require('../../assets/icon/pay.jpg')}
          />
          <Text style={{alignSelf: 'center'}}>Pay</Text>
        </View>
        <View>
          <Image
            style={styles.ovoPaymentIcon}
            source={require('../../assets/icon/topup.jpg')}
          />
          <Text style={{alignSelf: 'center'}}>Send</Text>
        </View>
        <View>
          <Image
            style={styles.ovoPaymentIcon}
            source={require('../../assets/icon/reward.jpg')}
          />
          <Text style={{alignSelf: 'center'}}>Reward</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperOvo: {
    marginHorizontal: 18,
    marginTop: -60,
    backgroundColor: 'white',
    height: 140,
    elevation: 4,
    borderRadius: 20,
  },
  wrapperPayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ovoPaymentIcon: {
    height: 45,
    width: 45,
    marginTop: 20,
    marginHorizontal: 40,
  },
  saldoBalance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
  },
  garisOvo: {
    height: 1,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#adadad',
  },
});

export default OvoComponent;
