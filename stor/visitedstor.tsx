import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useVisitedStore = create((set, get) => ({
  visitedPlaces: [],

  loadVisitedPlaces: async () => {
    const stored = await AsyncStorage.getItem("VISITED_PLACES");
    if (stored) set({ visitedPlaces: JSON.parse(stored) });
  },

  saveVisitedPlace: async (place) => {
    const prev = get().visitedPlaces;
    const updated = [...prev, place];

    await AsyncStorage.setItem("VISITED_PLACES", JSON.stringify(updated));

    set({ visitedPlaces: updated });
  }
}));
