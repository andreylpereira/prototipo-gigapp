import React from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import Home from './Home';
import Login from './Login';
import Cadastro from './Cadastro';
import CadastroBanda from './CadastroBanda';
import CadastroEstabelecimento from './CadastroEstabelecimento';
import Sobre from './Sobre';
import EditarPerfil from './EditarPerfil';
import Perfil from './Perfil';
import Evento from './Evento';
import Agenda from './Agenda';
import CadastroEvento from './CadastroEvento';
import EditarEvento from './EditarEvento';
import Avaliacao from './Avalicao';
import SelecaoBanda from './SelecaoBanda';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


//função para logout?
// const Sair = () => {
//   AsyncStorage.clear();
//   navigation.navigate('Login');
// };

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
              backgroundColor: '#FF7306',
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
              backgroundColor: '#FF7306',
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
              backgroundColor: '#FF7306',
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
              backgroundColor: '#FF7306',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            title: 'Perfil',
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#FF7306',
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
              backgroundColor: '#FF7306',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}
        />
        <Stack.Screen
          name="Agenda"
          component={Agenda}
          options={{
            title: 'Agenda',
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#FF7306',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}
        />
        <Stack.Screen
          name="Avaliacao"
          component={Avaliacao}
          options={{
            title: 'Avaliação',
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#FF7306',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}
        />
        <Stack.Screen
          name="CadastroEvento"
          component={CadastroEvento}
          options={{
            title: 'Cadastro de Evento',
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#FF7306',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}
        />
        <Stack.Screen
          name="EditarEvento"
          component={EditarEvento}
          options={{
            title: 'Editar Evento',
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#FF7306',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}
        />
        <Stack.Screen
          name="SelecaoBanda"
          component={SelecaoBanda}
          options={{
            title: 'Seleção de Bandas',
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#FF7306',
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
  function Perfils(perfil) {
    if (perfil == 'Banda') {
      return (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#FFFFFF',
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
                <Icon
                  name="home-outline"
                  color={color}
                  size={focused ? 28 : 25}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Evento"
            component={Evento}
            options={{
              tabBarLabel: 'Evento',
              tabBarIcon: ({color, focused}) => (
                <Icon
                  name="calendar-outline"
                  color={color}
                  size={focused ? 28 : 25}
                />
              ),
            }}
          />
        </Tab.Navigator>
      );
    }
    if (perfil == 'Estabelecimento') {
      return (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#FFFFFF',
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
                <Icon
                  name="home-outline"
                  color={color}
                  size={focused ? 28 : 25}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Adicionar Evento"
            component={CadastroEvento}
            options={{
              tabBarLabel: 'Adicionar Evento',
              tabBarIcon: ({focused, size}) => (
                <Icon
                  style={css.iconAdd}
                  name="add-circle-sharp"
                  color={focused ? '#131313' : '#FF7306'}
                  size={45}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Evento"
            component={Evento}
            options={{
              tabBarLabel: 'Evento',
              tabBarIcon: ({color, focused}) => (
                <Icon
                  name="calendar-outline"
                  color={color}
                  size={focused ? 28 : 25}
                />
              ),
            }}
          />
        </Tab.Navigator>
      );
    } else {
      return (
        <View>
          <Text style={css.error}>Error ao carregar</Text>
        </View>
      );
    }
  }
  return <>{Perfils('Estabelecimento')}</>;
};

const Content = ({...props}) => {
  function Perfils(perfil) {
    if (perfil == 'Banda') {
      return (
        <View>
          <View>
            <View style={css.personLogo}>
              <Image
                style={css.image}
                source={require('../assets/fotos/dazaranha.jpg')}
              />
              <View style={css.personDescription}>
                <Text
                  multimultiline={true}
                  numberOfLines={1}
                  style={css.personName}>
                  Dazaranha
                </Text>
                <Text
                  multimultiline={true}
                  numberOfLines={1}
                  style={css.personType}>
                  Banda
                </Text>
                <View style={css.starLine}>
                  <Text style={css.starLineText}>10,0</Text>
                  <Icon
                    name="star"
                    color={'#FCC51C'}
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
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <View style={css.buttonSair}>
              <Icon name={'log-out'} size={28} color={'#FF7306'} />
              <Text
                style={css.buttonText}>
                Sair
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    if (perfil == 'Estabelecimento') {
      return (
        <View>
          <View>
            <View style={css.personLogo}>
              <Image
                style={css.image}
                source={require('../assets/fotos/chopp.jpg')}
              />
              {/* <Icon
                name="person-circle"
                color={'#FF7306'}
                size={75}
                style={{marginLeft: 5}}
              /> */}
              <View style={css.personDescription}>
                <Text
                  multimultiline={true}
                  numberOfLines={1}
                  style={css.personName}>
                  Chopp do Gus
                </Text>
                <Text
                  multimultiline={true}
                  numberOfLines={1}
                  style={css.personType}>
                  Estabelecimento
                </Text>
                <View style={css.starLine}>
                  <Text style={css.starLineText}>10,0</Text>
                  <Icon
                    name="star"
                    color={'#FCC51C'}
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
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <View style={css.buttonSair}>
              <Icon name={'log-out'} size={28} color={'#FF7306'} />
              <Text
                style={css.buttonText}>
                Sair
              </Text>
            </View>
          </TouchableOpacity>
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
  return <>{Perfils('Estabelecimento')}</>;
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
        activeTintColor: '#DDDDDD',
        inactiveTintColor: '#FF7306',
        activeBackgroundColor: '#FF7306',
        inactiveBackgroundColor: '#DDDDDD',
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
              size={focused ? 32 : 28}
              color={focused ? '#DDDDDD' : '#FF7306'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Agenda"
        component={Agenda}
        options={{
          title: 'Minha Agenda',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="calendar"
              size={focused ? 32 : 28}
              color={focused ? '#DDDDDD' : '#FF7306'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Editar Perfil"
        component={EditarPerfil}
        options={{
          title: 'Editar Perfil',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="person-sharp"
              size={focused ? 32 : 28}
              color={focused ? '#DDDDDD' : '#FF7306'}
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
              size={focused ? 34 : 30}
              color={focused ? '#DDDDDD' : '#FF7306'}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Sair"
        component={Login}
        options={{
          title: 'Sair',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="log-out"
              size={focused ? 34 : 28}
              color={focused ? '#DDDDDD' : '#FF7306'}
            />
          ),
        }}/> */}
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
    marginLeft: 10,
    marginTop: 8,
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
    marginTop: 1,
    marginBottom: 5,
    opacity: 0.5,
  },
  starLine: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  starLineText: {
    color: '#ffffff',
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    opacity: 0.5,
  },
  error: {
    color: '#fff',
    marginTop: '90%',
    textAlign: 'center',
    fontFamily: 'Nunito-Black',
    fontSize: 17,
  },
  image: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderRadius: 100,
    marginLeft: 10,
    marginTop: 10,
  },
  buttonSair: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    width: '92.5%',
    marginLeft: '4%',
    padding: 10,
    borderRadius: 5,
    marginTop: 4.0,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Nunito-Black',
    marginLeft: 20,
    marginTop: 3.5,
    color: '#FF7306'
  }
});

export default Routes;
