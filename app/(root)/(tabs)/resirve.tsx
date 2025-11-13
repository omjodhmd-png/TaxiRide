import { Image } from 'expo-image';
import { Link, Redirect } from 'expo-router';
import { useRef, useState } from 'react';
import { Animated, Dimensions, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get("window");


export default function HomeScreen() {
        
     const [open,setOpen]=useState(false)
     const animation=useRef(new Animated.Value(0)).current;
     

    const toggleDropdown =()=>{
      Animated.timing(animation, {
        toValue: open? 0:1,
        duration:300,
        useNativeDriver:false,
      }).start();
      setOpen(!open);
    };
    const height=animation.interpolate({
      inputRange:[0,1],
      outputRange:[0,120],
    });
 


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#008080" }}>
      <View style={styles.texh1}>
        <Text style={styles.h1}>Resorvation Taxi</Text>
      </View>
      <TouchableOpacity   style={styles.places}>
      <Text style={styles.inpu}>Choose Location </Text>
      </TouchableOpacity>
      <Animated.View style={[styles.dropdown, { height }]}>
        <Text style={styles.item}>الخيار 1</Text>
        <Text style={styles.item}>الخيار 2</Text>
        <Text style={styles.item}>الخيار 3</Text>
      </Animated.View>



    </SafeAreaView>

  )

}
const styles = StyleSheet.create({
  places:{width:width,height:50,alignItems:"center"},
  inpu:{
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    width:300,
    height:40,
    fontWeight:"400"

      },
  texh1: {
    marginLeft: 20,
    height: height * 0.3,
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    

    // backgroundColor: "rgba(255,255,255,0.15)",
    // borderRadius: 20,
    // borderWidth: 1,
    // borderColor: "rgba(255,255,255,0.4)",
    // shadowColor: "#000",
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
    // shadowOffset: { width: 0, height: 4 },

  },
  h1: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
    fontFamily:"Montserrat"



  }
})

