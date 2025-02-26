import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Image, StatusBar, ScrollView, SafeAreaView, StyleSheet, Alert } from "react-native";
import axios from 'axios';

// Componentes
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Produto {
    idProduto: number;
    image: string;
    titulo: string;
    descricao: string;
    precoAnterior: number;
    precoAtual: number;
}

interface MaquiagemProps {
    navigation: NavigationProp<ParamListBase>;
}

const Maquiagem: React.FC<MaquiagemProps> = ({ navigation }) => {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const handleSearchChange = (titulo: string) => {
        // Implementar lógica de busca aqui
        console.log("Search title:", titulo);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/tbProduto/categoria/2');
                setProdutos(response.data);
                console.log("Dados da categoria Maquiagem: ", response.data);
            } catch (error) {
                console.error("Erro ao buscar produtos da categoria Maquiagem:", error);
                Alert.alert("Erro", "Não foi possível buscar os produtos da categoria Maquiagem.");
            }
        };
        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header
                    HomePress={() => navigation.navigate('Home')}
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />

                <View style={styles.innerContainer}>
                    <SearchBar
                        placeholder="Procure por um produto..."
                        onChange={handleSearchChange}
                    />

                    <Text style={styles.categoryText}>Você está na categoria: MAQUIAGEM</Text>

                    <FlatList
                        data={produtos}
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
                        <Image source={require('../assets/images/img02.png')} style={styles.image} />
                    </View>
                </View>
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
        backgroundColor: '#fff',
    },
    scrollContainer: {
        paddingBottom: 80, // Espaço para garantir que o conteúdo não fique por baixo do rodapé
    },
    innerContainer: {
        padding: 20,
    },
    categoryText: {
        marginVertical: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: '50%',
        height: 70,
        borderRadius: 10,
    },
    bannerfinal: {
        alignItems: 'center',
    },
    cardsBanco: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
});

export default Maquiagem;