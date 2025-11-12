import { Image } from 'expo-image';
import { Link, Redirect } from 'expo-router';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#008080" }}>
      <View style={styles.texh1}>
        <Text style={styles.h1}>Resorvation Taxi</Text>
      </View>

    </SafeAreaView>

  )

}
const styles = StyleSheet.create({
  texh1: {
    marginLeft: 20,
    height: height * 0.3,
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },

  },
  h1: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white"



  }
})

