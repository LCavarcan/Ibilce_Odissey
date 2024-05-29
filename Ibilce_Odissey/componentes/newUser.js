import { Button } from "@rneui/themed";
import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'; 
import Estilo from "./Estilo";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config.js';

export default function NewUser(){
    const navigation = useNavigation();
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');

    function newUser(){
        if(userMail === '' || userPass === '' || userRePass === ''){
            alert('Todos os campos devem ser preenchidos!');
            return;
        }
        if(userPass !== userRePass){
            alert('As senhas não são iguais!');
            return;
        }else{
            createUserWithEmailAndPassword(auth, userMail, userPass)
            .then((UserCredential)=>{
                const user = UserCredential.user;
                alert('O usuário ' + userMail + ' foi criado!')
                //return(navigation.navigate('Criar'))
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
                return(navigation.navigate('Criar'))
            })
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.formTitle}>Novo usuário</Text>
            <TextInput
                style={styles.formInput}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                value={userMail}
                onChangeText={setUserMail}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Senha"
                autoCapitalize="none"
                secureTextEntry
                value={userPass}
                onChangeText={setUserPass}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Digite a senha novamente"
                autoCapitalize="none"
                secureTextEntry
                value={userRePass}
                onChangeText={setUserRePass}
            />
            <Pressable style={styles.formButton}>
                <Text style={styles.textButton}
                onPress={newUser}
                >Cadastrar</Text>
            </Pressable>
           
        </View>
    )
}
