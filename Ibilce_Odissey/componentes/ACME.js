import { Button } from "@rneui/themed";
import React from "react";
import { View, Text } from "react-native";
import Estilo from "./Estilo";
import { useNavigation } from '@react-navigation/native';
import { Header, Icon } from "@rneui/base";

export default function Inicio() {
  const navigation = useNavigation();

  const missoes = ['Ache o Switch', 'Conecte o Servidor']

  return (
    <View style={{ alignItems: "center" }}>
      <Header
        backgroundColor="white"
        // Vai levar para as telas das missões ou mapa
        leftComponent={{icon: 'question-mark'}}
        rightComponent={{icon: 'navigation'}}
      />
    </View>
  );
}
