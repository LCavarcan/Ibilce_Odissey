import { Button } from "@rneui/themed";
import React from "react";
import { View, Text } from "react-native";
import Estilo from "./Estilo";
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={Estilo.titulo}>IBILCE ODISSEY</Text>
      <Button 
        style={Estilo.botao} 
        title="Novo Jogo" 
        onPress={() => {
          navigation.navigate('Criar');
        }}
      />
      {/* Ainda tem que criar a tela para carregar o jogo e salvar os dados dos usuários */}
      <Button style={Estilo.botao} title="Carregar Jogo" /> 
    </View>
  );
}
