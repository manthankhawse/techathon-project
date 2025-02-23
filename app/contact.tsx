import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image,StyleSheet, ScrollView } from "react-native";
import logo from '../assets/images/Logo_white.png';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Link } from 'expo-router';

const contact = () => {
  return (
    <>
        <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                {/* <TouchableOpacity style={styles.profileIcon}> */}
                  <Icon name="account-circle" size={40} color="white"  marginTop={30} />
                {/* </TouchableOpacity> */}
              </View>
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      
        {/* Contact Heading */}
        <Text style={styles.contactTitle}>Contact Us</Text>
        <Text style={styles.subTitle}>Contact Information</Text>

        {/* Contact Information Rows */}

        
        <View style={styles.infoContainer}>
          <ContactInfo icon="call" text="+91 1234567890" />
          <ContactInfo icon="email" text="acadme@gmail.com" />
          <ContactInfo icon="location-on" text="Pune ,India" />
        </View>

        {/* Form Section */}
        <Text style={styles.formTitle}>Form</Text>
        <Text style={styles.formSubTitle}>Get In Touch !!</Text>
        <Text style={styles.formDescription}>
        For further queries or feedback, please fill out the form and submit.
        </Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <InputField placeholder="Email" />
          <InputField placeholder="Phone" keyboardType="numeric" />
          <InputField placeholder="Name" />
          <InputField placeholder="Message" multiline={true} />
        </View>

        <Link href="/about" asChild>
        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
        </Link>
      
    </ScrollView>
    </>
  );
};

// Contact Info Component
const ContactInfo = ({ icon, text }) => {
  return (
    <View style={styles.contactRow}>
      <Icon name={icon} size={30} color="#217B58" />
      <Text style={styles.contactText}>{text}</Text>
    </View>
  );
};

// Input Field Component
const InputField = ({ placeholder, keyboardType = "default", multiline = false }) => {
  return (
    <TextInput
      style={[styles.input, multiline && styles.multiline]}
      placeholder={placeholder}
      placeholderTextColor="#AAAAAA"
      keyboardType={keyboardType}
      multiline={multiline}
    />
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 50, // Prevents content from being cut off
  },
  header: {
    width: 400,
    height: 110,
    backgroundColor: '#217B58',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom:20,
    marginTop:0,
  },
  logo: {
    width: 135,
    height: 75,
    resizeMode: 'contain',
    marginTop:40,
  },
  profileIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 15,
    marginTop:30,
  },
  container: {
    flex: 1,
    backgroundColor: "#F1FBF9",
    padding: 20,
    alignItems: "center",
    width:'100%'
  },
  contactTitle: {
    fontSize: 30,
    color: "#217B58",
    fontWeight: "bold",
    marginBottom: 2,
  },
  subTitle: {
    fontSize: 20,
    color: "#217B58",
    // fontWeight: "bold",
    marginBottom: 15,
  },
  infoContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1FBF9",
    padding: 15,
    width: "90%",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth:.15,
  },
  contactText: {
    fontSize: 18,
    color: "#217B58",
    marginLeft: 10,
  },
  formTitle: {
    fontSize: 30,
    color: "#217B58",
    fontWeight: "bold",
    marginBottom: 2,
  },
  formSubTitle: {
    fontSize: 20,
    color: "#217B58",
    // fontWeight: "bold",
    marginBottom: 5,
  },
  formDescription: {
    fontSize: 14,
    color: "#217B58",
    textAlign: "center",
    marginBottom: 15,
    marginLeft:20,
    marginRight:20,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    color: "#FFFFFF",
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth:.15,
  },
  multiline: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#217B58",
    width: "90%",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  submitText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default contact;