import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
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
      <View style={css.card}>
          <Text style={css.text}> App desenvolvido por alunos no curso de Análise e Desenvolvimento de Sistema do Senai/SC com o objetivo de por em pratica o conhecimento desenvolvido durante o semestre através de uma situação de aprendizagem.
          </Text>
          <Text/>
          <Text style={css.text, {fontFamily: 'Nunito-Bold'}}> Desenvolvido por: Andrey, Marzeu, Raphael e Renan.
          </Text>
        </View>
        <View style={css.containerMap}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={css.map}
            region={{
              latitude: -27.601728,
              longitude: -48.525906,
              latitudeDelta: 0.1922,
              longitudeDelta: 0.0421,
            }}></MapView>
        </View>
      </View>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  containerMap: {
    height: 300,
    width: '95%',
    borderWidth: 5,
    elevation: 9.5,
    borderRadius: 7.5,
    borderColor: '#FFF',
    backgroundColor: '#131313',
  },
  card: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    width: '95%',
    padding: 10,
    elevation: 9.5,
    borderRadius: 7.5,
    textAlign: 'left'
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Home;
