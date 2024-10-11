import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '@/helpers/common'
import { theme } from '@/constants/theme'

const NutrientComponent = () => {
  return (
    <View style={styles.container}>
        <View style={styles.subBox}>
            <View style={styles.innerBox}>
                <Text style={styles.textStyle}>
                    5000
                </Text>
                <View style={{height:hp(0.5),width:"95%",borderRadius:hp(5),backgroundColor:'#D2042D'}}/>
                <Text style={[styles.textStyle]}>
                    Proteins
                </Text>
            </View>

            <View style={styles.innerBox}>
                <Text style={styles.textStyle}>
                    230
                </Text>
                <View style={{height:hp(0.5),width:"95%",borderRadius:hp(5),backgroundColor:theme.colors.primary}}/>
                <Text style={styles.textStyle}>
                    Fats
                </Text>
            </View>

            <View style={styles.innerBox}>
                <Text style={styles.textStyle}>
                    400
                </Text>
                <View style={{height:hp(0.5),width:"95%",borderRadius:hp(5),backgroundColor:'#FFA500'}}/>
                <Text style={styles.textStyle}>
                    Carbs
                </Text>
            </View>
        </View>
        
        
        <View style={styles.subBox}>
            <View style={[styles.innerBox,{width:"100%"}]}>
            <Text style={styles.textStyle}>
                3400
            </Text>
            <View style={{height:hp(0.5),width:'95%',borderRadius:hp(5),backgroundColor:theme.colors.primary}}/>
            <Text style={styles.textStyle}>
                Calories
            </Text>
            </View>
            </View>
    </View>
  )
}

export default NutrientComponent

const styles = StyleSheet.create({
    container:{
        marginTop:hp(5),
        height:hp(20),
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
        elevation:5,
        padding:5,
        paddingLeft:10,
        gap:5
    },
    subBox:{
        height:hp(10),
        width:"100%",
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        padding:5
    },
    innerBox:{
        width:wp(25),
        alignItems:'center',
        justifyContent:'center',
        gap:3,
        textAlign:'center'
    },
    textStyle:{
        fontSize:hp(2),
        fontWeight:'400',
        color:theme.colors.textLight
    }


})