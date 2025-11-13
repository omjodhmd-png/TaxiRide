
import { Dimensions, Platform, StyleSheet, Switch, Text, TouchableOpacity, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { taxis } from "@/constants/plases";
import { places } from "@/constants/place";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useRef, useState } from 'react';
import { router } from 'expo-router';
const { width, height } = Dimensions.get("window");




export default function TabTwoScreen() {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width:60
                }}
              >
                {/* <Image
                  source={require('@/assets/images/taه.png')}
                  style={{
                    width: 60,   
                    height: 50,
                    
                    resizeMode: 'contain',  
                  }}
                /> */}
              
              </View>
            </Marker>))}


          {places.map((item) => (
            <Marker
              key={item.id}
              title={item.name}
              coordinate={item.place[0]}
              pinColor="#008080"
            />
          ))}
        </MapView>
      </View>
      <View style={styles.switchV}>
        <Text style={styles.switche}>{isEnabled ? "Jour(6h-20h)" : "Night(20h-6h)"}</Text>
        <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "yellow" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled} />
      </View>
      <View style={styles.h2}>
        <Text style={styles.h22}><Ionicons name='map' size={20} color="white" /> Casablanca</Text>
      </View>
      <TouchableOpacity style={styles.maplase}>
        <Ionicons name="locate" size={50} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.reserv} onPress={() => router.push("/(root)/(tabs)/resirve")}>
        <Text style={styles.btreserv}>Resirve</Text>
      </TouchableOpacity>


    </SafeAreaView >)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchV: {
    gap: 120,
    flex: 1,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 50,
    position: "absolute",
    // backgroundColor:"#008080",
    width: 300,
    // borderRadius:20,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },


  },
  switche: {
    color: "#008080",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 6,
    paddingLeft: 6


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
  maplase: {
    left: 300,
    top: 650,
    position: "absolute",
  },
  reserv: {
    position: "absolute",
    marginTop: height * 0.87,
    marginLeft: width * 0.3,
    backgroundColor: "#008080",
    width: 150,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5

  },
  btreserv: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  }

});