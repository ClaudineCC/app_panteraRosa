import { SafeAreaView, View, Text, StyleSheet, StatusBar, ScrollView, FlatList, Dimensions, Alert, Image, } from "react-native";
import React, { useState } from 'react';


//componentes
import Header from '@/components/Header';
import Cupons from '@/components/Cupons';
import ButtonsHome from '@/components/ButtonsHome';
import SearchBar from '@/components/SearchBar';
import Carrosel from '@/components/Carrosel';
import Card from '@/components/Card';
// import StarRating from '@/components/StarRating';
import Footer from '@/components/Footer';



const { width } = Dimensions.get('window');


const Home = ({ navigation }) => {

    // no searchBar
    const [produto, setProduto] = useState([]);

    const handleSearchChange = (results) => {
        setProduto(results);
        console.log('resultados de busca: ', results);


        //alerta de produto inserido na sacola   
        // Alert.alert(
        //   "Produto Adicionado",
        //   `${produto.titulo} foi adicionado à sacola`,
        //   [
        //     { text: "Produto Adicionado", onPress:()=> console.log("produto adicionado") }
        //   ]
        // );
    };


    //nos cards
    const [image, setImage] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [precoAnterior, setPrecoAnterior] = useState('');
    const [precoAtual, setPrecoAtual] = useState('');

    //botao do card
    const ComprarProduto = () => {
        const produto = {
            id:     //Math.floor(Math.random() * 1000), // ID aleatório para exemplo
            titulo,
            descricao,
            precoAnterior: parseFloat(precoAnterior),
            precoAtual: parseFloat(precoAtual),
            image,
        };

        fetch('http://localhost:3000/adicionar', {  //  chamada  na pasta Api_panteraRosa, metodo post/ adicionar
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        })
            .then(response => response.json())
            .then(data => {
                Alert.alert('Sucesso', 'Produto inserido com sucesso!');
            })
            .catch(error => {
                console.error('Erro:', error);
                Alert.alert('Erro', 'Não foi possível inserir o produto');
            });
    };




    return (

        <SafeAreaView style={styles.container}>


            <StatusBar barStyle="light-content" backgroundColor="gray" />

            {/* contentContainerStyle. ao estilizar  paddingBotton de 80 por ex para garantir que  o conteudo nao fique por baixo do rodape fixo*/}
            <ScrollView contentContainerStyle={styles.scrollContainer} >



                <Header
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />



                <View style={styles.container}>
                    <SearchBar
                        placeholder="Procure por um produto..."
                        onChange={handleSearchChange} // verificar como alterar no components!!!
                    />                   
                </View>


                <Carrosel />




                <ButtonsHome
                    text="Lançamento"
                    iconName="rocket"
                    onPress={() => navigation.navigate('Lancamento')}
                />

                <ButtonsHome
                    text="Cupom"
                    iconName="tag"
                    onPress={() => navigation.navigate('Cupom')}
                />

                <ButtonsHome
                    text="Outlet"
                    iconName="percent"
                    onPress={() => navigation.navigate('Outlet')}
                />





                {/* USAR BANCO DE DADOS PARA INSERIR OS DADOS ABAIXO */}



                <View style={styles.sixCards}>



                    <Card
                        // image= {image}
                        // titulo= {titulo}
                        // descricao= {descricao}
                        // precoAnterior= {`R$ ${precoAnterior}`}
                        // precoAtual= {`R$ ${precoAtual}`}
                        // comprar={ComprarProduto}
                        // // comprar={() => navigation.navigate('Sacola')}
                        image= {require('../assets/images/CatCorpoEBanho.png')}
                        titulo= "Sabonete liquido"
                        descricao= "Essencial para o seu dia-a-dia"
                        precoAnterior='R$ 25,00'
                        precoAtual='R$ 18,00'                        
                        comprar={() => navigation.navigate('Sacola')}
                    />

                    <Card
                        image={require('../assets/images/CatPerfume.png')}
                        titulo= "Perfume unissex"
                        descricao="Fragrância para todos os estilos"
                        precoAnterior='R$ 150,00'
                        precoAtual='R$ 120,00'                        
                        comprar={() => navigation.navigate('Sacola')}
                    />

                    <Card
                        image= {require('../assets/images/CatMaquiagem.png')}
                        titulo= "Trio de sombras"
                        descricao="Arrase com cores deslumbrantes"
                        precoAnterior='R$ 99,00'
                        precoAtual='R$ 75,00'
                        comprar={() => navigation.navigate('Sacola')}
                    />

                    <Card
                        image= {require('../assets/images/CatSkinCare.png')}
                        titulo= "Rolinho de massagem"
                        descricao="SkinCare a qualquer hora do dia"
                        precoAnterior='R$ 35,00'
                        precoAtual='R$ 22,00'
                        comprar={() => navigation.navigate('Sacola')}
                    />

                    <Card
                        image= {require('../assets/images/CatCabelo.png')}
                        titulo= "Escova desfrizante"
                        descricao="Resistente, tem ions e tem outros"
                        precoAnterior='R$ 88,00'
                        precoAtual='R$ 78,00'
                        comprar={() => navigation.navigate('Sacola')}
                    />

                    <Card
                        image= {require('../assets/images/CatUnha.png')}
                        titulo=" Esmalte "
                        descricao="Te seduz: é durável. Vai e arrasa !"
                        precoAnterior='R$ 110,00'
                        precoAtual='R$ 7,50'
                        comprar={() => navigation.navigate('Sacola')}
                    />

                </View>



                <View>
                    {/* <Image source={require('C:/APP/PANTERA_ROSA/app_panteraRosa/assets/images/home01.png')} style={styles.image}/> */}
                    <Image source={require('../assets/images/home01.png')} style={styles.image} />
                    {/* <Image source={require('C:/APP/PANTERA_ROSA/app_panteraRosa/assets/images/home02.png')} style={styles.image} /> */}
                    <Image source={require('../assets/images/home02.png')} style={styles.image} />
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
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    scrollContainer: {
        paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape
    },   
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    sixCards: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: '45%',
        height: 45,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',

    }
});


export default Home;

