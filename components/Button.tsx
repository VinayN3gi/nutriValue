import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme'
import { hp } from '@/helpers/common'
import Loading from './Loading'

interface ButtonProps{
  buttonStyle?:any,
  textStyle?:any,
  title:string,
  onPress?:()=>void,
  isLoading?:boolean,
  hasShadow?:boolean,
}



const Button = ({onPress,buttonStyle,textStyle,title,isLoading=false,hasShadow=true}:ButtonProps) => {
  const shadowStyle={
    shadowColor:theme.colors.dark,
    shadowOffset:{
      width:0,
      height:20
    },
    shadowOpacity:0.25,
    shadowRadius:8,
    elevation:4
  }

  if(isLoading)
  {
    return(
      <View style={[styles.button,buttonStyle,{backgroundColor:'white'}]}>
        <Loading/>
      </View>
    )
  }
  
  return (
    <Pressable onPress={onPress} style={[styles.button,buttonStyle,hasShadow && shadowStyle]}>
      <Text style={[textStyle,styles.text]}>
        {title}
      </Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  button:{
    backgroundColor:theme.colors.primary,
    height:hp(6.6),
    justifyContent:'center',
    alignItems:'center',
    borderCurve:'continuous',
    borderRadius:theme.radius.xl,
    width:'100%',
  },


  text:{
    fontSize:hp(3),
    color:theme.colors.white,
    fontWeight:500,
  },
})