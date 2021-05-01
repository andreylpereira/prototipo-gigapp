import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Perfil = ({navigation}) => {
  function Perfils(perfil) {
    if (perfil == 'Banda') {
      return (
        <View>
          <StatusBar barStyle="dark-content" hidden={true} />
          <View style={css.container}>
            <View style={css.card}>
              <Icon
                name="person-circle"
                color={'tomato'}
                size={90}
                style={css.logo}
              />

              <View style={css.text}>
                <Icon name={'headset-outline'} size={15} color={'tomato'} />
                <Text style={css.perfilLabel}>Dazaranha</Text>
              </View>

              <View style={css.text}>
                <Icon
                  name={'musical-notes-outline'}
                  size={15}
                  color={'tomato'}
                />
                <Text style={css.perfilLabel}>Banda</Text>
              </View>

              <View style={css.text}>
                <Icon name={'at'} size={15} color={'tomato'} />
                <Text style={css.perfilLabelEmail}>
                  andrey_lpereira@estudante.senai.sc.br
                </Text>
              </View>

              <View style={css.text}>
                <Icon name={'call-outline'} size={15} color={'tomato'} />
                <Text style={css.perfilLabel}>48-9696-6969</Text>
              </View>
              <View style={{marginBottom: 15}} />
            </View>
            <TouchableOpacity
              style={css.button}
              onPress={() => navigation.navigate('EditarPerfil')}>
              <Text style={css.buttonText}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    if (perfil == 'Estabelecimento') {
      return (
        <View>
          <StatusBar barStyle="dark-content" hidden={true} />
          <View style={css.container}>
            <View style={css.card}>
              <Icon
                name="person-circle"
                color={'tomato'}
                size={90}
                style={css.logo}
              />

              <View style={css.text}>
                <Icon name={'beer-outline'} size={15} color={'tomato'} />
                <Text style={css.perfilLabel}>Chopp do Gus</Text>
              </View>

              <View style={css.text}>
                <Icon name={'business-outline'} size={15} color={'tomato'} />
                <Text style={css.perfilLabel}>Estabelecimento</Text>
              </View>

              <View style={css.text}>
                <Icon name={'at'} size={15} color={'tomato'} />
                <Text style={css.perfilLabelEmail}>andrey_l_pereira@estudante.sc.senai.br</Text>
              </View>

              <View style={css.text}>
                <Icon name={'call-outline'} size={15} color={'tomato'} />
                <Text style={css.perfilLabel}>48-9696-6969</Text>
              </View>

              <View style={css.text}>
                <Icon name={'pin-outline'} size={15} color={'tomato'} />
                <Text style={css.perfilLabelEmail}>
                  Rua: XV de novembro, 24
                </Text>
              </View>

              <View style={css.text}>
                <Icon name={'location-outline'} size={15} color={'tomato'} />
                <Text style={css.perfilLabelEmail}>
                  Florianópolis, Santa Catarina
                </Text>
              </View>

              <View style={{marginBottom: 15}} />
            </View>
            <TouchableOpacity
              style={css.button}
              onPress={() => navigation.navigate('EditarPerfil')}>
              <Text style={css.buttonText}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text
            style={{
              color: '#fff',
              marginTop: '90%',
              textAlign: 'center',
              fontFamily: 'Nunito-Black',
              fontSize: 17,
            }}>
            Error ao carregar
          </Text>
        </View>
      );
    }
  }
  return <>{Perfils('Estabelecimento')}</>;
};

const css = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12.5,
    width: '70%',
    elevation: 7.5,
    paddingBottom: 15,
    marginBottom: 25,
  },
  button: {
    borderWidth: 2,
    borderRadius: 21,
    borderColor: '#CDCCCE',
    width: '70%',
    height: 45,
    backgroundColor: 'tomato',
    alignSelf: 'center',
    marginTop: 20,
    elevation: 7.5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 3,
    fontSize: 21,
    fontFamily: 'Nunito-Black',
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    width: '90%',
    height: 40,
    padding: 10,
    marginBottom: 7.5,
    borderBottomWidth: 1,
    borderBottomColor: '#CDCCCE',
  },
  logo: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: 180,
    width: 85,
    height: 95,
    marginTop: 15,
  },
  perfilLabel: {
    fontFamily: 'Nunito-Bold',
    marginLeft: 5,
  },
  perfilLabelEmail: {
    fontFamily: 'Nunito-Bold',
    fontSize: 10.5,
    marginLeft: 5,
  },
});

export default Perfil;
