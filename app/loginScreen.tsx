import {LogBox, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { hp, wp } from '@/helpers/common'
import { useRouter } from 'expo-router'
import BackButton from '@/components/BackButton'
import InputComponent from '@/components/InputComponent'
import { theme } from '@/constants/theme'
import Index from '@/assets/icons/Index'
import Button from '@/components/Button'
import { auth } from '@/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'


const loginScreen = () => {
  const authInstance=auth;
  const router = useRouter();
  const emailRef=useRef<string>('');
  const passwordRef=useRef<string>('');
  const [loading,setLoading]=useState(false);
  const [emptyEmail,setEmptyEmail]=useState(false);
  const [emptyPassword,setEmptyPassword]=useState(false);

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();

  const firebaseLogin=async(email:string,password:string)=>{
    try {
      const user=await signInWithEmailAndPassword(authInstance,email,password);
      console.log(`Login in was successful ${user.user.email}`);
    } catch (error) {
      console.log(`Error occured while logging in ${error}`);
    }
  }
  

  const signInButtonHandler=()=>{
    const email=emailRef.current;
    const password=passwordRef.current;
    
    if(!email)
    {
      setEmptyEmail(true);
      return;
    }

    else if(!password)
    {
      if(email) setEmptyEmail(false);
      setEmptyPassword(true);
      return;
    }
    else{
      setEmptyEmail(false);
      setEmptyPassword(false);
      console.log(email,password);
      firebaseLogin(email,password);
      setLoading(true);
      router.replace("../(tabs)/scan");
    }
  }
  
  return (
    <ScreenWrapper bg="CCCCCC">
      <View style={styles.container}>
       <BackButton onPress={()=>router.back()}/>
        <View>
            <Text style={styles.textStyle}>Welcome</Text>
            <Text style={[styles.textStyle,{color:theme.colors.primary}]}>Back</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={{fontSize:hp(2),color:theme.colors.text}}>
            Please sign in to your account
          </Text>

          <View>
          <InputComponent
          icon={<Index name='mail' size={26} strokeWidth={1.6}/>}
          placeHolderText='Enter your email'
          onChangeText={(value)=>emailRef.current=value}/>
          {
            emptyEmail && <Text style={{color:'red',fontSize:hp(1.5)}}>Email is required</Text>
          } 
          </View>


          <View>
          <InputComponent
          icon={<Index name='lock' size={26} strokeWidth={1.6}/>}
          placeHolderText='Enter your password'
          secureTextEntryStatus={true}
          onChangeText={(value)=>passwordRef.current=value}/>
          {
            emptyPassword && <Text style={{color:'red',fontSize:hp(1.5)}}>Password is required</Text>
          }
          <View/>
          </View>


          <Button title='Sign In' buttonStyle={{marginTop:hp(2)}} onPress={signInButtonHandler}
          isLoading={loading}/>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                
                <Text style={{color:theme.colors.text}}>Don't have an account?</Text>
                <Pressable onPress={()=>router.push('/signScreen')}>
                <Text style={{color:theme.colors.primary,fontWeight:800,fontSize:hp(2)}}>Sign Up</Text>
                </Pressable>
              
            </View>

        </View>
          
      </View>
    </ScreenWrapper>
  )
}

export default loginScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:wp(5),
    gap:45,
  },
  textStyle:{
    fontSize:hp(6),
    color:theme.colors.text,
    fontWeight:'800',
  },
  inputContainer:{
    width:'100%',
    height:hp(7.2),
    gap:22,
  },
  forgotPassword:{
    fontSize:hp(2),
    color:theme.colors.text,
    fontWeight:'600',
    textAlign:'right',
  }
})