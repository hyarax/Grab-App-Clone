import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/images/register.png')}
          style={{
            width: '100%',
            height: 450,
            marginTop: 35,
          }}
        />
      </View>
      <Text style={styles.textLogin}>Registration</Text>
      <View style={styles.wrapperContent}>
        <TextInput placeholder="Email" style={{paddingHorizontal: 10}} />
      </View>
      <View style={styles.wrapperContent}>
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={{paddingHorizontal: 10}}
        />
      </View>
      <View style={styles.wrapperContent}>
        <TextInput
          secureTextEntry
          placeholder="Confirm Password"
          style={{paddingHorizontal: 10}}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.wrapperUser}>
          <Text style={styles.textUser}>Create Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  textLogin: {
    fontSize: 35,
    alignSelf: 'center',
    marginBottom: 10,
  },
  wrapperContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 55,
    borderWidth: 1.5,
    marginTop: 20,
    borderRadius: 25,
    paddingHorizontal: 15,
    borderColor: '#00716f',
  },
  wrapperUser: {
    marginHorizontal: 55,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#00716f',
  },
  textUser: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  },
});

export default RegisterScreen;
