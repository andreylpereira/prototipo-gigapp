import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const Cadastro = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>
        
        <TextInput style={css.input}placeholder="Digite seu E-mail" textContentType={'emailAddress'} autoCorrect={false}></TextInput>
        <TextInput style={css.input} placeholder="Digite sua senha" textContentType={'password'} secureTextEntry={true} autoCorrect={false}></TextInput>
        <TextInput style={css.input} placeholder="Repita sua senha" textContentType={'password'} secureTextEntry={true} autoCorrect={false}></TextInput>
        <TextInput style={css.input} placeholder="Digite palavra de segurança" textContentType={'password'} secureTextEntry={true} autoCorrect={false}></TextInput>

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
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'grey',
    width: '70%',
    height: 40,
    backgroundColor: 'dodgerblue',
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: '15%', //Deletar depois
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 6,
    fontSize: 17,
    fontWeight: 'bold',
    
  },
  input: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    width: '90%',
    borderWidth: 2, //Deletar depois
    borderRadius: 7,
    borderColor: '#000',
    padding: 10,
    marginLeft: '15%', //Deletar depois
    marginTop: 15,
    fontSize: 17
  },
  cadastrar: {
    color: 'dodgerblue',
    fontWeight: 'bold',
    marginLeft: 50,
    marginTop: 5,
  }
});

export default Cadastro;
