import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from "@/constants/theme";
import TabBar from "@/components/TabBar";


export default function TabLayout()
{
    return(
        <Tabs 
        tabBar={props=><TabBar {...props}/> }
        screenOptions={{
            tabBarActiveTintColor: theme.colors.primary,
            headerShown: false
        }}>
            <Tabs.Screen 
            name="scan"
            options={{
                title:"Scan",
                tabBarIcon:({color})=><Ionicons name="scan" size={24} color={color} />
            }}
            />
            <Tabs.Screen 
            name="view"
            options={{
                title:"Diary",
                tabBarIcon:({color})=><Ionicons name="scan" size={24} color={color} 
                headerShown={false}
                />
            }}
            />

        </Tabs>
    )
}
