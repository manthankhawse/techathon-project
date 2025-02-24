import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import logo from '../assets/images/Logo_white.png';
import Icon from "react-native-vector-icons/MaterialIcons";

const contact = () => {
  return (
    <>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Icon name="account-circle" size={40} color="white" marginTop={30} />
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.contactTitle}>About Us</Text>
        
        {/* Info Boxes */}
        <View style={styles.infoBoxContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoBoxText}>Welcome to "ACADME", your ultimate guide to finding the most relevant courses and colleges tailored to your interests and career goals. We understand that choosing the right path in education can be overwhelming, so we’ve designed our platform to simplify the process and provide you with personalized recommendations that align with your aspirations.</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoBoxText}>We have integrated a smart chatbot that is always ready to assist you. From answering your queries about courses and colleges to providing insights into career prospects, our chatbot ensures you get instant and accurate information whenever you need it.</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoBoxText}>Our platform goes beyond course recommendations by helping you discover the right colleges that match your preferences. With detailed information on institutions, admission criteria, and course offerings, we make it easier for you to make informed decisions</Text>
          </View>
        </View>
        
      
        <Text style={styles.submitText}>Made by team "Code Blooded"</Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 50,
  },
  header: {
    width: 400,
    height: 110,
    backgroundColor: '#217B58',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logo: {
    width: 135,
    height: 75,
    resizeMode: 'contain',
    marginTop: 40,
  },
  contactTitle: {
    fontSize: 30,
    color: "#217B58",
    fontWeight: "bold",
    marginBottom: 15,
  },
  infoBoxContainer: {
    width: "90%",
    alignItems: "center",
  },
  infoBox: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    width: "90%",
    marginBottom:25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  infoBoxText: {
    fontSize: 16,
    color: "#217B58",
    textAlign: "center",
  },
  formDescription: {
    fontSize: 14,
    color: "#217B58",
    textAlign: "center",
    marginBottom: 15,
    marginHorizontal: 20,
  },
  submitText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#217B58",
    marginTop: 20,
  },
});

export default contact;