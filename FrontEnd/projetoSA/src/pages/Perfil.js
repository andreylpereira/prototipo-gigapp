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
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>
        <View style={css.containerDados}>
        <Icon name="person-circle" color={'tomato'} size={90}
        style={css.logo} />

        <Text style={css.text}>Dazaranha</Text>
        <Text style={css.text}>Banda</Text>
        <Text style={css.text}>thedazaranha@yahoo.com.br</Text>
        <Text style={{marginBottom: 25}, css.text}>48-9696-6969</Text>
        </View>
        <TouchableOpacity
          style={css.button}
          onPress={() => navigation.navigate('EditarPerfil')}>
          <Text style={css.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  containerDados: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: 'tomato',
    borderRadius: 12.5,
    width: '90%',
    elevation: 7.5
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
    elevation: 7.5
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 3,
    fontSize: 23,
    fontFamily: 'Nunito-Black',
  },
  text: {
    alignSelf: 'center',
    backgroundColor: '#f9f6f7',
    width: '70%',
    height: 40,
    borderRadius: 21,
    borderWidth:1,
    borderColor: 'tomato',
    padding: 10,
    marginBottom: 15,
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
    elevation: 7.5
  },
  logo: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 180,
    width: 85,
    height: 95,
    marginBottom: 15,
    marginTop: 15,
    
  }
 
});

export default Perfil;
