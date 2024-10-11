import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons'
import Feather from '@expo/vector-icons/Feather';

const TabBar = ({state,descriptors,navigation}:any) => {
    const icons: { [key: string]: any } = {
        scan:(props:any)=><Ionicons name="scan" size={30} color={props.color} />,
        view:(props:any)=><Feather name="pie-chart" size={30} color={props.color} />
    }


  
    return (
    <View style={styles.tabbar}>
    {state.routes.map((route:any, index:any) => {
      const { options } = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name, route.params);
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <TouchableOpacity
            key={route.name}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={styles.tabItem}
        >
            {
                icons[route.name]({
                    color:isFocused ? theme.colors.white : theme.colors.tabIconColor
                })
            }

          <Text style={{ color: isFocused ? theme.colors.white :theme.colors.tabIconColor  ,fontWeight:'500'}}>
            {label}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
    tabbar:{
        position:"absolute",
        bottom:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:theme.colors.primary,
        marginHorizontal:10,
        //paddingVertical:5,
        borderCurve:'continuous',
        borderRadius:20,
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:20,
        },
        shadowOpacity:0.25,
        shadowRadius:10,
        elevation:2,
    },
    tabItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    }

})