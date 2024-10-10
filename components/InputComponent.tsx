import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme'
import { hp } from '@/helpers/common'

interface InputComponentProps {
    icon?:React.ReactNode,
    containerStyle?:any,
    inputRef?:any,
    placeHolderText:string,
    onChangeText?:(value:string)=>void,
    secureTextEntryStatus?:boolean
}

const InputComponent = ({onChangeText,icon,containerStyle,inputRef,placeHolderText,secureTextEntryStatus=false}:InputComponentProps) => {
    
  return (
    <View style={[styles.container,containerStyle && containerStyle]}>
       {
        icon && icon
       }
      <TextInput style={{flex:1,}} placeholderTextColor={theme.colors.textLight} ref={inputRef && inputRef}
        onChangeText={onChangeText}
        placeholder={placeHolderText}
        secureTextEntry={secureTextEntryStatus}
      />
    </View>
  )
}

export default InputComponent

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:hp(8),
        borderWidth:0.4,
        borderColor:theme.colors.text,
        borderRadius:22,
        borderCurve:'continuous',
        borderStyle:'solid',
        paddingHorizontal:18,
        gap:12
    }
})