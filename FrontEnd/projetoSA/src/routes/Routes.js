import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
    </>
  );
};

const css = StyleSheet.create({
  //   container: {
  //     marginLeft: 130,
  //     color: '#F5D100',
  //   },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'blue',
    width: 100,
    height: 40,
    backgroundColor: 'dodgerblue',
    alignSelf: 'center',
    marginTop: '80%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 6,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Routes;
