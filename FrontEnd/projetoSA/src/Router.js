import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import Perfil from './pages/Perfil';
import Negocio from './pages/Negocio';
import Opcoes from './pages/Opcoes';
import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen name="Teste" component={Tabs} /> */}
        <Stack.Screen
          name="Home"
          component={Drawers}
          options={{
            headerLeft: () => (
              <View>
                <Icon
                  name={'musical-notes'}
                  size={37}
                  color={'white'}
                  style={css.container}
                />
              </View>
            ),
            title: 'Nome do App',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'tomato',
              borderBottomWidth: 1,
              borderBottomColor: 'red',
            },
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{headerStyle: {backgroundColor: 'tomato'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'white',
        showLabel: false,
        labelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          // fontFamily: 'Montserrat-SemiBold',
        },
        style: {
          borderTopWidth: 1,
          // borderBottomWidth: 2,
          // borderTopColor: 'red',
          // borderBottomColor: '#410CF5',
          backgroundColor: '#131313',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'PERFIL',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar-outline" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Negocio"
        component={Negocio}
        options={{
          tabBarLabel: 'NEGOCIO',
          tabBarIcon: ({color, size}) => (
            <Icon name="list-outline" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Content = () => {
  return (
    <View style={css.personcontainer}>
      <View style={css.personLogo}>
        <Icon
          name="person-circle"
          color={'tomato'}
          size={75}
          
        />
        <View style={css.personDescription}>
          <Text style={{color: '#ffffff', fontSize: 22, fontWeight:'bold', marginBottom: 2.5}}>Dazaranha</Text>
          <Text style={{color: '#ffffff', fontSize: 15 , marginBottom: 2.5}}>banda</Text>
          <Text style={{color: '#ffffff', fontSize: 13, fontStyle:'italic', marginBottom: 10}}>fulano@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

const Drawers = () => {
  return (
    <Drawer.Navigator
      drawerContent={Content}
      drawerPosition="left"
      drawerType="front"
      drawerStyle={{
        backgroundColor: '#131313',
      }}
      drawerContentOptions={{
        activeTintColor: 'purple',
        inactiveTintColor: 'red',
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'yellow',
      }}>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Opções" component={Opcoes} />
    </Drawer.Navigator>
  );
};

const css = StyleSheet.create({
  container: {
    marginLeft: 105,
    borderWidth: 1,
    borderRadius: 9.5,
    backgroundColor: '#131313',
    // color: '#F5D100',
  },
  personContainer: {
    height: '100%',
    borderBottomWidth: 1.5,
    borderBottomColor: '#FFF',
  },
  personLogo: {
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CDCCCE',
    display: 'flex',
    flexDirection: 'row',
    
  },
  personDescription: {
    marginLeft: 5,
    color: '#fff'
  }
});

export default Routes;
