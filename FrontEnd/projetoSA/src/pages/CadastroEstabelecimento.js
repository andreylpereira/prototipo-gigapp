import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const CadastroEstabelecimento = ({navigation}) => {
  return (
    <>
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
          textContentType={'password'}
          secureTextEntry={true}
          autoCorrect={false}></TextInput>
        <TextInput
          style={css.input}
          placeholder="Confirmar senha"
          textContentType={'password'}
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
          onPress={() => navigation.navigate('Login')}>
          <Text style={css.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
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
    borderColor: '#FF8069',
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

export default CadastroEstabelecimento;
