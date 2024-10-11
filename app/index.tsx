import { View, Text, StatusBar, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { theme } from '@/constants/theme'
import Button from '@/components/Button'
import { hp, wp } from '@/helpers/common'
import { useRouter } from 'expo-router'
import Graph from '@/assets/icons/Graph'



const index = () => {
  const router = useRouter();


  const moveToSignUp = () => {
    router.push('/signScreen')
  }
  return (
    <ScreenWrapper bg="CCCCCC">
      <StatusBar barStyle="dark-content" />
        <View style={styles.container}>

          {/* Logo and Text */}
          <View style={styles.logoContainer}>
            {/*<Image
              source={require('@/assets/images/logo.png')}
              style={styles.logoStyle}
              resizeMode='contain'
            />*/}
            <Graph 
            width={wp(100)}
            height={hp(25)}
            
            color={theme.colors.primary}/>
            <Text style={styles.headerTextStyle}>
              Welcome
            </Text>
            <Text style={styles.textStyle}>
              Start or sign in to your account
            </Text>
          </View>

          {/* Sign In Button */}
          <Button
            title="Sign Up"
            buttonStyle={{marginTop: hp(12)}}
            onPress={moveToSignUp}
          />


          {/* "Don't have an account?" */}
          <View style={styles.signUpContainer}>
            <Text style={styles.bottomTextStyle}>
              Already have an account ?{' '}
            </Text>
              <Pressable onPress={() => {router.push('/loginScreen')}} style={styles.pressableStyle}>
                <Text style={styles.signUpTextStyle}>Sign In</Text>
              </Pressable>
          </View>

        </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',   
    justifyContent: 'center',
    marginHorizontal: wp(6),
    textAlign: 'center',

  },
  logoContainer: {
    alignItems: 'center',
    height: hp(55),
    justifyContent: 'center',
  },
  logoStyle: {
    width: wp(100),
    height: hp(25),
  },
  headerTextStyle: {
    fontSize: wp(6.5),
    color: theme.colors.textDark,
    fontWeight: '400',
    marginTop: hp(2),
  },
  textStyle: {
    fontSize: wp(5),
    color: theme.colors.textLight,
  },
  signUpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',  
    marginTop: hp(2),
  },
  bottomTextStyle: {
    fontSize: hp(2.1),
    fontWeight: '400',
    color: theme.colors.textDark,
  },
  pressableStyle: {
    marginBottom: 0,
  },
  signUpTextStyle: {
    color: theme.colors.primary,
    fontSize: hp(2.1),
    fontWeight: '500',
  },
})

export default index