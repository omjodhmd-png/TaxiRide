import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";
import {useVisitedStore} from "@/stor/visitedstor"; 

export default function HistoryScreen() {
  const visitedPlaces = useVisitedStore(state => state.visitedPlaces);
  const loadVisitedPlaces = useVisitedStore(state => state.loadVisitedPlaces);

  useEffect(() => {
    loadVisitedPlaces();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visited Places</Text>

      {visitedPlaces.length === 0 ? (
        <Text style={styles.empty}>No visited places yet</Text>
      ) : (
        <FlatList
          data={visitedPlaces}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={SlideInRight.delay(index * 120)}
              style={styles.item}
            >
              <Text style={styles.itemText}>{item}</Text>
            </Animated.View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
    color: "#777",
  },
  item: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    color: "#333",
  },
});

 