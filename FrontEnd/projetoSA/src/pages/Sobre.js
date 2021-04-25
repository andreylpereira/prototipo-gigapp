import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Sobre = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text>Sobre</Text>
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
});

export default Sobre;
