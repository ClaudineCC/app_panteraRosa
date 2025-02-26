import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialIcons';
import StarRating from "./StarRating";
import React from "react";

// as imagens sao Mapeadas  para arquivos dentro do projeto, atraves do caminho real : assets/images.
//esses mesmos nomes estao salvos no banco de dados
// const imageMap = { [key: string]: any } = {   // chave do tipo string e o valor do tipo any (a imagem)

const imageMap: Record<string, any> = {
  "CatCabelo.png": require("../assets/images/CatCabelo.png"),
  "CatMaquiagem.png": require("../assets/images/CatMaquiagem.png"),
  "CatPerfume.png": require("../assets/images/CatPerfume.png"),
  "CatSkinCare.png": require("../assets/images/CatSkinCare.png"),
  "CatUnha.png": require("../assets/images/CatUnha.png"),
  "CatCorpoEBanho.png": require("../assets/images/CatCorpoEBanho.png"),
};

//criando uma interface - recebe dados lançados na pagina home, serve mais para uma apresentação para cliente, sem ter dados conectados ao banco
// no entanto trabalhando com tipagem deve ser explicita os tipos que recebem
interface CardProps {
  idProduto: number; //mudar para inteiro
  image: string; // nome da imagem vinda do banco de dados
  titulo: string;
  descricao: string;
  precoAnterior: string;
  precoAtual: string;
  comprar: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  titulo,
  descricao,
  precoAnterior,
  precoAtual,
  comprar,
}) => {
  // const Card = ({ image, titulo, descricao, precoAnterior, precoAtual, comprar }) => {

  //verifica se existe mapeamento de imagem
  const imagePath = imageMap[image];

  const handleSearchChange = (rating: number) => {
    // Alert. alert('Nova votação :' , rating);
  };

  return (
    <>
      <View style={styles.card}>
        {/* Verifica se a imagem existe no mapeamento */}
        {imagePath ? (
          <Image source={imagePath} style={styles.image} />
        ) : (
          <Text>Imagem não disponível</Text> // Caso a imagem não exista no mapeamento
        )}

        {/* <Image style={styles.image}
                    source={require('../assets/${image}')} />  {/* caminho relativo pois ira carregar a imagem da pasta local */}
        {/* <Image source={{ uri: image }} style={styles.image} />  se as fotos estivessem fora do  projeto ( tipo servidor ou URL ) banco de dados retornaria URLs dinamicas */}

        <Text style={styles.descricao}>{titulo}:</Text>
        <Text style={styles.descricao}>{descricao}:</Text>

        <StarRating
          maximoEstrelas={5}
          initialRating={3}
          onRatingChange={handleSearchChange}
        />
        {/* <Icon name='star' size={24} />  */}

        <Text style={styles.precoAnterior}>{precoAnterior}</Text>
        <Text style={styles.precoAtual}>{precoAtual}</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={comprar}
          accessible={true}
          accessibilityLabel="Adicionar ao carrinho"
        >
          <Text style={styles.botaoTexto}> Adicionar</Text>
        </TouchableOpacity>
        {/* compra direta sem validação de estoque/ sem tbEstoque */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "pink",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.8)",
  },
  image: {
    width: "100%", // Ajusta a largura da imagem para 100% do contêiner
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  precoAnterior: {
    textDecorationLine: "line-through",
    fontSize: 14,
    color: "gray",
  },
  precoAtual: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d32f2f",
  },
  botao: {
    backgroundColor: "pink",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Card;
