import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { hp, wp } from '@/helpers/common'
import { theme } from '@/constants/theme'

const Display = () => {
  return (
    <View style={styles.container}>
        <View style={{flex:1,flexDirection:'row',gap:10}}>

        <View style={{justifyContent:"center"}}>
        <Image source={require('@/assets/images/fire.png')} style={{height:hp(5),width:hp(5)}}/>
        </View>


        <View style={{marginTop:2}}>
        <Text style={{fontSize:hp(2.5),gap:2,fontWeight:'500',color:theme.colors.textDark}}>
            Calories
        </Text>
        <Text style={styles.subtextStyle}>
            some text should come here
        </Text>
        </View>
        </View>

        <View style={{justifyContent:"space-evenly",marginRight:wp(3),gap:2}}>
        <View style={styles.circleStyle}/>
        <Text style={styles.subtextStyle}>
            4567
        </Text>
        </View>
    </View>
  )
}

export default Display

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:hp(5),
        height:hp(8),
        width:wp(95),
        borderCurve:'continuous',
        borderRadius:10,
        backgroundColor:'white',
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:20,
        },
        shadowOpacity:0.25,
        shadowRadius:10,
        elevation:1.5,
        padding:6,
        paddingLeft:15,
        gap:20
    },
    circleStyle:{
        height:hp(3.9),
        width:hp(3.9),
        borderRadius:hp(5/2),
        backgroundColor:theme.colors.primary,
    },
    subtextStyle:{
        fontSize:hp(1.5),
        color:theme.colors.textLight,
        fontWeight:'400',
    }


})