import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import Perfil from './pages/Perfil';
import Negocio from './pages/Negocio';
import Opcoes from './pages/Opcoes';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Teste" component={Tabs} /> */}
        <Stack.Screen
          name="Home"
          component={Drawers}
          options={{headerLeft: false, title: 'Nome do App'}}
        />
        <Stack.Screen name="Cadastro"
          component={Cadastro}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Negocio" component={Negocio} />
    </Tab.Navigator>
  );
};

const Drawers = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Negocio" component={Negocio} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Opções" component={Opcoes} />
    </Drawer.Navigator>
  );
};

export default Routes;
