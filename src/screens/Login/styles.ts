// src/screens/Login/styles.ts

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#222'
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
     color: '#222',
     borderColor: '#444',
  },
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#4a90e2'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  themeToggle: {
    position: 'absolute',
    top: 48,
    right: 24,
  },
});