import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StatusBar,
} from 'react-native';

import Home from './pages/Home';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Perfil from './pages/Perfil';
import Negocio from './pages/Negocio';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Routes = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerLeft: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default Routes;
