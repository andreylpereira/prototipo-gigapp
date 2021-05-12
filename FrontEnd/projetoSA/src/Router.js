import React from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CadastroBanda from './pages/CadastroBanda';
import CadastroEstabelecimento from './pages/CadastroEstabelecimento';
import Sobre from './pages/Sobre';
import EditarPerfil from './pages/EditarPerfil';
import Perfil from './pages/Perfil';
import Opcoes from './pages/Opcoes'; //Utilizar para cadastro de show
import Agenda from './pages/Agenda';

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
        <Stack.Screen
          name="Home"
          component={Drawers}
          options={({navigation}) => ({
            headerLeft: () => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: 1,
                  marginTop: 5,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }>
                  <Icon name={'menu'} size={40} color={'white'} />
                </TouchableOpacity>
              </View>
            ),
            headerTitle: () => (
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'DancingScript-Bold',
                    fontSize: 30,
                  }}>
                  GigApp
                </Text>
                <Icon
                  name={'musical-notes'}
                  size={32}
                  color={'#FFF'}
                  style={css.imageLogo}
                />
              </View>
            ),
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'tomato',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          })}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'tomato',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}
        />
        <Stack.Screen
          name="CadastroBanda"
          component={CadastroBanda}
          options={{
            title: 'Banda',
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'tomato',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}
        />
        <Stack.Screen
          name="CadastroEstabelecimento"
          component={CadastroEstabelecimento}
          options={{
            title: 'Estabelecimento',
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'tomato',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}
        />
        <Stack.Screen
          name="EditarPerfil"
          component={EditarPerfil}
          options={{
            title: 'Editar Perfil',
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'tomato',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}
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
        inactiveTintColor: '#CDCCCE',
        showLabel: false,
        style: {
          borderTopWidth: 2,
          borderBottomWidth: 2,
          borderTopColor: '#CDCCCE',
          borderBottomColor: '#131313',
          backgroundColor: '#131313',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color, focused}) => (
            <Icon name="home-outline" color={color} size={focused ? 32 : 28} />
          ),
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={Agenda}
        options={{
          tabBarLabel: 'Agenda',
          tabBarIcon: ({color, focused}) => (
            <Icon name="calendar-outline" color={color} size={focused ? 32 : 28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Content = ({...props}) => {
  function Perfils(perfil) {
    if (perfil == 'Banda') {
      return (
        <View>
          <View>
            <View style={css.personLogo}>
              <Icon
                name="person-circle"
                color={'tomato'}
                size={75}
                style={{marginLeft: 5}}
              />
              <View style={css.personDescription}>
                <Text style={css.personName}>Dazaranha</Text>
                <Text style={css.personType}>Banda</Text>
                <View style={css.starLine}>
                  <Text style={css.starLineText}>10,0</Text>
                  <Icon
                    name="star"
                    color={'yellow'}
                    size={11}
                    style={css.star}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <DrawerItemList {...props} />
          </View>
        </View>
      );
    }
    if (perfil == 'Estabelecimento') {
      return (
        <View>
          <View>
            <View style={css.personLogo}>
              <Icon
                name="person-circle"
                color={'tomato'}
                size={75}
                style={{marginLeft: 5}}
              />
              <View style={css.personDescription}>
                <Text style={css.personName}>Dona Benta</Text>
                <Text
                  style={css.personType}>
                  Estabelecimento
                </Text>
                <View style={css.starLine}>
                  <Text style={css.starLineText}>10,0</Text>
                  <Icon
                    name="star"
                    color={'yellow'}
                    size={11}
                    style={css.star}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <DrawerItemList {...props} />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={css.error}>Error ao carregar</Text>
        </View>
      );
    }
  }
  return <>{Perfils('Banda')}</>;
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
        activeTintColor: '#FFF',
        inactiveTintColor: 'tomato',
        activeBackgroundColor: 'tomato',
        inactiveBackgroundColor: '#CDCCCE',
        labelStyle: {fontSize: 15, fontFamily: 'Nunito-Black', marginLeft: -10},
      }}>
      <Drawer.Screen
        name="Home"
        component={Tabs}
        style={css.styleDrawers}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home-sharp"
              size={28}
              color={focused ? '#FFF' : 'tomato'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: 'Perfil',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="person-sharp"
              size={28}
              color={focused ? '#FFF' : 'tomato'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          title: 'Sobre',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="information-circle"
              size={30}
              color={focused ? '#FFF' : 'tomato'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={Login}
        options={{
          title: 'Sair',
          // headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Icon
              name="log-out"
              size={28}
              color={focused ? '#FFF' : 'tomato'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const css = StyleSheet.create({
  imageLogo: {
    marginTop: 5,
    marginLeft: 5,
    borderWidth: 2,
    borderBottomColor: '#131313',
    borderRadius: 180,
    backgroundColor: '#131313',
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
    marginTop: 10,
    color: '#fff',
  },
  personName: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Nunito-Black',
  },
  personType: {
    color: '#CDCCCE',
    fontSize: 13,
    fontFamily: 'Nunito-Bold',
    marginBottom: 2.5,
  },
  star: {
    marginLeft: 3,
    marginTop: 2,
    marginBottom: 5,
  },
  starLine: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  starLineText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Nunito-Black',
  },
  error: {
    color: '#fff',
    marginTop: '90%',
    textAlign: 'center',
    fontFamily: 'Nunito-Black',
    fontSize: 17,
  },
});

export default Routes;
