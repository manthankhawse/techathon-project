import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Image, Linking, Animated } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../assets/images/Logo_white.png';
import Modal from 'react-native-modal';  // Add this for the bottom sheet effect
import UserContext from '@/context/UserContext';
import { useNavigation } from 'expo-router';

export default function Courses() {
  const [inputText, setInputText] = useState('') 
  const [courseList, setCourseList] = useState([]) 
  const [isModalVisible, setModalVisible] = useState(false)
  const [courses, setCourses] = useState(null)


  const addCourse = () => {
    if (inputText.trim()) {
      setCourseList([...courseList, inputText]) 
      setInputText('') 
    }
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  )

  const handleApiCall = async () => {
    const requestBody = { queries: courseList, per_source:3 }
    try {
      const response = await fetch('https://course-rec-api.onrender.com/recommend_courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
      const data = await response.json()
      setCourses(data.recommendations)
      setModalVisible(true)  // Show the modal when the response is received
    } catch (error) {
      console.error('Error in API call:', error)
    }
  }

  const renderCourseItem = (course) => (
    <View style={styles.courseItem}>
      <Text style={styles.courseText}><Text style={styles.highlight} onPress={() => Linking.openURL(course.Link)}>{course["Course Name"]}</Text></Text>
      {/* <Text style={styles.courseText}><Text >{course["Course Name"]}</Text></Text> */}
    </View>
  )

  return (
    <>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              value={inputText}
              onChangeText={setInputText}
              placeholder="Enter course name"
              style={styles.textInput}
            />
            <Ionicons name="add-circle" onPress={addCourse} size={40} color="#217B58"/>
          </View>
          
          <FlatList
            data={courseList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.list}
            showsVerticalScrollIndicator={false}
          />
          
          <Button title="Submit to API" onPress={handleApiCall} color="#217B58" />
        </View>  
      </SafeAreaView>

      {/* Modal for Drawer from Bottom */}
      <Modal 
        isVisible={isModalVisible}
        style={styles.modal}
        onBackdropPress={() => setModalVisible(false)}  // Close on click outside
        onBackButtonPress={() => setModalVisible(false)} // Close on back button press
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Course Recommendations</Text>
          <FlatList
            data={Object.keys(courses || {})}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.sourceTitle}>{item}</Text>
                {courses[item].map(course => renderCourseItem(course))}
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 110,
    backgroundColor: '#217B58',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    width: 135,
    height: 75,
    resizeMode: 'contain',
    marginTop: 30,
  },
  profileIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 5,
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#F1FBF9',
    padding: 20,
  },
  content: {
    flex: 1,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#217B58',
    paddingBottom: 5,
  },
  textInput: {
    height: 40,
    flex: 1,
    borderColor: '#217B58',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  list: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#217B58',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  itemText: {
    color: 'white',
    fontSize: 16,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#F1FBF9',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#217B58',
    marginBottom: 10,
  },
  sourceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseItem: {
    marginBottom: 15,
  },
  sourceText: {
    fontSize: 16,
    color: '#217B58',
  },
  courseText: {
    fontSize: 16,
    marginBottom: 5,
  },
  highlight: {
    color: '#217B58',
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
})
