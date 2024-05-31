import { Dialog, Image, Overlay } from "@rneui/themed";
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ButtonGroup, Header } from "@rneui/base";

export default function Inicio() {
  const navigation = useNavigation();

  // Seta as missões desse laboratório e se elas estão disponíveis ou não
  const [missoes, setMissoes] = useState([
    { id: 1, name: 'Alinhe a Sequência', estado: true },
    { id: 2, name: 'Descubra a logo da Embrapa', estado: true }
  ]);

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [missao1Visible, setMissao1Visible] = useState(false);
  const [missao2Visible, setMissao2Visible] = useState(false);
  const [textoMissao2, setTextoMissao2] = useState(false);

  const renderItem = ({ item }) => {
    // Se a missão ainda não foi concluida (estado = true) então ela aparece com a cor verde na lista, se a missão já foi concluída (estado = false) ela aparece vermelha e desativada, ou seja, não pode mais ser clicada
    if (item.estado) {
      return (
        <TouchableOpacity onPress={() => itemFunctions[item.id.toString()]()} style={{ borderBottomWidth: 1, borderRadius: 10, borderColor: 'green' }}>
          <View style={{ padding: 10 }}>
            <Text style={{color: 'green'}}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    else {
      return (
        <TouchableOpacity disabled onPress={() => itemFunctions[item.id.toString()]()} style={{ borderBottomWidth: 1, borderRadius: 10, borderColor: 'gray' }}>
          <View style={{ padding: 10 }}>
            <Text style={{color: 'gray'}}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  // Chama as imagens para realizar a missão 1
  const missao1 = () => {
    setMissao1Visible(true);
  };

  //Chama o Dialog para realizar a missão 2
  const missao2 = () => {
    setTextoMissao2(true)
  }

  //Função que chama cada uma das funções responsáveis por cada missão através do id
  const itemFunctions = {
    '1': () => { missao1(); setVisible(false); },
    '2': () => {missao2(); setVisible(false)},
  };

  return (
    // Header da tela
    <View style={{ alignItems: "center" }}>
      <Header
        backgroundColor="white"
        leftComponent={{
          icon: 'question-mark',
          onPress: () => { setVisible(true); }
        }}
        rightComponent={{
          icon: 'navigation',
          onPress: () => { setVisible2(true); }
        }}
      />

      {/* Dialog que mostra a lista de missões */}
      <Dialog isVisible={visible}>
        <Dialog.Title title="Missões" />
        <Dialog.Actions>
          <FlatList
            data={missoes}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </Dialog.Actions>
        <Dialog.Actions>
          <Dialog.Button
            title="Fechar Tela"
            onPress={() => setVisible(false)}
          />
        </Dialog.Actions>
      </Dialog>

      {/* Dialog que mostra o mapa */}
      <Dialog isVisible={visible2}>
        <Dialog.Title title="Mapa" />
        <Dialog.Actions>
          <Dialog.Button
            title="ACME"
            onPress={() => { setVisible2(false); navigation.navigate("ACME"); }}
          />
          <Dialog.Button
            title="Bloco C"
            onPress={() => { setVisible2(false); navigation.navigate("BlocoC"); }}
          />
          <Dialog.Button
            title="DCCE"
            onPress={() => { setVisible2(false); navigation.navigate("DCCE"); }}
          />
          <Dialog.Button
            title="UAI"
            onPress={() => { setVisible2(false); navigation.navigate("UAI"); }}
          />
        </Dialog.Actions>
        <Dialog.Actions>
          <Dialog.Button
            title="Fechar Tela"
            onPress={() => setVisible2(false)}
          />
        </Dialog.Actions>
      </Dialog>

      {/* Dialog que abre a missão 1 */}
      <Dialog isVisible={missao1Visible}>
        <Dialog.Actions>
            <Text>Qual é o alinhamento que complementa o alinhamento seguinte:</Text>
            <Text>TTACGATC</Text>
        </Dialog.Actions>
        <Dialog.Actions>
            <ButtonGroup
                onPress={updateIndex}
                selectedIndex={selectedIndex}
                buttons={['CCGCATG', 'AACGATGG', 'AATGCTAG', 'AATTGCAT']}
                containerStyle={{ height: 50 }}
            />
        </Dialog.Actions>
        <Dialog.Actions>
            <Dialog.Button
                title="Iniciar Jogo"
                onPress={() => {
                    switch (selectedIndex) {
                        case 0:
                            Alert.alert("Errou :(")
                            setMissao1Visible(false)
                            break;
                        case 1:
                            Alert.alert("Errou :(")
                            setMissao1Visible(false)
                            break;
                        case 2:
                            Alert.alert("PARABÉNS!!!!\n\nMissão concluída")
                            setMissao1Visible(false)
                            setMissoes(prevMissoes => prevMissoes.map(missao => {
                                if (missao.id === 1) {
                                    return { ...missao, estado: false };
                                }
                                return missao;
                            }));
                            break;
                        case 3:
                            Alert.alert("Errou :(")
                            setMissao1Visible(false)
                            break;
                    }
                }}
            />
        </Dialog.Actions>
      </Dialog>

      {/* Parte que mostra as imagens da segunda missão */}
      <Overlay isVisible={missao2Visible} onBackdropPress={() => setMissao2Visible(false)}>
        <Image
          source={require('../Imagens/Embrapa.png')}
          style={{ width: 150, height: 150, borderBottomWidth: 3, marginBottom: 5 }}
          onPress={() => {
            setMissao2Visible(false);
            setMissoes(prevMissoes => prevMissoes.map(missao => {
              if (missao.id === 2) {
                return { ...missao, estado: false };
              }
              return missao;
            }));
            Alert.alert("PARABÉNS!!!\n\nMissão concluída");
          }}
        />
        <Image
          source={require('../Imagens/Agrocampo.png')}
          style={{ width: 150, height: 150, borderBottomWidth: 3, marginBottom: 5 }}
          onPress={() => {setMissao2Visible(false); Alert.alert("Errou :(")}}
        />
        <Image
          source={require('../Imagens/Logo3.jpg')}
          style={{ width: 150, height: 150, borderBottomWidth: 3, marginBottom: 5 }}
          onPress={() => {setMissao2Visible(false); Alert.alert("Errou :(")}}
        />
        <Image
          source={require('../Imagens/Logo4.jpg')}
          style={{ width: 150, height: 150, borderBottomWidth: 3, marginBottom: 5 }}
          onPress={() => {setMissao2Visible(false); Alert.alert("Errou :(")}}
        />
      </Overlay>
    </View>
  );
}
