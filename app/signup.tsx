import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import logo from '../assets/images/Final_logo.png';

const SignUpScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={logo} style={styles.logo} />

            {/* Sign-Up Card */}
            <View style={styles.card}>
                <Text style={styles.header}>Sign Up</Text>

                {/* Username Field */}
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} placeholder="Username" />

                {/* Password Field */}
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry />

                {/* Sign-Up Button */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Redirect to Log In */}
                <Text style={styles.footerText}>
                    Already have an account?{' '}
                    <Text style={styles.linkText} onPress={() => navigation.navigate("login")}>
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
});

export default SignUpScreen;
