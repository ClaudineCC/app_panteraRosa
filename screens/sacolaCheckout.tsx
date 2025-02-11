import React, { useState, } from 'react';
import { Text, View, Image, StatusBar, ScrollView, SafeAreaView, StyleSheet, } from "react-native";


//componentes:
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Card';
import Footer from '@/components/Footer';


const SacolaCheckout: React.FC = ({ navigation }) => {



    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer} >


                <Header
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />


                <Text>PAGINA DE CHECKOUT</Text>



                <Footer
                    HomePress={() => navigation.navigate('Home')}
                    CategoriaPress={() => navigation.navigate('Categoria')}
                    AjudaPress={() => navigation.navigate('Ajuda')}
                />


            </ScrollView>
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
    image: {
        flex: 1,
        width: '50%',
        height: 50,
        borderRadius: 10,
    },
});


export default SacolaCheckout;




