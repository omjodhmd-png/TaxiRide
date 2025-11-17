import { Image } from 'expo-image';
import { Link, Redirect, router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Alert, Dimensions, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get("window");
import DropDownPicker from "react-native-dropdown-picker";
import { places } from "@/constants/place";
import { taxis } from "@/constants/plases";
import { calculateDistance } from '../../constants/calcule';
import { calculatePrice } from '../../constants/calcule';
import { calculateTime } from '../../constants/calcule';
import { useVisitedStore } from "@/stor/visitedstor";

import Animated, { useAnimatedStyle, withTiming, useSharedValue } from 'react-native-reanimated';






export default function HomeScreen() {
  const translateY = useSharedValue(height);

  const animeted = () => {

    translateY.value = withTiming(height / 4 - 100, { duration: 1000, delay: 500 })
  };
  const tapAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }]
    }
  });
  const translate1Y = useSharedValue(0);

  const animeted1 = () => {

    translate1Y.value = withTiming(-height*0.75, { duration: 1000, delay: 500 })
  };
  const tapAnimatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translate1Y.value }]
    }
  });
  const translateX = useSharedValue(700);

  const animetedX = () => {

    translateX.value = withTiming(0, { duration: 2000, delay: 500 })
  };
  const tapAnimatedStyleX = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }]
    }
  })


  const loadVisitedPlaces = useVisitedStore(state => state.loadVisitedPlaces);
  const saveVisitedPlace = useVisitedStore(state => state.saveVisitedPlace);

  useEffect(() => {
    loadVisitedPlaces();
  }, []);
  



  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const selectedPlace = value ? places.find(p => p.id === value) : null;


  const [items, setItems] = useState(
    places.map((item) => ({
      label: item.name,
      value: item.id,
    })));
  const [taxiOpen, setTaxiOpen] = useState(false);
  const [taxiValue, setTaxiValue] = useState(null);
  const selectedTaxi = taxiValue ? taxis.find(t => t.id === taxiValue) : null;

  const [item, setItem] = useState(
    taxis.map((dra) => ({
      label: dra.locationName,
      value: dra.id,
    }))
  );
  const [distanceResult, setDistanceResult] = useState(null);

  const distancehandel = () => {
    if (!selectedPlace || !selectedTaxi) {
      alert("choisisse");
      return;
    }
    const distance = calculateDistance({ latitude: selectedPlace.place[0].latitude, longitude: selectedPlace.place[0].longitude },
      { latitude: selectedTaxi.coordinates.latitude, longitude: selectedTaxi.coordinates.longitude });
    const distanceStr = distance ? distance.toFixed(2) + " km" : "-";
    setDistanceResult(distanceStr);
    return distance;
  };
  const [price, setPrice] = useState(null)

  const handelprice = (distance) => {

    if (!distance) return;
    const pricetotel = calculatePrice(distance)
    setPrice(pricetotel);

  };
  const [time, setTime] = useState(null);
  const handleTime = (distance) => {
    if (!distance) return;
    const totalTime = calculateTime(distance);
    setTime(totalTime);
  };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#008080" }}>


      <Animated.View style={tapAnimatedStyle1}>
        <View style={styles.texh1}>
          <Text style={styles.h1}>Resorvation Taxi</Text>
        </View>
        <View style={styles.container1}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="where are you "
            listMode="SCROLLVIEW"
            dropDownContainerStyle={{ maxHeight: 150 }}
            
            scrollViewProps={{
              nestedScrollEnabled: true,}}
          />
        </View>
        <View style={styles.container2}>
          <DropDownPicker
            open={taxiOpen}
            value={taxiValue}
            items={item}
            setOpen={setTaxiOpen}
            setValue={setTaxiValue}
            setItems={setItem}
            placeholder="where you want a go"
            listMode="SCROLLVIEW"
            dropDownContainerStyle={{ maxHeight: 150 }}
          />
        </View>
        <TouchableOpacity style={styles.buttp} onPress={() => {
          const distance = distancehandel();
          handelprice(distance);
          handleTime(distance);
          animeted();
          animeted1();
          animetedX();
          
        }}>
          <Text style={styles.but}>
            GO To Cart
          </Text>
        </TouchableOpacity>
        <View>

        </View>
      </Animated.View>
      <Animated.View style={[styles.animat, tapAnimatedStyle]}>
        <Animated.View style={[styles.hhh, tapAnimatedStyleX]}>
          {selectedTaxi && (
            <View style={{}}>
              <Text style={styles.inf}>Driver : {selectedTaxi.driver}</Text>
              <Text style={styles.inf}>Plate : {selectedTaxi.plate}</Text>
              <Text style={styles.inf}>Rating : {selectedTaxi.rating}🌟</Text>
              <Text style={styles.inf}>About : {selectedTaxi.description}</Text>
            </View>)}

          <View style={{ height: 100, marginTop: 20 }}>
            <Text style={styles.inf}>Distance : {distanceResult}</Text>

            <Text style={styles.inf}>Will arrive in : {time !== null ? time + " min" : "-"}
            </Text>
          </View>

          <View style={{
            marginTop: 40, marginLeft: 20,
            backgroundColor: "#FFF8E7", height: 50, width: 300, borderRadius: 10
          }} >
            <Text style={styles.inf1}>Totl price : {price !== null ? price + " DH" : "-"}</Text>
          </View >

          <TouchableOpacity style={styles.booking}  onPress={()=>{
            if (selectedPlace) {
            saveVisitedPlace(selectedPlace.name);
            Alert.alert(
              "Reservation",
              "Your taxi has been successfully reserved! 🚕",
              [
                {
                  text: "OK",
                  onPress: () => router.push("/map"),
                }
              ]
            );
          
          }}}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#008080" }}>booking</Text>
          </TouchableOpacity>
        </Animated.View>

      </Animated.View>

    </SafeAreaView>

  )

}
const styles = StyleSheet.create({
  booking:{
    width: 150, backgroundColor: "white", height: 40, marginTop: 20, justifyContent: "center",
    alignItems: "center", borderRadius: 20, marginLeft: 90
  },
  
  
  hhh: { flex: 1 },
  inf: {
    color: "#008080",
    fontSize: 20,
    paddingLeft: 10,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    fontWeight: "bold",
    elevation: 6


  }, inf1: {
    color: "red",
    elevation: 6,
    fontSize: 25,
    paddingLeft: 30,
    fontWeight: "bold",
    marginTop: 10,



  },


  animat: {

    width: width * 0.95, margin: 10,
    height: height * 0.8,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    position: "absolute",

    shadowOffset: { width: 0, height: 4 },
  },
  but: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#008080"
  },
  container1: {
    marginTop: 10,
    paddingHorizontal: 20,
    zIndex: 4000,
    elevation:4000

  },
  container2: {
    marginTop: 20,
    paddingHorizontal: 20,
    zIndex: 2000,
    elevation:2000



  },
  texh1: {
    marginLeft: width * 0.06,
    height: height * 0.2,
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
    marginTop: 30,

  },
  h1: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
    fontFamily: "monospace",
  },
  buttp: {
    marginTop: 90,
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
    width: width * 0.3,
    marginLeft: width * 0.35,
    borderRadius: 20,
    justifyContent: "center",

  }
})

