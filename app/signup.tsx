import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import logo from '../assets/images/Final_logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = () => {
    const navigation = useNavigation();

    // State to manage form inputs and error messages
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        if (!email|| !password) {
            setError('Please fill in both fields.');
            return;
        }

        // Create user object to send in API request
        const userData = { email, password };

        try {
            // Make the API call to your server (replace with your actual API endpoint)
            const response = await fetch('http://techathon-backend-ovf9.onrender.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                navigation.navigate('login');
            } else {
                setError(data.message || 'Signup failed, please try again.');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred, please try again.');
        }
    };

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={logo} style={styles.logo} />

            {/* Sign-Up Card */}
            <View style={styles.card}>
                <Text style={styles.header}>Sign Up</Text>

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

                {/* Sign-Up Button */}
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Redirect to Log In */}
                <Text style={styles.footerText}>
                    Already have an account?{' '}
                    <Text style={styles.linkText} onPress={() => navigation.navigate('login')}>
                        Log In
                    </Text>
                </Text>
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 50,
        bottom: -35,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        width: '85%',
        borderRadius: 10,
        elevation: 3,
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#006400',
        marginBottom: 10,
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
        fontSize: 14,
        color: '#333',
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

export default SignUpScreen;
