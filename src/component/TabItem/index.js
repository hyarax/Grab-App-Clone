import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {
  IcoAccount,
  IcoAccountActive,
  IcoActivity,
  IcoActivityActive,
  IcoHome,
  IcoHomeActive,
  IcoInbox,
  IcoInboxActive,
} from '../../assets/';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  console.log('icon', label);
  const Icon = () => {
    if (label === 'Home')
      return isFocused ? (
        <Image source={IcoHomeActive} style={styles.icon} />
      ) : (
        <Image source={IcoHome} style={styles.icon} />
      );
    if (label === 'Feed')
      return isFocused ? (
        <Image source={IcoActivityActive} style={styles.icon} />
      ) : (
        <Image source={IcoActivity} style={styles.icon} />
      );
    if (label === 'Account')
      return isFocused ? (
        <Image source={IcoAccountActive} style={styles.icon} />
      ) : (
        <Image source={IcoAccount} style={styles.icon} />
      );

    return <Image source={IcoHome} style={styles.icon} />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  text: (isFocused) => ({
    fontSize: 13,
    color: isFocused ? '#55CB95' : 'black',
    marginTop: 1,
  }),
});
