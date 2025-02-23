import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../assets/images/Logo_white.png';

const options = [
  { id: '1', exam: 'CET', icon: 'school' },
  { id: '2', exam: 'JEE', icon: 'assignment' },
  { id: '3', exam: 'CAT', icon: 'business' },
  { id: '4', exam: 'NEET', icon: 'local-hospital' },
  { id: '5', exam: 'BITSAT', icon: 'computer' },
  { id: '6', exam: 'LAW', icon: 'computer' }
];

export default function Recommendations() {
  return (
    <>
    <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <TouchableOpacity style={styles.profileIcon}>
          <Icon name="account-circle" size={35} color="#217B58" />
        </TouchableOpacity>
      </View>
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.gridContainer}>
          {options.map(option => (
            <Link href={`/${option.exam}`} key={option.id} style={styles.gridItem}>
              <View style={styles.content}>
                <View style={styles.iconContainer}>
                  <Icon name={option.icon} size={32} color="#217B58" />
                </View>
                <Text style={styles.text}>{option.exam}</Text>
              </View>
            </Link>
          ))}
        </View>
      </View>
    </SafeAreaView>
    </>
  );
}

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
    marginTop: 30,
  },
  profileIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 5,
    marginTop: 30,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    // backgroundColor:'red',
    marginVertical: 30
  },
  gridItem: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#F1FBF9',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#217B58',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});