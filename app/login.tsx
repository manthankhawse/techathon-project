import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Image,
    KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import logo from '../assets/images/Final_logo.png';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* Logo */}
                    <Image source={logo} style={styles.logo} />

                    {/* Card */}
                    <View style={styles.card}>
                        <Text style={styles.header}>Log In</Text>

                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                        />

                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>

                        {/* Redirect to Sign Up */}
                        <Text style={styles.footerText}>
                            New to Acadme?{' '}
                            <Text style={styles.linkText} onPress={() => navigation.navigate("signup")}>
                                Sign Up
                            </Text>
                        </Text>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',

    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40, // Prevents overlap
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        width: '85%',
        borderRadius: 10,
        elevation: 3,
        alignItems: 'center',
        bottom: -20,

    },
    logo: {
        width: 200,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 50,
        bottom: -50,

    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#006400',
        marginBottom: 20,
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#006400',
        paddingVertical: 10,
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',

    },
    footerText: {
        marginTop: 10,
        color: '#333',
        fontSize: 14,
    },
    linkText: {
        color: '#006400',
        fontWeight: 'bold',

    },
});

export default LoginScreen;
