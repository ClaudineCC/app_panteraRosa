import React from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList, } from 'react-native';


// npm install para  Carousel  'react-native-snap-carousel';


//  definir largura e altura  responsiva para a tela
const { width, height} = Dimensions.get('window');



const Carrosel = () => {

    const images = [
            // { id: '1', src: require('C:/APP/PANTERA_ROSA/testando/assets/images/carrosel01.png') }, // caminho absoluto
        { id: '1', src: require('../assets/images/carrosel01.png') },
        { id: '2', src: require('../assets/images/carrosel02.png') },
        { id: '3', src: require('../assets/images/carrosel03.png') },
        { id: '4', src: require('../assets/images/carrosel04.jpg') },  
    ];

    return (

        <View style={styles.banner}>

        <FlatList
            data={images}
            horizontal  // por padrao vertical
            pagingEnabled  //é uma propriedade do ScrollView no React Native que permite o comportamento de paginação
            renderItem = {({ item }) => (
                <View style={styles.item} >
                    <Image source={item.src} style={styles.image} />
                </View>
            )}
            // a função "keyExtractor" chave do extrator -  extrai uma chave unica para cada item.
            keyExtractor={(item) => item.id}
        />

        </View>
    );
};


const styles = StyleSheet.create({
    banner:{
        height: 250,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    image: {
        width: width - 50,
        height: height * 0.30, // altura fixa para evitar problemas de calculo de altura
        // borderRadius: 10,
        resizeMode: 'contain',  // ou cover
    },    
});

export default Carrosel;