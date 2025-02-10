import React from "react";
import { Text, TouchableOpacity, View, SafeAreaView, StatusBar, ScrollView, StyleSheet, Image, } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//componentes:
import Header from "../components/Header";
import Cupons from "../components/Cupons";
import Footer from "../components/Footer";



// class Cupom extends Component {
//     render() {
//         return (


const Cupom: React.FC = ({navigation}) => {

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer} >


                <Header
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />


                <View>
                    <Text>CUPOM : Aqui tem!</Text>
                </View>


                <Cupons
                    descontoTexto="Comprar acima de R$ 199,00 cupom 10%"
                    pegaDesconto={() => alert('cupom copiado')}
                />

                <Cupons
                    descontoTexto="Primeira compra cupom 18%"
                    pegaDesconto={() => alert('Cupom copiado')}
                />

                <Cupons
                    descontoTexto="Comprar acima de R$ 299,00 cupom 15%"
                    pegaDesconto={() => alert('Cupom copiado')}
                />

                <Cupons
                    descontoTexto="Comprar acima de R$ 499,00 cupom 20%"
                    pegaDesconto={() => alert('Cupom copiado')}
                />


                <View style={styles.patrocinio}>
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

export default Cupom;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape            
    },
    patrocinio: {
        backgroundColor: 'pink',
    },
    image: {
        flex: 1,
        width: '50%',
        height: 50,
        borderRadius: 10,

    }

});