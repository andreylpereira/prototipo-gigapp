import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

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
        <View>
          <Icon
            name={'musical-notes'}
            size={250}
            color={'#FFF'}
            style={css.logo}
          />
          <Text style={css.subtitle}>make your gig!</Text>
        </View>

        <TextInput
          style={css.input}
          placeholder="E-mail"
          textContentType={'emailAddress'}
          autoCorrect={false}></TextInput>
        <TextInput
          style={css.input}
          placeholder="Senha"
          textContentType={'password'}
          secureTextEntry={true}
          autoCorrect={false}></TextInput>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
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
    fontSize: 25,
    fontWeight: 'bold',
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
    fontSize: 17,
  },
  cadastrar: {
    color: '#CDCCCE',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 18,
  },
  logo: {
    width: 275,
    marginBottom: 7.5,
    borderWidth: 3,
    borderRadius: 180,
    borderColor: '#CDCCCE',
    backgroundColor: 'tomato',
  },
  subtitle: {
    marginBottom: 25,
    color: 'white',
    fontSize: 38,
    fontFamily: 'DancingScript-Bold',
    alignSelf: 'center'
  },
});

export default Login;
