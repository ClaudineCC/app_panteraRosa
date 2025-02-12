import React, { useRef, useEffect, useState } from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList, ScrollView, } from 'react-native';



//  definir largura e altura  responsiva para a tela
const { width, height } = Dimensions.get('window');


const images = [
    // { id: '1', src: require('C:/APP/PANTERA_ROSA/testando/assets/images/carrosel01.png') }, // caminho absoluto
    { id: '1', src: require('../assets/images/carrosel01.png') },
    { id: '2', src: require('../assets/images/carrosel02.png') },
    { id: '3', src: require('../assets/images/carrosel03.png') },
    { id: '4', src: require('../assets/images/carrosel04.jpg') },
];



const Carrosel = () => {
  
    // estado para rastrear a imagem atual exibida no carrosel 
        const scrollViewRef = useRef<ScrollView>(null);
        const [currentIndex, setCurrentIndex] = useState(0);

        // usamos setInterval - intervalo para alterar currentindex- imagem atual acada 3000 segundos
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            }, 3000); 

            return () => clearInterval(interval);
        }, []);

        // aqui ocorre a rolagem automatica com a função scroollTo    
        useEffect(() => {
            scrollViewRef.current?.scrollTo({
                x: currentIndex * width ,
                animated: true,
            });
        }, [currentIndex]);



        return (

            //usando Map como retorno
            <ScrollView style={styles.scrollView}
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}

            >
                {images.map((image) => (
                    <View key={image.id} style={styles.imageContainer}>
                        <Image source={image.src} style={styles.image} />
                    </View>
                ))}
            </ScrollView>


            // {/*FLATLIST RETORNA APENAS IMAGEM ESTATICA* - aula prof. nerildo/}

            // <View style={styles.banner}>         
            // {/* <FlatList
            //     data={images}
            //     horizontal  // por padrao vertical
            //     pagingEnabled  //é uma propriedade do ScrollView no React Native que permite o comportamento de paginação
            //     renderItem = {({ item }) => (
            //         <View style={styles.item} >
            //             <Image source={item.src} style={styles.imagecarrosel} />
            //         </View>
            //     )}
            //     // a função "keyExtractor" chave do extrator -  extrai uma chave unica para cada item.
            //     keyExtractor={(item) => item.id}
            // /> 
            // </View>*/}
        );
    };


    const styles = StyleSheet.create({
        //com ScroolView horizontal
        scrollView: {
            width,
        },
        imageContainer: {
            width,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: '100%',
            height: 200,
            resizeMode: 'cover',
        },

        //com flatList
        // banner:{
        //     height: 250,
        // },
        // item: {
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     backgroundColor: '#fff',

        // },
        // imagecarrosel: {
        //     width: width - 50,
        //     height: height * 0.30, // altura fixa para evitar problemas de calculo de altura
        //     // borderRadius: 10,
        //     resizeMode: 'contain',  // ou cover
        // },    
    });

export default Carrosel;