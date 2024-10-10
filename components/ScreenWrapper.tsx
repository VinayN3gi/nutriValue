import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { hp } from '@/helpers/common';

interface ScreenWrapperProps {
    children: React.ReactNode,
    bg: string,

}

const ScreenWrapper = ({children,bg}:ScreenWrapperProps) => {
    const {top}=useSafeAreaInsets();
    const paddingTop=top > 0 ? top+5 : 30;
    return (
    <View style={{flex:1,paddingTop,backgroundColor:bg,borderCurve:'continuous'}}>
        {
            children
        }
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})