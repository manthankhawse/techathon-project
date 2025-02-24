import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../assets/images/Logo_white.png';
import { Link, useNavigation } from 'expo-router';
import UserContext from '@/context/UserContext';


const profile = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        {/* <TouchableOpacity style={styles.profileIcon}> */}
          <Icon name="account-circle" size={40} color="white" marginTop={30} />
        {/* </TouchableOpacity> */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Profile</Text>
        
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar} />
            <TouchableOpacity style={styles.addIcon}>
              <Icon name="add" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* Profile Fields */}
          <InputField label="Name" placeholder="Enter your name" />
          <InputField label="Email ID" placeholder="Enter your email" keyboardType="email-address" />
          <InputField label="Phone No" placeholder="Enter your phone number" keyboardType="numeric" />
          <InputField label="City" placeholder="Enter your city" />
          <InputField label="Date of Birth" placeholder="DD/MM/YYYY" keyboardType="numeric" />

          {/* Save Button */}
          <Link href="/contact" asChild>
          <TouchableOpacity style={styles.saveButton}>
            
            <Text style={styles.saveText}>Save</Text>
            
          </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

const InputField = ({ label, placeholder, keyboardType = "default" }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} keyboardType={keyboardType} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FBF9',
  },
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
    marginTop:30,
  },
  profileIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 5,
    marginTop:30,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 50, // Prevents content from being hidden under keyboard
  },
  profileContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.15,
  },
  addIcon: {
    height: 35,
    width: 35,
    position: 'absolute',
    bottom: -10,
    right: 60,
    backgroundColor: '#217B58',
    borderRadius: 20,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#217B58',
    marginTop: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#217B58',
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#A5D6A7',
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  saveButton: {
    backgroundColor: '#217B58',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 20,
  },
  saveText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default profile;