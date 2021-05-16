import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const SelecaoBanda = ({navigation}) => {
  const [bandas] = useState(['Barões da Pisadinha', 'Dazaranha', 'Tchê garotos']);
  const [bandaSelecionada, setBandaSelecionada] = useState([]);

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>

        <Text style={css.tittle}>Selecione banda nº 1</Text>
        <View style={css.input}>
          <Picker
            style={{marginTop: -15}}
            selectedValue={bandaSelecionada}
            onValueChange={(itemValue, itemIndex) =>
              setBandaSelecionada(itemValue)
            }>
            {bandas.map((itemValue, itemIndex) => {
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
        <Text></Text>
        <Text style={css.tittle}>Selecione banda nº 2</Text>
        <View style={css.input}>
          <Picker
            style={{marginTop: -15}}
            selectedValue={bandaSelecionada}
            onValueChange={(itemValue, itemIndex) =>
              setBandaSelecionada(itemValue)
            }>
            {bandas.map((itemValue, itemIndex) => {
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
          <Text style={css.buttonText}>Selecionar</Text>
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
    marginTop: 30,
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
  },
  tittle: {
    color: '#ccc',
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    marginBottom: 5
  }
});

export default SelecaoBanda;