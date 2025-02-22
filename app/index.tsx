import { View, Text, Pressable, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import college from '../assets/images/college.png'
import recommendation from '../assets/images/social-media.png'
import tw from 'tailwind-react-native-classnames'
import courses from '../assets/images/online-learning.png'
import logo from '../assets/images/discussion.png';
import { useNavigation } from '@react-navigation/native'
import { Button, ButtonText } from '@/components/ui/button'

const MenuItems = [
  {
      id:"123",
      title:"College/University Recommendation",
      description:"Predict Yield, Production and revenue of your crop",
      image:college,
      screen:"recommendations"
  },
  {
      id:"456",
      title:"Career Guidance",
      description:"Get crop recommendations based on Soil type",
      image:recommendation,
      screen:"chat"
  },
  {
    id:"789",
    title:"Course Recommendation",
    description:"Get fertilizer recommendations based on Soil type",
    image:courses,
    screen:"courses"
},
]


export default function index() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={tw`flex flex-row items-start justify-center flex py-14`}>
        <View style={tw`flex flex-row items-center`}>
        <Image source={logo} style={tw`h-12 w-12 p-3 mx-3`}/>
        <Text style={[tw`text-4xl text-white font-bold`]}>Name</Text>
        </View>
      </View>
    <FlatList
        data={MenuItems}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            
        <TouchableOpacity style={tw`text-white h-32 flex flex-row items-center border border-gray-400 w-11/12 mx-auto p-1 rounded-lg mb-2`} onPress={()=>navigation.navigate(item.screen)}>
          <Image source={item.image} style={tw`h-24 w-24 rounded-xl`}/>
          <View style={tw`w-11/12 flex`}>
            <Text style={tw`text-white text-xl font-semibold ml-4`}>{item.title}</Text>
            <Text style={tw`text-white text-sm font-light ml-4 w-56`}>{item.description}</Text>
          </View>
        </TouchableOpacity>
        )}
    />

    <Button>
      <ButtonText>press me</ButtonText>
    </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text:{
    color:'white'
  }
})