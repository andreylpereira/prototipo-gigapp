import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Avaliacao = ({navigation}) => {
  const [notas] = useState(['10,00', '9,00', '8,00', '7,00', '6,00', '5,00', '4,00', '3,00', '2,00', '1,00', '0,00']);
  const [notaSelecionada, setNotaSelecionada] = useState([]);

function Perfils(perfil) {
  if (perfil == 'Banda') {
    return (
      <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>

        <Text style={css.tittle}>Avalie o estabelecimento</Text>
        <View style={css.input}>
          <Picker
            style={{marginTop: -15, fontFamily: 'Nunito-Bold', fontSize: 15}}
            selectedValue={notaSelecionada}
            onValueChange={(itemValue, itemIndex) =>
              setNotaSelecionada(itemValue)
            }>
            {notas.map((itemValue, itemIndex) => {
              return (
                <Picker.Item
                  label={itemValue}
                  value={itemIndex}
                  key={itemIndex}
                />
              );
            })}
          </Picker>
        </View>
        <TouchableOpacity
          style={css.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={css.buttonText}>Avaliar</Text>
        </TouchableOpacity>
      </View>
    </>
    );
  }
  if (perfil == 'Estabelecimento') {
    return (
      <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>

        <Text style={css.tittle}>Avalie a banda nº 1</Text>
        <View style={css.input}>
          <Picker
            style={{marginTop: -15, fontFamily: 'Nunito-Bold', fontSize: 15}}
            selectedValue={notaSelecionada}
            onValueChange={(itemValue, itemIndex) =>
              setNotaSelecionada(itemValue)
            }>
            {notas.map((itemValue, itemIndex) => {
              return (
                <Picker.Item
                  label={itemValue}
                  value={itemIndex}
                  key={itemIndex}
                />
              );
            })}
          </Picker>
        </View>

        <Text style={css.tittle}>Avalie a banda nº 2</Text>
        <View style={css.input}>
          <Picker
            style={{marginTop: -15, fontFamily: 'Nunito-Bold', fontSize: 15}}
            selectedValue={notaSelecionada}
            onValueChange={(itemValue, itemIndex) =>
              setNotaSelecionada(itemValue)
            }>
            {notas.map((itemValue, itemIndex) => {
              return (
                <Picker.Item
                  label={itemValue}
                  value={itemIndex}
                  key={itemIndex}
                />
              );
            })}
          </Picker>
        </View>
        <TouchableOpacity
          style={css.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={css.buttonText}>Avaliar</Text>
        </TouchableOpacity>
      </View>
    </>
    );
  } else {
    return (
      <View>
        <Text style={css.error}>Error ao carregar</Text>
      </View>
    );
  }
}
return <>{Perfils('Estabelecimento')}</>;
};

const css = StyleSheet.create({
  container: {
    // backgroundColor: '#131313',
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
    marginTop: 30,
    elevation: 9.5,
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
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
    elevation: 9.5,
  },
  tittle: {
    fontFamily: 'Nunito-Black',
    fontSize: 18,
    marginBottom: 5
  }
});

export default Avaliacao;