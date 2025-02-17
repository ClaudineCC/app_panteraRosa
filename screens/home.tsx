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


const Home = ({ navigation }) => {
  const [resultadoPesquisa, setResultadoPesquisa] = useState<any[]>([]);     // para resultados da pesquisa 
  const [produtos, setProdutos] = useState([]);     // todos os produtos filtrados
  const [error, setError] = useState<string | null>(null);  // para exibir erros




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




  // LOGICA PARA BUSCAR PRODUTOS POR TITULO NO SEARCHBAR 
  // Fluxo 
  // usuário digita um nome no SearchBar.
  // SearchBar chama a função onChange (passada pelo Home.tsx)., apenas dispara a ação
  // Home.tsx faz a requisição à API com axios e recebe os resultados.
  // Home.tsx atualiza o estado produtos com os resultados.
  // FlatList no Home.tsx exibe os produtos encontrados, renderiza 'resultadoPesquisa' se tiver ou produtos se estiver vazia
  const buscarProdutos = async (titulo: string) => {
    if (!titulo.trim()) {
      setResultadoPesquisa([]);    // Se o campo estiver vazio, limpa os produtos
      return;
    }
    try {
      const response = await axios.get(`http://localhost:3000/tbProduto/titulo/${titulo}`);
      setResultadoPesquisa(response.data);  // Atualiza o estado com os resultados
      if (response.data.length === 0) {
        Alert.alert('Nenhum produto encontrado.');
        // console.log('Resultado de busca:', response.data);
      } else {
        Alert.alert('Produtos encontrados!');
      }
    } catch (error) {
      setResultadoPesquisa([]); // Limpa os resultados se houver erro
      // console.error('Erro ao buscar produto:', error);
      Alert.alert('Produto não encontrado. Tente outro.');
    }
  };      
   

  const aposProdutoEncontrado = () => {
    // Limpa o campo de pesquisa após os produtos serem exibidos
    setProdutos('');
};



  // FUNÇÃO PARA ADICIONAR ITENS AO CARRINHO (BOTAO COMPRAR)
  const comprar = (item: any) => {
    console.log(`Comprando item: ${item.titulo}`);
    // Lógica para comprar/adicionar  o item a sacola
  };

  // // //  logica para comprar o item
  // const comprar = async (item) => {
  //   try {
  //     await axios.post("http://localhost:3000/tbProduto", item);
  //     console.log(`Comprando item: ${item.titulo}`);
  //     Alert.alert("Sucesso", "Produto inserido na sacola com sucesso!");
  //   } catch (error) {
  //     console.error("Erro ao adicionar o produto:", error);
  //     Alert.alert("Erro", "Não foi possível inserir o produto");
  //   }
  // };




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


        <SearchBar
          placeholder="Procure por um produto..."
          onChange={buscarProdutos}  // Passando a função de busca para o SearchBar     
          onSubmit={aposProdutoEncontrado} // limpa o campo ao submeter a pesquisa

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
             {/* Exibe a mensagem "Nenhum produto encontrado" se a pesquisa estiver vazia e não houver resultados */}
             {/* {resultadoPesquisa.length === 0 && (
               <Text style={styles.semResultado}>Nenhum produto encontrado</Text>             
            )}      
          */}
         
            <FlatList
              data={resultadoPesquisa.length > 0 ? resultadoPesquisa : produtos} // Exibe resultados da pesquisa, se houver, senão exibe todos
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
                  comprar= {() => comprar(item)}
                />
              )}
              initialNumToRender={10} // Começa com 10 itens visíveis
              maxToRenderPerBatch={10} // Carrega no máximo 10 itens por vez
              windowSize={21} // Tamanho da janela de renderização             
            />
          </View>



          {/* <Card  CATEGORIA 06
            image={require("../assets/images/CatCorpoEBanho.png")}
            titulo="Sabonete liquido"
            descricao="Essencial para o seu dia-a-dia"
            precoAnterior="R$ 25,00"
            precoAtual="R$ 18,00"
            comprar={() => navigation.navigate("Sacola")}
          /> */}
          {/* 
          <Card   CATEGORIA 03
            image={require("../assets/images/CatPerfume.png")}
            titulo="Perfume unissex"
            descricao="Fragrância para todos os estilos"
            precoAnterior="R$ 150,00"
            precoAtual="R$ 120,00"
            comprar={() => navigation.navigate("Sacola")}
          />

          <Card  CATEGORIA 02 
            image={require("../assets/images/CatMaquiagem.png")}
            titulo="Trio de sombras"
            descricao="Arrase com cores deslumbrantes"
            precoAnterior="R$ 99,00"
            precoAtual="R$ 75,00"
            comprar={() => navigation.navigate("Sacola")}
          /> */}
          {/* 
          <Card   CATEGORIA 4
            image={require("../assets/images/CatSkinCare.png")}
            titulo="Rolinho de massagem"
            descricao="SkinCare a qualquer hora do dia"
            precoAnterior="R$ 35,00"
            precoAtual="R$ 22,00"
            comprar={() => navigation.navigate("Sacola")}
          />

          <Card CATEGORIA 01
            image={require("../assets/images/CatCabelo.png")}
            titulo="Escova desfrizante"
            descricao="Resistente, tem ions e tem outros"
            precoAnterior="R$ 88,00"
            precoAtual="R$ 78,00"
            comprar={() => navigation.navigate("Sacola")}
          /> */}

          {/* <Card CATEGORIA 05
            image={require("../assets/images/CatUnha.png")}
            titulo=" Esmalte "
            descricao="Te seduz: é durável. Vai e arrasa !"
            precoAnterior="R$ 10,00"
            precoAtual="R$ 7,50"
            comprar={() => navigation.navigate("Sacola")}
          />      
          */}


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
    margin:10,
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

export default Home;
