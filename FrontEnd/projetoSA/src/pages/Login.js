import React from 'react';

import {StatusBar, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const Login = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View>
        <TouchableOpacity style={css.button} onPress={() => navigation.navigate('Home')}>
        <Text style={css.buttonText}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};


const css = StyleSheet.create({
//   container: {
//     marginLeft: 130,
//     color: '#F5D100',
//   },
      button: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'blue',
        width: 100,
        height: 40,
        backgroundColor: 'dodgerblue',
        alignSelf: 'center',
        marginTop: '80%'
      },
      buttonText: {
        textAlign: 'center',
        color: 'white',
        marginTop: 6,
        fontSize: 15,
        fontWeight: 'bold'
      }
});

export default Login;
