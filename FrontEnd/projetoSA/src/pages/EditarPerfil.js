import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const EditarPerfil = ({navigation}) => {
  function Perfils(perfil) {
    if (perfil == 'Banda') {
      return (
        <View>
          <StatusBar barStyle="dark-content" hidden={true} />

          <View style={css.container}>
            <TextInput
              style={css.input}
              placeholder="Nome"
              autoCorrect={false}></TextInput>
            <TextInput
              style={css.input}
              placeholder="E-mail"
              autoCorrect={false}></TextInput>
            <TextInput
              style={css.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCorrect={false}></TextInput>
            <TextInput
              style={css.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCorrect={false}></TextInput>
            <TextInput
              style={css.input}
              placeholder="Telefone"
              autoCorrect={false}></TextInput>
            <TouchableOpacity
              style={css.button}
              onPress={() => navigation.navigate('CadastroEstabelecimento')}>
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
            <TextInput
              style={css.input}
              placeholder="Nome"
              autoCorrect={false}></TextInput>
            <TextInput
              style={css.input}
              placeholder="E-mail"
              autoCorrect={false}></TextInput>
            <TextInput
              style={css.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCorrect={false}></TextInput>
            <TextInput
              style={css.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCorrect={false}></TextInput>
            <TextInput
              style={css.input}
              placeholder="Telefone"
              autoCorrect={false}></TextInput>
            <TextInput
              style={css.input}
              placeholder="Endereço"
              autoCorrect={false}></TextInput>
            <TextInput
              style={css.input}
              placeholder="Cidade"
              autoCorrect={false}></TextInput>
            <TextInput
              style={css.input}
              placeholder="Estado"
              autoCorrect={false}></TextInput>
            <TouchableOpacity
              style={css.button}
              onPress={() => navigation.navigate('CadastroEstabelecimento')}>
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
  return <>{Perfils('Banda')}</>;
};

const css = StyleSheet.create({
  container: {
    backgroundColor: '#131313',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
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
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 3,
    fontSize: 21,
    fontFamily: 'Nunito-Black',
  },
  input: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    width: '90%',
    height: 40,
    borderRadius: 21,
    borderColor: '#000',
    padding: 10,
    marginTop: 15,
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
  },
});

export default EditarPerfil;