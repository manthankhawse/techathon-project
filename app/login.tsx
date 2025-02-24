import { router, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Image,
    KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import logo from '../assets/images/Final_logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Please fill in both fields.');
            return;
        }

        const userData = { email, password };

        try {
            // Make the API call to your server (replace with your actual API endpoint)
            const response = await fetch('http://techathon-backend-ovf9.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            console.log(data);

            if (response.ok) {
                // Save user data to AsyncStorage
                await AsyncStorage.setItem('user', JSON.stringify(data.token));

                // Redirect to the home screen or profile
                navigation.navigate('index');
            } else {
                setError(data.message || 'Login failed, please try again.');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred, please try again.');
        }
    };

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

                        {/* Error Message */}
                        {error && <Text style={styles.errorText}>{error}</Text>}

                        {/* Username Field */}
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />

                        {/* Password Field */}
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />

                        {/* Log In Button */}
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>

                        {/* Redirect to Sign Up */}
                        <Text style={styles.footerText}>
                            New to Acadme?{' '}
                            <Text style={styles.linkText} onPress={() => navigation.navigate('signup')}>
                                Sign Up
                            </Text>
                        </Text>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
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
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default LoginScreen;
