import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './componentes/MyStack';
import { StatusBar } from 'expo-status-bar';
import { auth } from './firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from './componentes/styles';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {/* Chama o MyStack com as telas que usaremos */}
        <MyStack/> 
      </NavigationContainer>
    </SafeAreaView>
  );
}