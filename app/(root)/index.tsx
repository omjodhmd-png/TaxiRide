import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from "react-native-swiper";

import { useRef, useState } from 'react';
import { slides } from '@/constants';



export default function HomeScreen() {
  const swiperRef = useRef<Swiper>(null);
  const [active, steactive] = useState(0)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#008080" }}>

      <View style={{ alignItems: "flex-end", margin: 10 }}>
        <TouchableOpacity onPress={() => { router.push("/map") }} style={{ justifyContent: "flex-end" }}>
          <Text style={{ fontWeight: "bold", color: "white" }}>Skip</Text>
        </TouchableOpacity><Text>    </Text></View>
      <Swiper ref={swiperRef}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={(index) => steactive(index)}>
        {slides.map((item, index) => (
          <View key={item.id} style={styles.parent}>
            <Image source={item.image} style={{ width: "100%", height: "50%", borderRadius: 20 }} />
            <Text style={styles.h1}>{item.title}</Text>
            <View style={styles.discription}>
              <Text style={styles.dis}>{item.description}</Text></View>

            {active === 2 && index === 2 && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/(root)/(tabs)/map")}>
                <Text style={styles.bot}>Get Started</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>




    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#ccc',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#007AFF',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
  parent: {
    flex: 1, alignItems: "center", margin: 20, borderRadius: 20, backgroundColor: "white", shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  h1: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
  },
  discription: {
    width: "100%",

    alignItems: "center",
    height: 200
  },
  dis: {
    opacity: 0.7,
    fontSize: 15,
    margin: 20

  },
  bot: {
    color: 'white',
    fontWeight: "bold",

  },
  button: {
    backgroundColor: "#008080",
    width: 100,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"



  }
})

