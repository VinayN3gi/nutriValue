import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Index from '@/assets/icons/Index'
import { theme } from '@/constants/theme'

interface BackButtonProps {
    size?:number,
    onPress?:()=>void
}


const BackButton = ({onPress,size=26}:BackButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
        <Index name='arrowLeft' strokeWidth={2.5} color={theme.colors.text} size={size}/>
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        alignSelf:'flex-start',
        padding:5,
        borderRadius:theme.radius.sm,
        backgroundColor:'rgba(0,0,0,0.1)'
    }

})