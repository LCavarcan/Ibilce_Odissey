import { Button, Dialog, ListItem } from "@rneui/themed";
import React, {useState} from "react";
import { View, Text, FlatList } from "react-native";
import Estilo from "./Estilo";
import { useNavigation } from '@react-navigation/native';
import { Header, Icon } from "@rneui/base";

export default function Inicio() {
  const navigation = useNavigation();

  const missoes = [
    {id: 1, name: 'Ache o Switch'}, 
    {id: 2, name: 'Conecte o Servidor'}
  ]

  const [visible, setVisible] = useState(false);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={{ alignItems: "center" }}>
      <Header
        backgroundColor="white"
        // Vai levar para as telas das missões ou mapa
        leftComponent={{
          icon: 'question-mark', 
          onPress:(() => {
            setVisible(true) 
          })}
        }
        rightComponent={{icon: 'navigation'}}
      />
      <Dialog
        isVisible={visible}
      >
        <Dialog.Title title="Missões"/>
        <Dialog.Actions>
          <FlatList
            data={missoes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </Dialog.Actions>
        <Dialog.Actions>
          <Dialog.Button
            title="Fechar Tela"
            onPress={() => setVisible(false)}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}
