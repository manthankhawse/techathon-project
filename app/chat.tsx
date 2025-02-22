import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
import Message from './Message';
import { GoogleGenerativeAI } from "@google/generative-ai";

const GOOGLE_API = "AIzaSyAzrugTIZo4iVH40ZEDDlzfohYmWBBSWQg";

const SYSTEM_PROMPT = `You are a knowledgeable and empathetic career guidance counselor with expertise in various professional fields. Your role is to help individuals explore career paths that align with their interests, skills, and values. Please keep Responses concise and follow proper markdown format under 100`;

export default function Chat() {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([{
        id: 1,
        by:"bot",
        text:"Hello there!, how may I help you?"
    }]);

    const genAI = new GoogleGenerativeAI(GOOGLE_API);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});
      

    const flatListRef = useRef(null);

    const handleSend = async () => {
        if (prompt.trim() === "") return;

        setMessages(prev => [
            ...prev,
            { id: prev.length + 1, by: "user", text: prompt }
        ]);

        setLoading(true);


        if (prompt.trim()) {
            const result = await model.generateContent({
                contents: [
                    {
                      role: 'user',
                      parts: [
                        {
                          text: SYSTEM_PROMPT+prompt,
                        }
                      ],
                    }
                ],
                generationConfig: {
                  maxOutputTokens: 1000,
                  temperature: 0.1,
                }
            });

            console.log(result.response.text());

            setMessages(prev => [
                ...prev,
                { id: prev.length + 1, by: "bot", text: result.response.text() }
            ]);
            
            setPrompt("");
            setLoading(false);
        }
    };

    useEffect(()=>{
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                >
                    <View style={styles.container}>
                        <View style={styles.messageArea}>
                            <FlatList
                                ref={flatListRef}
                                data={messages}
                                renderItem={Message}
                                keyExtractor={item => item.id.toString()}
                                showsVerticalScrollIndicator={false}
                            />
                            {loading && (
                                <Text style={styles.messageText}>Fetching Response</Text>
                            )}
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="Enter your query"
                                placeholderTextColor="gray"
                                style={styles.input}
                                value={prompt}
                                onChangeText={setPrompt}
                            />
                            <Pressable onPress={handleSend} disabled={loading}>
                                <Ionicons name="send-sharp" size={24} color="black"/>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        // backgroundColor: 'yellow',
    },
    messageArea: {
        // backgroundColor: 'green',
        flex: 1,
        // marginTop:10,
        padding: 30,
    },
    messageItem: {
        marginBottom: 10,
    },
    messageText: {
        fontSize: 16,
        color: 'white',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    botMessage:{
        backgroundColor:'grey',
        width:'60%',
        marginRight: 'auto',
        borderRadius: '10%',
        padding: 10

    },
    userMessage:{
        backgroundColor:'black',
        width:'60%',
        marginLeft: 'auto',
        borderRadius: '10%',
        padding: 10
    },
    input: {
        color: 'black',
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});
