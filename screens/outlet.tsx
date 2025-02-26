import React from "react";
import { Text, View, SafeAreaView, ScrollView, StatusBar, Image, StyleSheet, } from "react-native";



import Header from "../components/Header";
import Card from '@/components/Card';
import Footer from "../components/Footer";
// import StarRating from "@/components/StarRating";





import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Sacola: undefined;
    Login: undefined;
    Categoria: undefined;
    Ajuda: undefined;
};

type OutletScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: OutletScreenNavigationProp;
};

const Outlet: React.FC<Props> = ({ navigation }) => {
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer} >


            <Header
                    HomePress={() => navigation.navigate('Home')}
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />


                <Text style={styles.texto}>OUTLET : Produtos para usar já ! </Text>


                <View style={styles.twoCards}>

                    <Card
                        image='./assets/images/produto01Outlet.png'
                        descricao="descrição do produto"
                        precoAnterior='R$ 150,00'
                        precoAtual='R4 75,00'
                        comprar={() => alert('Produto Adicionado !')} idProduto={0} titulo={""}                    />

                    <Card
                        image='./assets/images/produto02Outlet.png'
                        descricao="descrição do produto"
                        precoAnterior='R$ 150,00'
                        precoAtual='R4 75,00'
                        comprar={() => alert('Produto Adicionado !')} idProduto={0} titulo={""}                    />
                </View>


                <View style={styles.bannerfinal}>
                    <Image source={require('../assets/images/img02.png')} style={styles.image} />
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
    },
    twoCards: {
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


export default Outlet;