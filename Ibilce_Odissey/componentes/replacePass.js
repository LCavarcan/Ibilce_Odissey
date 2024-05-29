import { Button } from "@rneui/themed";
import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'; 
import Estilo from "./Estilo";
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase.config';

export default function ReplacePass(){
    const navigation = useNavigation();
    const [userMail, setUserMail] = useState('');

    function replacePass(){
        if(userMail!==''){
            sendPasswordResetEmail(auth, userMail)
            .then(()=>{
                alert("Foi enviado um email para: " + userMail + ". Verifique sua caixa de entrada");
                return(navigation.navigate('Inicio'))
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert("Ops! Erro: " + errorMessage + ". Tente novamente ou pressione voltar");
                return;
            })
        } else{
            alert("Informe um email válido!");
            return;
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.formTitle}>Redefinição de senha</Text>
            <TextInput
                style={styles.formInput}
                placeholder="Informe o email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                value={userMail}
                onChangeText={setUserMail}
            />
            <Pressable 
                style={styles.sendButton}
                onPress={replacePass}
            >
                <Text style={styles.formInput}>Enviar</Text>
            </Pressable>
            <View style={styles.subContainer}>
                <Pressable
                    onPress={() => {navigation.navigate('Criar')}}
                >
                    <Text>Voltar</Text>
                </Pressable>
            </View>

        </View>
    )
}