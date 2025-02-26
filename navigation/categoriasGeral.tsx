import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";

// Componentes
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

//import ListaCategorias from './navigation/ListaCategorias';  // recebe categoriaId  e categoriaNome

import ListaCategorias from "./ListaCategorias";

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  CategoriasGeral: { categoriaId: string; categoriaNome: string };
};

type CategoriasGeralNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CategoriasGeral'
>;

type CategoriasGeralRouteProp = RouteProp<RootStackParamList, 'CategoriasGeral'>;

type Props = {
  navigation: CategoriasGeralNavigationProp;
  route: CategoriasGeralRouteProp;
};

const CategoriasGeral: React.FC<Props> = ({ navigation, route }) => {
  const { categoriaId, categoriaNome } = route.params; // Obtém os parâmetros passados

  const [produtosCategoria, setProdutosCategoria] = useState<any[]>([]); // Produtos da categoria
  const [produtosFiltrados, setProdutosFiltrados] = useState<any[]>([]); // Produtos filtrados
  const [searchText, setSearchText] = useState(""); // Texto da barra de pesquisa

  //função para retornar a pagina carregada com a categoria solicitada
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/tbProduto/categoria/${categoriaId}`
        );
        setProdutosCategoria(response.data); // Salva todos os produtos da categoria
        setProdutosFiltrados(response.data); // Inicializa a lista filtrada com todos os produtos
        console.log(`Dados da categoria ${categoriaNome}:`, response.data);
      } catch (error) {
        console.error(
          `Erro ao buscar produtos da categoria ${categoriaNome}:`,
          error
        );
        Alert.alert(
          "Erro",
          `Não foi possível buscar os produtos da categoria ${categoriaNome}.`
        );
      }
    };
    fetchData();
  }, [categoriaId]); // Recarrega os dados sempre que a categoria mudar

  //função para retornar os produtos digitados no searchbar
  const handleSearchChange = (text: string) => {
    setSearchText(text); // Atualiza o texto da pesquisa

    // Filtra os produtos baseados no texto de pesquisa
    const filteredProducts = produtosCategoria.filter(
      (produto) =>
        produto.titulo.toLowerCase().includes(text.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(text.toLowerCase())
    );
    setProdutosFiltrados(filteredProducts); // Atualiza a lista filtrada
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="gray" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header
          HomePress={() => navigation.navigate("Home" as never)}
          SacolaPress={() => navigation.navigate("Sacola" as never)}
          LoginPress={() => navigation.navigate("Login" as never)}
        />

        <View style={styles.container}>
          <SearchBar
            placeholder="Procure por um produto..."
            onChange={handleSearchChange} // Atualiza os resultados com base no texto
            // Para garantir que o texto da pesquisa seja controlado
          />

          <Text> Você está na categoria: {categoriaNome.toUpperCase()}</Text>

          <View style={styles.cardsBanco}>
            <FlatList
              data={produtosFiltrados} // Lista filtrada dos produtos
              keyExtractor={(item) => item.idProduto.toString()}
              renderItem={({ item }) => (
                <Card
                  idProduto={item.idProduto}
                  image={item.image}
                  titulo={item.titulo}
                  descricao={item.descricao}
                  precoAnterior={`R$ ${item.precoAnterior}`}
                  precoAtual={`R$ ${item.precoAtual}`}
                  comprar={() =>
                    Alert.alert("Compra", `Você comprou: ${item.titulo}`)
                  }
                />
              )}
            />
          </View>

          <View style={styles.bannerfinal}>
            <Image
              source={require("../assets/images/img01.png")}
              style={styles.image}
            />
          </View>
        </View>
      </ScrollView>

      <Footer
        HomePress={() => navigation.navigate("Home" as never)}
        CategoriaPress={() => navigation.navigate("Categoria" as never)}
        AjudaPress={() => navigation.navigate("Ajuda" as never)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: 80, // Garante que o conteúdo não fique por baixo do rodapé
  },
  image: {
    flex: 1,
    width: "50%",
    height: 70,
    borderRadius: 10,
  },
  bannerfinal: {
    display: "flex",
    alignItems: "center",
  },
  cardsBanco: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default CategoriasGeral;
