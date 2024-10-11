import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from "@/constants/theme";

export default function TabLayout()
{
    return(
        <Tabs 
        screenOptions={{
            tabBarActiveTintColor: theme.colors.primary,
            headerShown: false
        }}>
            <Tabs.Screen 
            name="scan"
            options={{
                title:"Scan",
                tabBarIcon:({color})=><Ionicons name="scan" size={24} color={color} 
                headerShown={false}
                />
            }}
            />
            <Tabs.Screen 
            name="view"
            options={{
                title:"Scan",
                tabBarIcon:({color})=><Ionicons name="scan" size={24} color={color} 
                headerShown={false}
                />
            }}
            />

        </Tabs>
    )
}
