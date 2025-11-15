import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { Dimensions, View } from "react-native";
const { width, height } = Dimensions.get("window");

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
            backgroundColor: '#fff', 
            borderTopWidth: 0,          
            elevation: 5,   
            marginLeft:20,
            marginRight:20,
            height: 50, 
            width:width*0.9,
                            
            borderRadius: 20,          
            position: 'absolute',       
            margin: 10, 
            marginBottom:20               
          },
          tabBarShowLabel: true,        
          tabBarActiveTintColor: '#008080',  
          tabBarInactiveTintColor: 'black',    
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
          
           
            <Tabs.Screen name="hestory" options={{
              
                tabBarIcon: ({color,size}) => <Ionicons name="person-outline" size={size} color={color} />
            }} />
        </Tabs>
    );
}
