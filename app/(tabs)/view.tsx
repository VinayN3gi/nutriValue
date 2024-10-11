import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'

const view = () => {
  const [data, setData] = useState(null);
  const fetchFunc=async ()=>{
    try {
      const data=await fetch('https://india.openfoodfacts.org/api/v0/product/5449000000439.json')
      const json=await data.json()
      const {product} = json
      const {ingredients_tags,nutriments}=product
      console.log(ingredients_tags)
      console.log(nutriments)
      setData(json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFunc();
  },[])

  return (
    <ScreenWrapper bg="CCCCCC">
       <View>

       </View>
      
    </ScreenWrapper>
  )
}

export default view