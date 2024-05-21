import { Button } from "@rneui/themed";
import React from "react";
import { View, Text } from "react-native";
import Estilo from "./Estilo";

export default Inicio = () => {
    return (
        <View style={{alignItems: "center"}}>
            <Text style={Estilo.titulo}>IBILCE ODISSEY</Text>
            <Button style={Estilo.botao} title="Novo Jogo" />
            <Button style={Estilo.botao} title="Carregar Jogo" />
        </View>
    )
}