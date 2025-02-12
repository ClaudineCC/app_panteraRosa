import React, { Component, useState } from "react";
import { Text, TouchableOpacity, View, ScrollView, SafeAreaView, StatusBar, StyleSheet, Linking, } from "react-native";



//componentes:
import Header from "@/components/Header";
import Footer from "@/components/Footer";




const Trocas = ({ navigation }) => {
    return (

        <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" backgroundColor="gray" />
       <View style={styles.container}>


       <Header
                HomePress={() => navigation.navigate('Home')}
                SacolaPress={() => navigation.navigate('Sacola')}
                LoginPress={() => navigation.navigate('Login')}
            />
       
       
        <ScrollView contentContainerStyle={styles.scrollContainer} >

                <View style={styles.content}>
                    <Text style={styles.text}>PÁGINA DE TROCAS, DEVOLUÇÕES E CANCELAMENTO</Text>
                </View>      
      
            {/*fechar scrollView aqui pois o rodape sera fixo */}
        </ScrollView>

        <Footer
            HomePress={() => navigation.navigate('Home')}
            CategoriaPress={() => navigation.navigate('Categoria')}
            AjudaPress={() => navigation.navigate('Ajuda')}
        />

        </View>
    </SafeAreaView>
)
};


const styles = StyleSheet.create({
safeArea: {
    flex: 1,
    backgroundColor: '#fff',
},
container: {
    flex: 1,
    justifyContent: 'space-between',
},
scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape        
},
content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
text: {
    fontSize: 24,    
},
});

export default Trocas;