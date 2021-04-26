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
          options={{headerLeft: false, title: 'Nome do App', headerTitleAlign: 'center',headerTintColor: '#EDEDE9',

          headerStyle: {
            backgroundColor: '#410CF5',
            borderBottomWidth: 1,
            borderBottomColor: 'red',
          }
        }}
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
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'dodgerblue',
      inactiveTintColor: 'white',

      labelStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Montserrat-SemiBold',
      },
      style: {
        borderTopWidth: 1,
        // borderBottomWidth: 2,
        // borderTopColor: 'red',
        // borderBottomColor: '#410CF5',
        backgroundColor: 'orange',
      },
    }}
    >
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarLabel: 'HOME',
        // tabBarIcon: ({color, size}) => (
        //   <Icon name="home" color={color} size={size} />
        // ),
      }}/>
      <Tab.Screen name="Perfil" component={Perfil}  options={{
        tabBarLabel: 'PERFIL',
        // tabBarIcon: ({color, size}) => (
        //   <Icon name="home" color={color} size={size} />
        // ),
      }}/>
      <Tab.Screen name="Negocio" component={Negocio}  options={{
        tabBarLabel: 'NEGOCIO',
        // tabBarIcon: ({color, size}) => (
        //   <Icon name="home" color={color} size={size} />
        // ),
      }}/>
    </Tab.Navigator>
  );
};

const Drawers = () => {
  return (
    <Drawer.Navigator
    drawerPosition='left'
    drawerType='front'
    drawerStyle={{
      backgroundColor: '#000'
      }}
      drawerContentOptions={{
        activeTintColor: '#FFF',
        inactiveTintColor: 'red',
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'yellow',
      }}
    >
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Opções" component={Opcoes} />
    </Drawer.Navigator>
  );
};

export default Routes;
