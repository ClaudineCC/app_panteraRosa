import { SafeAreaView, View, Text, StyleSheet, StatusBar, ScrollView, FlatList, Dimensions, Alert, Image, } from "react-native";
import React, { useState, useEffect, } from "react";
import axios from "axios";

//componentes
import Header from "@/components/Header";
import ButtonsHome from "@/components/ButtonsHome";
import SearchBar from "@/components/SearchBar";
import Carrosel from "@/components/Carrosel";
import Card from "@/components/Card";
import Footer from "@/components/Footer";




const { width } = Dimensions.get("window");



import { NavigationProp } from '@react-navigation/native';

interface HometexteProps {
    navigation: NavigationProp<any>;
}

const Hometexte: React.FC<HometexteProps> = ({ navigation }) => {
    const [produtos, setProdutos] = useState<any[]>([]);  // Todos os produtos
    const [produtosFiltrados, setProdutosFiltrados] = useState<any[]>([]);  // Produtos filtrados pela pesquisa
    const [searchText, setSearchText] = useState('');  // Texto da pesquisa



    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/tbProduto');  // API para pegar todos os produtos
                setProdutos(response.data);
                setProdutosFiltrados(response.data);  // Inicialmente, exibe todos os produtos
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
                Alert.alert("Erro", "Não foi possível buscar os produtos.");
            }
        };
        fetchProdutos();
    }, []);




    const handleSearchChange = (text: string) => {
        setSearchText(text);
        // Filtra os produtos com base no texto digitado
        const filteredProducts = produtos.filter((produto) =>
            produto.titulo.toLowerCase().includes(text.toLowerCase()) ||
            produto.descricao.toLowerCase().includes(text.toLowerCase())
        );
        setProdutosFiltrados(filteredProducts);  // Atualiza os produtos filtrados
    };




    const handleSearchSubmit = () => {
        // Limpa o campo de pesquisa após exibir os produtos
        setSearchText('');
    };



    // FUNÇÃO PARA ADICIONAR ITENS AO CARRINHO (BOTAO COMPRAR)
    const comprar = (item: any) => {
        console.log(`Comprando item: ${item.titulo}`);
        // Lógica para comprar/adicionar  o item a sacola
    };


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header
                    HomePress={() => navigation.navigate('Home')}
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />

                <View style={styles.container}>
                    {/* SearchBar */}
                    <SearchBar
                        placeholder="Procure por um produto..."
                        onChange={handleSearchChange}
                    />

                    <Carrosel />


                    <View style={styles.container}>


                        <View style={styles.buttonsHome}>
                            <ButtonsHome
                                text="Lançamento"
                                iconName="rocket"
                                onPress={() => navigation.navigate("Lancamento")}
                            />
                            <ButtonsHome
                                text="Cupom"
                                iconName="tag"
                                onPress={() => navigation.navigate("Cupom")}
                            />
                            <ButtonsHome
                                text="Outlet"
                                iconName="percent"
                                onPress={() => navigation.navigate("Outlet")}
                            />
                            </View>
                        </View>



                        <View style={styles.cardsBanco}>
                            {/* Exibe a mensagem "Nenhum produto encontrado" se a pesquisa estiver vazia e não houver resultados */}
                            {/* {resultadoPesquisa.length === 0 && (
       <Text style={styles.semResultado}>Nenhum produto encontrado</Text>             
    )}      
  */}

                            <FlatList
                                data={produtosFiltrados} // Exibe resultados da pesquisa, se houver, senão exibe todos
                                keyExtractor={(item) => item.idProduto.toString()}
                                pagingEnabled
                                renderItem={({ item }) => (

                                    <Card
                                        idProduto={item.idProduto}
                                        image={item.image}   // passa o nome da imagem do Card (ex: 'CatCabelo.png')
                                        titulo={item.titulo}
                                        descricao={item.descricao}
                                        precoAnterior={item.precoAnterior}
                                        precoAtual={item.precoAtual}
                                        comprar={() => comprar(item)}
                                    />
                                )}
                                initialNumToRender={10} // Começa com 10 itens visíveis
                                maxToRenderPerBatch={10} // Carrega no máximo 10 itens por vez
                                windowSize={21} // Tamanho da janela de renderização             
                            />
                        </View>


                        <View style={styles.imageHome}>
                            {/* <Image source={require('C:/APP/PANTERA_ROSA/app_panteraRosa/assets/images/home01.png')} style={styles.image}/> */}
                            <Image source={require("../assets/images/home01.png")} style={styles.image} />
                            {/* <Image source={require('C:/APP/PANTERA_ROSA/app_panteraRosa/assets/images/home02.png')} style={styles.image} /> */}
                            <Image source={require("../assets/images/home02.png")} style={styles.image} />
                        </View>
                        
                    </View>


                    {/*fechar scrollView aqui pois o rodape sera fixo */}
            </ScrollView>


            <Footer
                HomePress={() => navigation.navigate("Home")}
                CategoriaPress={() => navigation.navigate("Categoria")}
                AjudaPress={() => navigation.navigate("Ajuda")}
            />

        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    scrollContainer: {
        paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape
    },
    buttonsHome: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        marginTop: 10, // Ajusta a margem superior
        marginBottom: 10, // Ajusta a margem inferior
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,

    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    semResultado: {
        fontSize: 16,
        color: '#888',
        marginTop: 10,
        textAlign: 'center',
    },
    cardsBanco: {
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    imageHome: {
        // flex: 1,
        padding: 20,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
        margin: 10,
    },
    image: {
        // flex: 1,
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2",
        margin: 10,

    },

});

export default Hometexte;

