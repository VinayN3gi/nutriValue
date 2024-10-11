import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Display from '@/components/Display'

const scan = () => {
  return (
    <ScreenWrapper bg="white">
        <View style={styles.container}>
            <Display/>
        </View>
    </ScreenWrapper>
  )
}

export default scan

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginHorizontal:20
    }

})