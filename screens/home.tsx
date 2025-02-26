import { SafeAreaView, View, StyleSheet, StatusBar, ScrollView, FlatList, Dimensions, Alert, Image, } from "react-native";
/*Nota:
SafeAreaView => É usado para garantir que o conteúdo não seja cortado em dispositivos com bordas arredondadas;
StatusBar => É usado para controlar a aparência da barra de status em dispositivos móveis que exibe informações como a hora, o nível da bateria, a intensidade do sinal e outras notificações;
ScrollView => É utilizado para permitir que o conteúdo que excede o tamanho da tela seja rolável.
Flastlist => É utilizado para para renderizar listas de dados é  útil quando você tem uma grande quantidade de dados para exibir, pois ele renderiza apenas os itens que estão visíveis na tela, melhorando o desempenho em comparação com o ScrollView;
Dimensions => É um módulo que fornece informações sobre as dimensões da tela do dispositivo. Ele é útil para obter a largura e a altura da tela, permitindo que você crie layouts responsivos que se adaptam a diferentes tamanhos de tela.
Alert => É um módulo que permite exibir caixas de diálogo de alerta para o usuário para mostrar mensagens, confirmar ações ou solicitar informações do usuário.
*/
import { NavigationProp } from '@react-navigation/native';// <= usado para tipar a prop de navegação;
import React, { useState, useEffect } from "react";// <=  são hooks do React;
import axios from "axios";// <= é uma biblioteca para fazer requisições HTTP.

// Importando da pasta components:
import Header from "@/components/Header";
import ButtonsHome from "@/components/ButtonsHome";
import SearchBar from "@/components/SearchBar";
import Carrosel from "@/components/Carrosel";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

// Obtendo a largura da tela:
const { width } = Dimensions.get("window");// <= Aqui, estamos usando Dimensions para obter a largura da tela do dispositivo, que pode ser útil para definir estilos responsivos;
interface Props {
  navigation: NavigationProp<any>;
};
interface Produto{
  idProduto: number;
  image: string;
  titulo: string;
  descricao: string;
  precoAnterior: number;
  precoAtual: number;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const [resultadoPesquisa, setResultadoPesquisa] = useState<Produto[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tbProduto");
        setProdutos(response.data);
      } catch (error: any) {
        setError(error.message);
        Alert.alert("Erro", "Não foi possível buscar os produtos.");
      }
    };
    fetchData();
  }, []);

  const buscarProdutos = async (titulo: string) => {
    if (!titulo.trim()) {
      setResultadoPesquisa([]);
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:3000/tbProduto/titulo/${titulo}`
      );
      setResultadoPesquisa(response.data);
      if (response.data.length === 0) {
        Alert.alert("Nenhum produto encontrado.");
      } else {
        Alert.alert("Produtos encontrados!");
      }
    } catch (error) {
      setResultadoPesquisa([]);
      Alert.alert("Produto não encontrado. Tente outro.");
    }
  };

  const aposProdutoEncontrado = () => {
    setProdutos([]);
  };

  const comprar = (item: Produto) => {
    console.log(`Comprando item: ${item.titulo}`);
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

        <SearchBar
          placeholder="Procure por um produto..."
          onChange={buscarProdutos}
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

          <View style={styles.cardsBanco}>
            <FlatList
              data={resultadoPesquisa.length > 0 ? resultadoPesquisa : produtos}
              keyExtractor={(item) => item.idProduto.toString()}
              pagingEnabled
              renderItem={({ item }) => (
                <Card
                  idProduto={item.idProduto}
                  image={item.image}
                  titulo={item.titulo}
                  descricao={item.descricao}
                  precoAnterior={item.precoAnterior.toString()}
                  precoAtual={item.precoAtual.toString()}
                  comprar={() => comprar(item)}
                />
              )}
              initialNumToRender={10}
              maxToRenderPerBatch={10}
              windowSize={21}
            />
          </View>

          <View style={styles.imageHome}>
            <Image
              source={require("../assets/images/home01.png")}
              style={styles.image}
            />
            <Image
              source={require("../assets/images/home02.png")}
              style={styles.image}
            />
          </View>
        </View>
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
    paddingBottom: 80,
  },
  buttonsHome: {
    flexDirection: "row",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // gap: "10px",
    marginTop: 10,
    marginBottom: 10,
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
    color: "#888",
    marginTop: 10,
    textAlign: "center",
  },
  cardsBanco: {
    flexDirection: "column",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageHome: {
    padding: 20,
    borderRadius: 10,
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // gap: 10,
    margin: 10,
  },
  image: {
    // flex: 1,
    // flexDirection: "row",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // gap: "2",
    margin: 10,
  },
});

export default Home;


//##############################################################################


