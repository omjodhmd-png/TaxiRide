import { Image } from 'expo-image';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { taxis } from "@/constants/plases";

import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useRef, useState } from 'react';
import { router } from 'expo-router';
const { width, height } = Dimensions.get("window");
import {UserLocation} from "@/stor/usestor";



export default function TabTwoScreen() {

  const [place, setplace] = useState([]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#008080" }}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 33.5731,
            longitude: -7.5898,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >


          {taxis.map((item) => (

            <Marker
              key={item.id}
              coordinate={item.coordinates}
              title={item.driver}
              onPress={() => setplace(item.routes)}
            />))}
          {place.map((route, index) => (
            <Marker
              key={`route-${index}`}
              coordinate={route}
              pinColor="blue"
            />
          ))}
        </MapView>
      </View>
      <View style={styles.h2}>
        <Text style={styles.h22}><Ionicons name='map' size={20} color="white" /> Casablanca</Text>
      </View>
      <TouchableOpacity onPress={UserLocation} style={styles.maplase}>
      <Ionicons name="locate" size={50} color="blue" />
      </TouchableOpacity>



    </SafeAreaView >)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,

  },
  h2: {
    position: "absolute",
    width: width,
    height: 200,
    marginTop: 20,

    justifyContent: "center",
    alignItems: "center"
  },
  h22: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white"


  },
  maplase:{
    left:300,
    top:650,
    position:"absolute",
  
    
  }

});