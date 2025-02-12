import React, { Component, useState } from "react";
import { Text, TouchableOpacity, View, ScrollView, SafeAreaView, StatusBar, StyleSheet, Linking, } from "react-native";



//componentes:
import Header from "@/components/Header";
import Footer from "@/components/Footer";




const Entregas = ({ navigation }) => {
    return (

        <SafeAreaView>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer} >



            <Header
                    HomePress={() => navigation.navigate('Home')}
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />


                <Text>PÁGINA DE ENTREGAS</Text>



                {/*fechar scrollView aqui pois o rodape sera fixo */}
            </ScrollView>



            <Footer
                HomePress={() => navigation.navigate('Home')}
                CategoriaPress={() => navigation.navigate('Categoria')}
                AjudaPress={() => navigation.navigate('Ajuda')}
            />



        </SafeAreaView>


    )
};




const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape            
    },
});


export default Entregas;