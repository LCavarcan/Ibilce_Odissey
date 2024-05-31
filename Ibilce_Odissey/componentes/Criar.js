import { ButtonGroup } from "@rneui/base";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';

export default function Criar() {
    // Para pegar o index dos botões do ButtonGroup
    const [selectedIndex, setSelectedIndex] = useState(0);

    const updateIndex = (index) => {
        setSelectedIndex(index);
    };

    // Para conseguirmos navegar entre as telas
    const navigation = useNavigation();

    return (
        <View>
            <Text>Escolha qual laboratório seu personagem participará</Text>
            <ButtonGroup
                onPress={updateIndex}
                selectedIndex={selectedIndex}
                buttons={['ACME', 'GCC', 'GSPD', 'Lidia']}
                containerStyle={{ height: 50 }}
            />
            <Button
                title="Iniciar Jogo"
                onPress={() => {
                    switch (selectedIndex) {
                        case 0:
                        navigation.navigate('ACME');
                        break;
                        case 1:
                        navigation.navigate('GCC');
                        break;
                        case 2:
                        navigation.navigate('GSPD');
                        break;
                        case 3:
                        navigation.navigate('Lidia');
                        break;
                    }
                }}
            />
        </View>
    );
}
