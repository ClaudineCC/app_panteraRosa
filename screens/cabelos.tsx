import React, { useState, useEffect, } from 'react';
import { FlatList, Text, View, Image, StatusBar, ScrollView, SafeAreaView, StyleSheet, Alert } from "react-native";
import axios from 'axios';


//componentes:
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Card';
import Footer from '@/components/Footer';


const Cabelos: React.FC = ({ navigation }) => {

    // no searchBar
    const [produto, setProduto] = useState([]);
    const handleSearchChange = (data) => {
        setProduto(data);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/tbProduto/categoria/1');
                setProduto(response.data);
                console.log("Dados da categoria Cabelo: ", response.data);
            } catch (error) {
                console.error("Erro ao buscar produtos da categoria Cabelo:", error);
                Alert.alert("Erro", "Não foi possível buscar os produtos da categoria Cabelo.");
            }
        };
        fetchData();
    }, []);


    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer} >


                <Header
                    HomePress={() => navigation.navigate('Home')}
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />

                <View style={styles.container}>

                    <SearchBar
                        placeholder="Procure por um produto..."
                        onChange={handleSearchChange} // verificar como alterar no components!!!
                    />

                    <Text> Você esta na categoria : CABELOS </Text>

                    <FlatList
                        data={produto}
                        keyExtractor={(item) => item.idProduto.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.cardsBanco}>
                                <Card
                                    image={{ uri: item.image }}
                                    titulo={item.titulo}
                                    descricao={item.descricao}
                                    precoAnterior={`R$ ${item.precoAnterior}`}
                                    precoAtual={`R$ ${item.precoAtual}`}
                                    comprar={() => Alert.alert("Compra", `Você comprou: ${item.titulo}`)}
                                />
                            </View>
                        )}
                    />


                    <View style={styles.bannerfinal}>
                        <Image source={require('../assets/images/img01.png')} style={styles.image} />
                    </View>

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
        padding: 20,
        backgroundColor: '#fff',

    },
    scrollContainer: {
        paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape            
    },
    image: {
        flex: 1,
        width: '50%',
        height: 70,
        borderRadius: 10,
    },
    bannerfinal: {
        display: 'flex',
        alignItems: 'center',
    },
    cardsBanco: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
});

export default Cabelos;