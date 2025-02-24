import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Link, useNavigation } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../assets/images/Logo_white.png';
import UserContext from '@/context/UserContext';
import cet from '../assets/images/MHTCET.png'
import cat from '../assets/images/CAT.png'
import neet from '../assets/images/NEET-icons-04.png'
import bitsat from '../assets/images/BITS_Pilani-Logo.png'
import law from '../assets/images/Law.png'
import jee from '../assets/images/engineer-clipart-process-engineer.png'
import tw from 'tailwind-react-native-classnames';
 
const options = [
  { id: '1', exam: 'CET', image: cet },
  { id: '2', exam: 'JEE', image: jee},
  { id: '3', exam: 'CAT', image: cat },
  { id: '4', exam: 'NEET', image: neet },
  { id: '5', exam: 'BITSAT', image: bitsat },
  { id: '6', exam: 'LAW', image: law }
];

export default function Recommendations() {

  return (
    <>
    <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.gridContainer}>
          {options.map(option => (
            <Link href={`/${option.exam}`} key={option.id} style={styles.gridItem}>
              <View style={styles.content}>
                <View style={styles.iconContainer}>
                  {/* <Icon name={option.icon} size={32} color="#217B58" /> */}
                  <Image source={option.image} style={tw`h-16 w-16`}/>
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