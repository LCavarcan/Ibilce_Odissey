import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Inicio';
import Criar from './Criar';
import ACME from './ACME'
import NewUser from './newUser';
import ReplacePass from './replacePass';
import Login from './login';
const Stack = createNativeStackNavigator()

export default function MyStack() {
    return (
        <Stack.Navigator initialRouteName='Inicio'>
            {/* Definição das telas que serão usadas */}
            <Stack.Screen name='Inicio' component={Inicio}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='ReplacePass' component={ReplacePass}/>
            <Stack.Screen name='NewUser' component={NewUser}/>
            <Stack.Screen name='Criar' component={Criar}/>
            <Stack.Screen name='ACME' component={ACME}/>
        </Stack.Navigator>
    )
}
