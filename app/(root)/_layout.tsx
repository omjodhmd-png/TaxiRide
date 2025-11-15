import { HeaderShownContext } from '@react-navigation/elements';
import { Stack, Tabs } from 'expo-router';
import React from 'react';




export default function TabLayout() {
 

  return (
    <Stack screenOptions={ {headerShown: false}}>
    <Stack.Screen name="resirve" options={{ headerShown: false }} />
    </Stack>
  );
}
