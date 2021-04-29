import React from 'react';

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
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'white',
  },
});

export default Perfil;
