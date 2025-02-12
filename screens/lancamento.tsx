import React from 'react';
import { Text, TouchableOpacity, View, SafeAreaView, ScrollView, StatusBar, Image, StyleSheet, } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 3

import Header from "../components/Header";
import Card from '@/components/Card';
import Footer from "@/components/Footer";
// import StarRating from "@/components/StarRating";



const Lancamento: React.FC = ({ navigation }) => {
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer} >



                <Header
                    HomePress={() => navigation.navigate('Home')}
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />


                <Text style={styles.texto}>LANÇAMENTOS : Se sinta bem </Text>


                <View style={styles.twoCards}>

                    <Card
                        image='./assets/images/produto01Lancamento.png'
                        descricao="descrição do produto"
                        precoAnterior='R$ 150,00'
                        precoAtual='R4 75,00'
                        comprar={() => alert('Produto Adicionado !')}
                    />

                    <Card
                        image='./assets/images/produto01Lancamento.png'
                        descricao="descrição do produto"
                        precoAnterior='R$ 150,00'
                        precoAtual='R4 75,00'
                        comprar={() => alert('Produto Adicionado !')}
                    />
                </View>


                <View style={styles.bannerfinal}>
                    <Image source={require('../assets/images/img01.png')} style={styles.image} />
                </View>



                {/*fechar scrollView aqui pois o rodape sera fixo */}
            </ScrollView>



            <Footer
                HomePress={() => navigation.navigate('Home')}
                CategoriaPress={() => navigation.navigate('Categoria')}
                AjudaPress={() => navigation.navigate('Ajuda')}
            />


        </SafeAreaView>

    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape     
    },
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#333',
    },
    twoCards: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: '50%',
        height: 50,
        borderRadius: 10,
    },
    bannerfinal: {
        display: 'flex',
        alignItems: 'center',
    },
});

export default Lancamento;