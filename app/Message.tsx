import { View, Text, StyleSheet, Image } from 'react-native'
import counselor from '../assets/images/counselor.png'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

export default function Message({ item }) {
  // Process the message before displaying it
  const processMessage = (text) => {
    let processedText = [];

    // Example of handling **bold** text. We'll split based on **
    const parts = text.split("**");

    parts.forEach((part, index) => {
      if (index % 2 === 0) {
        // Regular text
        processedText.push(<Text key={index} style={styles.regularText}>{part}</Text>);
      } else {
        // Bold text (after splitting by **)
        processedText.push(<Text key={index} style={styles.boldText}>{part}</Text>);
      }
    });

    return processedText;
  }

  return (
    <>
      <View>
        {item.by === "bot" && (<Image style={tw`h-10 w-10`} source={counselor} />)}
        <View style={[styles.messageItem, item.by === "bot" ? styles.botMessage : styles.userMessage]}>
          <Text style={styles.messageText}>
            {processMessage(item.text)}
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  messageArea: {
    backgroundColor: 'green',
    flex: 1,
    padding: 31,
    justifyContent: 'flex-start'
  },
  messageItem: {
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    color: 'white',
  },
  regularText: {
    fontSize: 16,
    color: 'white',
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  botMessage: {
    backgroundColor: 'grey',
    width: '80%',
    marginRight: 'auto',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: 'black',
    width: '80%',
    marginLeft: 'auto',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
})
