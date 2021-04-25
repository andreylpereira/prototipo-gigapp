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
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: '65%',
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

export default Login;
