import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const css = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
});

export default Home;
