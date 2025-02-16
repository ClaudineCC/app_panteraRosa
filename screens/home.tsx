import {  SafeAreaView,  View,  Text,  StyleSheet,  StatusBar,  ScrollView,  FlatList,  Dimensions,  Alert,  Image,} from "react-native";
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


const Home = ({ navigation }) => {
  // no searchBar produto: armazena os resultados de busca de produtos
  const [produto, setProduto] = useState([]);  // para inserir card
  const [titulo,setTitulo] =useState('');
 


  //INSERIR CARDS(dados salvos na tbProduto) NO HOME
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tbProduto');
        setProduto(response.data);
        console.log("Dados do banco: ", response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        Alert.alert("Erro", "Não foi possível buscar os produtos.");
      }
    };

    fetchData();
  }, []);

  
  // NO SEARCHBAR:
  // função de callback para atualizar o estado produto com os resultados encontrados
  // a requisicao GET ao servidor via Axios, serve para obter os dados e exibi-los na home
  // axios faz a ponte entre faz a ponte entre o app e o servidor node.js configurado no server.js
  const resultadoPesquisa = async (titulo) => {
    try {
      const response = await axios.get(`http://localhost:3000/tbProduto/titulo=${titulo}`);
      setProduto(response.data);
      console.log("resultados de busca: ", response.data);
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
      Alert.alert("Erro", "Não foi possível encontrar o produto.");
    }
  };
  
   
  //  ação/ botao do card
  const comprar = async (item) => { 
    try {
      await axios.post("http://localhost:3000/tbProduto", item);
      Alert.alert("Sucesso", "Produto inserido na sacola com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar o produto:", error);
      Alert.alert("Erro", "Não foi possível inserir o produto");
    }
  };





  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="gray" />

      {/* contentContainerStyle. ao estilizar  paddingBotton de 80 por ex para garantir que  o conteudo nao fique por baixo do rodape fixo*/}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header
          HomePress={() => navigation.navigate("Home")}
          SacolaPress={() => navigation.navigate("Sacola")}
          LoginPress={() => navigation.navigate("Login")}
        />

        <View style={styles.container}>
          <SearchBar
            placeholder="Procure por um produto..."
            onChange={resultadoPesquisa} 
          />
        </View>

        <Carrosel />

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

        {/**flatList retorno de cards para funções: resultado pesquisa */}

    
                   
        <FlatList
          data={produto}
          keyExtractor={(item) => item.idProduto.toString()}
          pagingEnabled
          renderItem={({ item }) => (
            <View style={styles.cardsBanco}>
              <Card
                image={{ uri: item.image }}
                titulo={item.titulo}
                descricao={item.descricao}
                precoAnterior={`R$ ${item.precoAnterior}`}
                precoAtual={`R$ ${item.precoAtual}`}
                comprar={() => comprar(item)}
              />
            </View>
          )}
        />



          
          {/* <Card
            image={require("../assets/images/CatCorpoEBanho.png")}
            titulo="Sabonete liquido"
            descricao="Essencial para o seu dia-a-dia"
            precoAnterior="R$ 25,00"
            precoAtual="R$ 18,00"
            comprar={() => navigation.navigate("Sacola")}
          /> */}
          {/* 
          <Card
            image={require("../assets/images/CatPerfume.png")}
            titulo="Perfume unissex"
            descricao="Fragrância para todos os estilos"
            precoAnterior="R$ 150,00"
            precoAtual="R$ 120,00"
            comprar={() => navigation.navigate("Sacola")}
          />

          <Card
            image={require("../assets/images/CatMaquiagem.png")}
            titulo="Trio de sombras"
            descricao="Arrase com cores deslumbrantes"
            precoAnterior="R$ 99,00"
            precoAtual="R$ 75,00"
            comprar={() => navigation.navigate("Sacola")}
          /> */}
          {/* 
          <Card
            image={require("../assets/images/CatSkinCare.png")}
            titulo="Rolinho de massagem"
            descricao="SkinCare a qualquer hora do dia"
            precoAnterior="R$ 35,00"
            precoAtual="R$ 22,00"
            comprar={() => navigation.navigate("Sacola")}
          />

          <Card
            image={require("../assets/images/CatCabelo.png")}
            titulo="Escova desfrizante"
            descricao="Resistente, tem ions e tem outros"
            precoAnterior="R$ 88,00"
            precoAtual="R$ 78,00"
            comprar={() => navigation.navigate("Sacola")}
          /> */}

          {/* <Card
            image={require("../assets/images/CatUnha.png")}
            titulo=" Esmalte "
            descricao="Te seduz: é durável. Vai e arrasa !"
            precoAnterior="R$ 110,00"
            precoAtual="R$ 7,50"
            comprar={() => navigation.navigate("Sacola")}
          />      
          */}  


        

        <View style={styles.imageHome}>
          {/* <Image source={require('C:/APP/PANTERA_ROSA/app_panteraRosa/assets/images/home01.png')} style={styles.image}/> */}
          <Image source={require("../assets/images/home01.png")}  style={styles.image} />
          {/* <Image source={require('C:/APP/PANTERA_ROSA/app_panteraRosa/assets/images/home02.png')} style={styles.image} /> */}
          <Image  source={require("../assets/images/home02.png")}     style={styles.image}  />
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape
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
  cardsBanco: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageHome: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  buttonsHome: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
  },
  image: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2px",
  },
});

export default Home;
