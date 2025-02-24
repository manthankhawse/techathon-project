// UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Start with null to check for logged-in state
    const navigation = useNavigation()
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user'); // Check if the user is in AsyncStorage
        if (storedUser) {
          setUser(JSON.parse(storedUser)); // Set user if found
        }
      } catch (e) {
        console.error("Error checking user in AsyncStorage", e);
      }
    };

    checkUserLoggedIn();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem('user'); // Remove user data from AsyncStorage
    setUser(null); // Set user to null
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
