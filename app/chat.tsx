import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Pressable, FlatList, Image, ScrollView } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GoogleGenerativeAI } from "@google/generative-ai";
import bot from "../assets/images/counselor.png";
import logo from "../assets/images/Logo_white.png";
import Icon from 'react-native-vector-icons/MaterialIcons';

const GOOGLE_API = "AIzaSyAzrugTIZo4iVH40ZEDDlzfohYmWBBSWQg";

const SYSTEM_PROMPT = 'You are a knowledgeable and empathetic career guidance counselor with expertise in various professional fields. Your role is to help individuals explore career paths that align with their interests, skills, and values. Please keep Responses concise and follow proper markdown format under 100. Answer only career and study or professional questions if anything else you should apologize and say its out of your scope.';

export default function Chat() {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([{
        id: 1,
        by: "bot",
        text: "Hello there! How may I help you?"
    }]);

    const genAI = new GoogleGenerativeAI(GOOGLE_API);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const flatListRef = useRef(null);

    const handleSend = async () => {
        if (prompt.trim() === "") return;

        setMessages(prev => [...prev, { id: prev.length + 1, by: "user", text: prompt }]);
        setLoading(true);

        if (prompt.trim()) {
            const result = await model.generateContent({
                contents: [
                    {
                        role: 'user',
                        parts: [{ text: SYSTEM_PROMPT + prompt }],
                    }
                ],
                generationConfig: {
                    maxOutputTokens: 1000,
                    temperature: 0.1,
                }
            });

            setMessages(prev => [...prev, { id: prev.length + 1, by: "bot", text: result.response.text() }]);
            setPrompt("");
            setLoading(false);
        }
    };

    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);

    const renderMessage = ({ item }) => (
        <View style={item.by === "bot" ? [styles.botContainer] : {}}>
            {item.by === "bot" && <Image source={bot} style={styles.botImage} />}
            <View style={[styles.messageItem, item.by === "user" ? styles.userMessage : styles.botMessage]}>
                <Text style={styles.messageText}>{item.text}</Text>
            </View>
        </View>
    );

    return (
        <>
        
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        {/* <TouchableOpacity style={styles.profileIcon}> */}
        <Icon name="account-circle" size={40} color="white" marginTop={30} marginRight={25} />
        {/* </TouchableOpacity> */}
      </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <View style={styles.messageArea}>
                            <FlatList
                                ref={flatListRef}
                                data={messages}
                                renderItem={renderMessage}
                                keyExtractor={item => item.id.toString()}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ paddingTop: 50 }}
                            />
                            {loading && <Text style={styles.loadingText}>Fetching Response...</Text>}
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
                                <Ionicons name="send-sharp" size={24} color="white" />
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
    },
    messageArea: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
    },
    messageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        maxWidth: '80%',
    },
    botContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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
    botMessage: {
        backgroundColor: '#F1FBF9', // Dark Green for bot
        alignSelf: 'flex-start',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        margin:2,

        // Android Shadow
        elevation: 2,
    },
    userMessage: {
        backgroundColor: '#F1FBF9', // Light Green for user
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        margin:2,

        // Android Shadow
        elevation: 2,
    },
    messageText: {
        fontSize: 16,
        color: '#217B58',
        fontWeight: 'bold',


    },
    botImage: {
        width: 30,
        height: 30,
        marginRight: 10,
        borderRadius: 15,
    },
    loadingText: {
        fontSize: 16,
        color: '#145A32',
        textAlign: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        backgroundColor: '#217B58',
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