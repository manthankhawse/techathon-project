import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialIcons';
import college from '../assets/images/college.png';
import recommendation from '../assets/images/social-media.png';
import courses from '../assets/images/online-learning.png';
import headerLogo from '../assets/images/Logo_white.png';
import UserContext from '@/context/UserContext';

const MenuItems = [
  {
    id: "123",
    title: "College/University Recommendation",
    description: "Find the best colleges based on your merit",
    image: college,
    screen: "recommendations"
  },
  {
    id: "456",
    title: "Career Guidance",
    description: "AI-powered chatbot for career-related advice",
    image: recommendation,
    screen: "chat"
  },
  {
    id: "789",
    title: "Course Recommendation",
    description: "Get personalized course suggestions for your career",
    image: courses,
    screen: "courses"
  },
];

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const navigation = useNavigation();

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <Image source={headerLogo} style={styles.logo} />
        
        {/* Profile Icon with Dropdown */}
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <Icon name="account-circle" size={45} color="white" style={{ marginTop: 40 }} />
        </TouchableOpacity>

        {/* Dropdown Menu */}
        {menuVisible && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => navigation.navigate('profile')}>
              <Text style={styles.dropdownText}>Profile</Text>
            </TouchableOpacity>

            {/* Underline Separator */}
            <View style={styles.separator} />

            <TouchableOpacity style={styles.dropdownItem} onPress={() => logout()}>
              <Text style={[styles.dropdownText, { color: 'red' }]}>Log Out</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Main Content */}
      <FlatList
        data={MenuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[tw`text-white top-1 h-36 w-11/12 mx-auto p-4 my-6 rounded-lg mb-2 flex flex-row items-center`, styles.homeItem]}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Image source={item.image} style={tw`h-12 w-12`} />
            <View style={tw`w-11/12 flex`}>
              <Text style={[tw`text-xl ml-4 w-4/5 my-2`, { color: "#217B58", fontWeight: '700' }]}>
                {item.title}
              </Text>
              <Text style={[tw`text-white text-sm ml-4 w-3/5`, { color: "#217B58", fontWeight: '500' }]}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Bottom Buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={()=>navigation.navigate('about')}><Text style={styles.buttonText}>About Us</Text></TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={()=>navigation.navigate('contact')}><Text style={styles.buttonText}>Contact Us</Text></TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  bottomContainer: { flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 50, left: 20, right: 20 },
  bottomButton: { backgroundColor: '#217B58', padding: 10, borderRadius: 10, flex: 1, marginHorizontal: 5, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16 },

  homeItem: {
    top: -25,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },

  header: {
    width: '100%',
    height: 110,
    backgroundColor: '#217B58',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom:40,
  },
  logo: {
    width: 135,
    height: 75,
    resizeMode: 'contain',
    marginTop: 30,
  },

  // 🔹 Dropdown Menu Styles
  dropdownMenu: {
    position: 'absolute',
    top: 90,
    right: 20,
    backgroundColor: '#F1FBF9',
    borderRadius: 8,
    paddingVertical: 8,
    width: 120,
    elevation: 5, // Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex:2,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropdownText: {
    fontSize: 16,
    color: '#217B58',
    fontWeight:'bold',
  },

  // 🔹 Underline Separator
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
    width: '90%',
    alignSelf: 'center',
  },
});