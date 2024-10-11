import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
   <Stack screenOptions={{
    headerShown:false
   }}>
    <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    <Stack.Screen name="loginScreen"/>
    <Stack.Screen name="index"/>
    <Stack.Screen name="signScreen"/>
   </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})