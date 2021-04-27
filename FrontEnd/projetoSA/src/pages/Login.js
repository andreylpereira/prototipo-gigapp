import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>
        
        <TextInput style={css.input}placeholder="E-mail" textContentType={'emailAddress'} autoCorrect={false}></TextInput>
        <TextInput style={css.input} placeholder="Senha" textContentType={'password'} secureTextEntry={true} autoCorrect={false}></TextInput>

        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}>
          <Text style={css.cadastrar}>Cadastrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={css.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={css.buttonText}>Entrar</Text>
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
    height:'100%',
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CDCCCE',
    width: '70%',
    height: 40,
    backgroundColor: 'tomato',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 3,
    fontSize: 21,
    fontWeight: 'bold',
    
  },
  input: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    width: '90%',
    height: 40,
    borderRadius: 7,
    borderColor: '#000',
    padding: 10,

    marginTop: 15,
    fontSize: 17
  },
  cadastrar: {
    color: '#CDCCCE',
    fontWeight: 'bold',
    marginTop: 5,
  }
});

export default Login;
