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

              {/* <View style={css.text}>
                <Icon name={'headset-outline'} size={15} color={'tomato'} />
                <Text style={css.perfilLabel}>Dazaranha</Text>
              </View> */}
              <View>
                <Text style={css.tittle}>Dazaranha</Text>
                <View style={css.starLine}>
                  <Text style={css.note}>10,0</Text>
                  <Icon
                    name="star"
                    color={'#FCC51C'}
                    size={12.5}
                    style={{marginLeft: 3, marginTop: 1, opacity: 0.5}}
                  />
                </View>
              </View>

              <View style={css.text}>
                <Icon
                  name={'musical-notes-outline'}
                  size={18}
                  color={'tomato'}
                />
                <Text numberOfLines={1} style={css.perfilLabel}>
                  Banda
                </Text>
              </View>

              <View style={css.text}>
                <Icon name={'headset-outline'} size={18} color={'tomato'} />
                <Text numberOfLines={1} style={css.perfilLabel}>
                  Rock
                </Text>
              </View>

              <View style={css.text}>
                <Icon name={'at'} size={18} color={'tomato'} />
                <Text numberOfLines={1} style={css.perfilLabel}>
                  andrey_lpereira@estudante.senai.sc.br
                </Text>
              </View>

              <View style={css.text}>
                <Icon name={'call-outline'} size={18} color={'tomato'} />
                <Text style={css.perfilLabel}>48-9696-6969</Text>
              </View>

              <View style={css.textDescription}>
                <Icon name={'reader-outline'} size={18} color={'tomato'} />
                <Text numberOfLines={3} style={css.perfilLabel}>
                  Lorem Ipsum is simply dummy text of the printing
                  andtypesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the asd ext ever since the
                  since the since they the asd.
                </Text>
              </View>

              <View style={{marginBottom: 25}} />
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

              <View>
                <Text style={css.tittle}>Chopp do Gus</Text>
                <View style={css.starLine}>
                  <Text style={css.note}>10,0</Text>
                  <Icon
                    name="star"
                    color={'#FCC51C'}
                    size={12.5}
                    style={{marginLeft: 3, marginTop: 1, opacity: 0.5}}
                  />
                </View>
              </View>

              <View style={css.text}>
                <Icon name={'business-outline'} size={18} color={'tomato'} />
                <Text style={css.perfilLabel}>Estabelecimento</Text>
              </View>

              <View style={css.text}>
                <Icon name={'at'} size={18} color={'tomato'} />
                <Text numberOfLines={1} style={css.perfilLabel}>
                  andrey_l_pereira@estudante.sc.senai.br
                </Text>
              </View>

              <View style={css.text}>
                <Icon name={'call-outline'} size={18} color={'tomato'} />
                <Text style={css.perfilLabel}>48-9696-6969</Text>
              </View>

              <View style={css.text}>
                <Icon name={'pin-outline'} size={18} color={'tomato'} />
                <Text numberOfLines={1} style={css.perfilLabel}>
                  Rua: XV de novembro, 24
                </Text>
              </View>

              <View style={css.text}>
                <Icon name={'location-outline'} size={18} color={'tomato'} />
                <Text numberOfLines={1} style={css.perfilLabel}>
                  Florianópolis, Santa Catarina
                </Text>
              </View>

              <View style={{marginBottom: 25}} />
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
    paddingBottom: 25,
    marginBottom: 25,
  },
  tittle: {
    fontFamily: 'Nunito-Black',
    color: '#131313',
    fontSize: 15,
    alignSelf: 'center',
  },
  note: {
    color: '#CDCCCE',
    fontSize: 12,
    fontFamily: 'Nunito-Black',
  },
  starLine: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    borderWidth: 2,
    borderRadius: 21,
    borderColor: '#FF8069',
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
    marginBottom: 4.5,
    borderBottomWidth: 1,
    borderBottomColor: '#CDCCCE',
  },
  textDescription: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    width: '90%',
    height: 80,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CDCCCE',
  },
  logo: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: 180,
    width: 85,
    height: 85,
    marginTop: 15,
  },
  perfilLabel: {
    fontFamily: 'Nunito-Bold',
    marginLeft: 5,
  },
});

export default Perfil;
