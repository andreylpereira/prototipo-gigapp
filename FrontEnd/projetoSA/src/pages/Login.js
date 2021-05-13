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
            size={200}
            color={'#FFF'}
            style={css.logo}
          />
          <Text style={css.subtitle}>GigApp</Text>
        </View>

        <TextInput
          style={css.input}
          placeholder="E-mail"
          textContentType={'emailAddress'}
          autoCorrect={false}
        />
        <TextInput
          style={css.input}
          placeholder="Senha"
          textContentType={'password'}
          secureTextEntry={true}
          autoCorrect={false}
        />

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
    color: 'black',
    opacity: 0.95,
    width: '90%',
    height: 40,
    borderRadius: 21,
    borderColor: '#000',
    padding: 10,
    marginTop: 15,
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
  },
  cadastrar: {
    color: '#CDCCCE',
    fontFamily: 'Nunito-Bold',
    marginTop: 5,
    fontSize: 16,
  },
  logo: {
    width: 220,
    borderWidth: 3,
    borderRadius: 180,
    borderColor: '#CDCCCE',
    backgroundColor: 'tomato',
  },
  subtitle: {
    marginBottom: 10,
    color: '#CDCCCE',
    fontSize: 38,
    fontFamily: 'DancingScript-Bold',
    alignSelf: 'center',
  },
});

export default Login;
