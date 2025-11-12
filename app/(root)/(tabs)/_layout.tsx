import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
            backgroundColor: '#fff',  // اللون ديال الخلفية
            borderTopWidth: 0,           // نحيد البوردر الفوقاني
            elevation: 5,   
                        
            height: 50, 
            width:300,
            marginLeft:30,                 // الطول ديال الـ tab bar
            borderRadius: 20,            // الزوايا مدورة
            position: 'absolute',        // باش تعزلها عن الأسفل
            margin: 10, 
            marginBottom:20                 // مسافة على الجوانب
          },
          tabBarShowLabel: true,         // واش تبين النص تحت الأيقونة
          tabBarActiveTintColor: '#008080',   // اللون ديال التاب المفعلة
          tabBarInactiveTintColor: 'black',    // اللون ديال التابات الغير مفعلة
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginBottom:5,
          },
        }}>
             <Tabs.Screen name="map" options={{
                headerShown: false, 
               tabBarIcon: ({ color, size }) => <Ionicons name="map-outline" size={size} color={color} />
           }} />
            <Tabs.Screen name="resirve" options={{
                 headerShown: false, 
                tabBarIcon: ({ color, size }) => <Ionicons name="ticket" size={size} color={color} />
            }} />
           
            <Tabs.Screen name="hestory" options={{
              
                tabBarIcon: ({color,size}) => <Ionicons name="person-outline" size={size} color={color} />
            }} />
        </Tabs>
    );
}
