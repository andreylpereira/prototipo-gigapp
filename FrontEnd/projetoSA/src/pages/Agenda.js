import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'teste1'
  },
  {
    id: '2',
    title: 'teste2'
  },
  {
    id: '3',
    title: 'teste3'
  },
]



const Agenda = ({navigation}) => {



  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>

          <Text style={css.title}>Agenda:</Text>
          
          <View style={css.card}>
          {/* <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          /> */}
          </View>
      </View>
    </>
  );
};

const css = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
    title:{
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 15,
      fontFamily: 'Nunito-Bold',
      fontSize: 21,
      elevation: 10
    },
    card: {
      alignSelf: 'center',
      backgroundColor: '#fff',
      marginBottom: 15,
      width: '90%',
      height: 100,
      elevation: 9.5,
      borderRadius: 7.5,
      
    }
});

export default Agenda;
