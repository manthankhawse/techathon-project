import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const options = [
  { id: '1', exam: 'CET' },
  { id: '2', exam: 'JEE' },
  { id: '3', exam: 'CAT' },
  { id: '4', exam: 'NEET' },
  { id: '5', exam: 'Other' }
];

export default function Recommendations() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {options.map(option => {
          return (
            <Link href={`/${option.exam}`} key={option.id} style={styles.link}>
              <Text style={styles.text}>{option.exam}</Text>
            </Link>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  link: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#6200ee',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for a floating effect
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
