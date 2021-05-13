import React, {useState} from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-datepicker';

const Agendamento = ({navigation}) => {
  const [startDate, setStartDate] = useState(new Date());
  const dataLista = startDate;

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>
        <TextInput
          style={css.input}
          placeholder="Evento"
          autoCorrect={false} />
        <DatePicker
          format="DD/MM/YYYY"
          style={css.dateComponente}
          date={startDate}
          onDateChange={date => setStartDate(date)}
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          mode="date"
          placeholder="Selecione uma data"
          customStyles={{
            dateInput: {
              borderWidth: 0,
            },
          }} />
        <TextInput
          style={css.input}
          placeholder="Valor"
          autoCorrect={false} />
        {/* <TextInput
          style={css.input}
          placeholder="Horário 1"
          autoCorrect={false} />
          <TextInput
          style={css.input}
          placeholder="Horário 2"
          autoCorrect={false} /> */}
        <TextInput
          style={css.description}
          placeholder="Descrição"
          multiline={true}
          numberOfLines={5}
          autoCorrect={false} />

        <TouchableOpacity
          style={css.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={css.buttonText}>Agendar</Text>
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
  description: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    color: 'black',
    opacity: 0.95,
    width: '90%',
    height: 100,
    borderRadius: 21,
    borderColor: '#000',
    padding: 10,
    marginTop: 15,
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
  },
  dateComponente: {
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
    width: '90%',
    opacity: 0.95,
    height: 40,
    borderRadius: 21,
    borderColor: '#000',
    paddingRight: 15,
    marginTop: 15,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
  },
});

export default Agendamento;
