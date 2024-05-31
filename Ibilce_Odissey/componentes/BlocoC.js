import React, { useState, useEffect } from "react";
import { Dimensions, Text, View } from "react-native";
import { Image } from "@rneui/themed";

// MUDAR OS PROFESSORES AINDA 

const BlocoC = () => {
    const professores = [
        { id: 1, nome: "Renata", fala: "hããããã", imagem: require('../Imagens/Aleardo.png') },
        { id: 2, nome: "Rogéria", fala: "Essa documentação não está seguindo as normas ABNT", imagem: require('../Imagens/Rogeria.png') },
        { id: 3, nome: "Wallace", fala: "It's a me Mario!", imagem: require('../Imagens/Wallace.png') },
    ];

    const [randomNumber, setRandomNumber] = useState(null);

    useEffect(() => {
        const generateRandomNumber = () => {
            const number = Math.floor(Math.random() * 3); // Ajustado para índice correto
            setRandomNumber(number);
        };

        generateRandomNumber();
    }, []);

    if (randomNumber === null) {
        return <Text>Loading...</Text>;
    }

    const professor = professores[randomNumber];

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            {professor.imagem && <Image source={professor.imagem} style={{ width: 400, height: Dimensions.get('window').height - 50 }} />}
            <Text>{professor.nome}: {professor.fala}</Text>
        </View>
    );
};

export default BlocoC;
