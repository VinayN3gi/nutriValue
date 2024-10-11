import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Display from '@/components/Display'
import NutrientComponent from '@/components/NutrientComponent'

const scan = () => {
  return (
    <ScreenWrapper bg="CCCCCC">
        <View style={styles.container}>
            <NutrientComponent/>
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