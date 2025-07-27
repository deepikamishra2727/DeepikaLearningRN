// src/screens/Login/LoginScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const LoginScreen: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password.');
      return;
    }
    Alert.alert('Logged In', `Welcome, ${email}`);
  };

  const gradientColors = ['#4A90E2', '#9013FE'];

  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor={'#999'}
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={'#999'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
