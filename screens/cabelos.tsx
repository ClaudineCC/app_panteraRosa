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

//componentes:
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

import { NavigationProp } from '@react-navigation/native';

interface CabelosProps {
  navigation: NavigationProp<any>;
}

const Cabelos: React.FC<CabelosProps> = ({ navigation }) => {
  // const [resultadoPesquisa, setResultadoPesquisa] = useState<any[]>([]);     // para resultados da pesquisa
  // const [produtos, setProdutos] = useState<any[]>([]);   // todos os produtos filtrados
  // const [produtosCabelo, setProdutosCabelo] = useState<any[]>([]);     // todos os produtos
  const [error, setError] = useState<string | null>(null); // para exibir erros

  const [produtosCabelo, setProdutosCabelo] = useState<any[]>([]); // Para armazenar os produtos de cabelo
  const [searchText, setSearchText] = useState(""); // Texto da barra de pesquisa
  const [produtosFiltrados, setProdutosFiltrados] = useState<any[]>([]); // Para armazenar os produtos filtrados

  // função para retornar os produtos da categoria especifica ( de 01 a 06)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/tbProduto/categoria/1"
        );
        // const response = await axios.get('http://192.168.0.27:3000/tbProduto/categoria/1');  // ver Api esta acessivel via IPv4 local
        if (response.data && Array.isArray(response.data)) {
          setProdutosCabelo(response.data);
          setProdutosFiltrados(response.data);
          console.log("Dados da categoria Cabelo: ", response.data);
        } else {
          Alert.alert("Aviso", "nenhum produto encontrado nessa categoria");
        }
      } catch (error) {
        console.error("Erro ao buscar produtos da categoria Cabelo:", error);
        Alert.alert(
          "Erro",
          "Não foi possível buscar os produtos da categoria Cabelo."
        );
      }
    };
    fetchData();
  }, []);

  //função  para retornar os produtos digitados no search bar
  const handleSearchChange = (text: string) => {
    setSearchText(text); // Atualiza o texto da pesquisa
    const produtosResultado = produtosCabelo.filter(
      (produto) =>
        produto.titulo.toLowerCase().includes(text.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(text.toLowerCase())
    );
    setProdutosFiltrados(produtosResultado); // Atualiza a lista filtrada
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="gray" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header
          HomePress={() => navigation.navigate("Home")}
          SacolaPress={() => navigation.navigate("Sacola")}
          LoginPress={() => navigation.navigate("Login")}
        />

        <View style={styles.container}>
          <SearchBar
            placeholder="Procure por um produto..."
            onChange={handleSearchChange} //  chama a função de filtro, atualiza resultados
            // value={searchText}      // para garantir que o texto da pesquisa seja controlado
          />

          <Text> Você esta na categoria : CABELOS </Text>

          <View style={styles.cardsBanco}>
            <FlatList
              data={produtosFiltrados}
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
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape
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

export default Cabelos;
