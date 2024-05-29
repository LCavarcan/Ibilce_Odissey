import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Inicio';
import Criar from './Criar';
import ACME from './ACME'
import NewUser from './newUser';
import ReplacePass from './replacePass';
import Login from './login';
import DCCE from './DCCE';
import UAI from './UAI';
import BlocoC from './BlocoC';
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
            <Stack.Screen name='DCCE' component={DCCE}/>
            <Stack.Screen name='UAI' component={UAI}/>
            <Stack.Screen name='BlocoC' component={BlocoC}/>
        </Stack.Navigator>
    )
}