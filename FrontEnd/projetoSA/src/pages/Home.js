import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const mapLightStyle = [  {
  "featureType": "administrative",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#d6e2e6"
    }
  ]
},
{
  "featureType": "administrative",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#cfd4d5"
    }
  ]
},
{
  "featureType": "administrative",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#1C1C1C"
    }
  ]
},
{
  "featureType": "administrative.neighborhood",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "lightness": 100
    }
  ]
},
{
  "featureType": "landscape.man_made",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#E6ECED"
    }
  ]
},
{
  "featureType": "landscape.man_made",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#cfd4d5"
    }
  ]
},
{
  "featureType": "landscape.natural",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#E6ECED"
    }
  ]
},
{
  "featureType": "landscape.natural",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#1C1C1C"
    }
  ]
},
{
  "featureType": "landscape.natural.terrain",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#E6ECED"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.icon",
  "stylers": [
    {
      "saturation": -100
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#588ca4"
      //"color": "#B5B5B5"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#a9de83"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#bae6a1"
    }
  ]
},
{
  "featureType": "poi.sports_complex",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#c6e8b3"
    }
  ]
},
{
  "featureType": "poi.sports_complex",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#bae6a1"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "labels.icon",
  "stylers": [
    {
      "saturation": -45
    },
    {
      "lightness": 10
    },
    {
      "visibility": "on"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#1C1C1C"
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#ffffff"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#B2BCFF"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#A6AFED"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "labels.icon",
  "stylers": [
    {
      "visibility": "on"
    }
  ]
},
{
  "featureType": "road.highway.controlled_access",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#9fb6bd"
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#ffffff"
    }
  ]
},
{
  "featureType": "transit",
  "elementType": "labels.icon",
  "stylers": [
    {
      "saturation": -70
    }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#939294"
    }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#939294"
    }
  ]
},
{
  "featureType": "transit.station",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#008cb5"
    }
  ]
},
{
  "featureType": "transit.station.airport",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "saturation": -100
    },
    {
      "lightness": -5
    }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#a6cbe3"
    }
  ]
}
]


const Home = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>
      {/* <View style={css.card}>
          <Text style={css.text}> App desenvolvido por alunos no curso de Análise e Desenvolvimento de Sistema do Senai/SC com o objetivo de por em pratica o conhecimento desenvolvido durante o semestre através de uma situação de aprendizagem.
          </Text>
          <Text/>
        </View> */}
        <View style={css.containerMap}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={css.map}
            customMapStyle={mapLightStyle}
            region={{
              latitude: -27.601728,
              longitude: -48.525906,
              latitudeDelta: 0.1922,
              longitudeDelta: 0.0421,
            }}>
              <Marker
              coordinate={{
                latitude: -27.558764,
                longitude: -48.493178,
              }}
              image={require('../assets/maps/drink.png')}
              title="teste"
              description="Teste"
              >
                <Callout tooltip>
                  <View>
                    <View style={css.bubble}>
                    <Text style={css.mapText}>
                      TESTE
                    </Text>
                    <Text style={css.mapText}>
                      TESTE2
                    </Text>
                    </View>
                    <View style={css.arrowBorder}/>
                    <View style={css.arrow}/>
                  </View>
                </Callout>
              </Marker>
              <Marker
              coordinate={{
                latitude: -27.601728,
                longitude: -48.525906,
              }}
              image={require('../assets/maps/band.png')}
              title="teste"
              description="Teste"
              >
                <Callout tooltip>
                  <View>
                    <View style={css.bubble}>
                    <Text style={css.mapText}>
                      TESTE
                    </Text>
                    <Text style={css.mapText}>
                      TESTE2
                    </Text>
                    </View>
                    <View style={css.arrowBorder}/>
                    <View style={css.arrow}/>
                  </View>
                </Callout>
              </Marker>
            </MapView>
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
    // height: 300,
    height: '95%',
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
  bubble: {
    // flexDirection: 'row',
    // alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150
  },
  mapText: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    marginBottom: 5
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,

  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  }
});

export default Home;
