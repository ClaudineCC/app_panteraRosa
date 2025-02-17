import { useState, useEffect, } from 'react';
import { FlatList, Text, TouchableOpacity, View, SafeAreaView, ScrollView, StatusBar, Image, StyleSheet, Alert, } from "react-native";
import axios from 'axios';

import Header from "../components/Header";
import Footer from "@/components/Footer";
import Card from '@/components/Card';
// import StarRating from "@/components/StarRating";



const Lancamento: React.FC = ({ navigation }) => {
    const [produtos, setProdutos] = useState([]);
    const [error, setError] =useState('');


    
  // CARREGAR TODOS OS PRODUTOS INICIALMENTE DO BANCO DE DADOS 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tbProduto');
        setProdutos(response.data);  //armazena todos os produtos        
        // console.log("Dados do banco: ", response.data);
      } catch (error) {
        setError(error.message);
        // console.error("Erro ao buscar produtos:", error);
        Alert.alert("Erro", "Não foi possível buscar os produtos.");
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


                <Text style={styles.texto}>LANÇAMENTOS : Se sinta bem </Text>

                <View style={styles.cardBanco}>
                    <FlatList
                        data={produtos}
                        keyExtractor={(item) => item.idProduto.toString()}
                        pagingEnabled
                        renderItem={({ item }) => (
                            <View style={styles.cardsBanco}>
                                <Card
                                    image={item.image }
                                    titulo={item.titulo}
                                    descricao={item.descricao}
                                    precoAnterior={`R$ ${item.precoAnterior}`}
                                    precoAtual={`R$ ${item.precoAtual}`}
                                    comprar={() => comprar()}
                                />
                            </View>
                        )}
                    />

                    {/*rever flatlist com flat do home */}




                </View>
                {/* <View style={styles.twoCards}>

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
                </View> */}


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
        marginLeft: 65,
        marginVertical: 10,
    },
    cardBanco: {
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