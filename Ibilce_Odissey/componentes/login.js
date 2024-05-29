import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Button } from "@rneui/themed";
import Estilo from "./Estilo";
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase.config';

export default function Login() {
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigation = useNavigation();

  function userLogin() {
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert('Login efetuado!');
        console.log(user);
        return(navigation.navigate('Criar'))
    })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  }

  if (isAuthenticated) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Informe o email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={userMail}
        onChangeText={setUserMail}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Informe a senha"
        autoCapitalize="none"
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      />
      <Pressable style={styles.formButton} onPress={userLogin}>
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}
            onPress={() => {navigation.navigate('ReplacePass')}}
        >
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>

        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}
            onPress={() => {navigation.navigate('NewUser')}}
          >
            Novo usuário</Text>
        </Pressable>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}