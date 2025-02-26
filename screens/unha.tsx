import React, { useState, } from 'react';
import { FlatList, Text, View, Image, StatusBar, ScrollView, SafeAreaView, StyleSheet, } from "react-native";


//componentes:
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Card';
import Footer from '@/components/Footer';


import { NavigationProp } from '@react-navigation/native';

interface UnhaProps {
    navigation: NavigationProp<any>;
}

const Unha: React.FC<UnhaProps> = ({ navigation }) => {

    // no searchBar
    interface Produto {
        id: number;
        titulo: string;
    }

    const [produto, setProduto] = useState<Produto[]>([]);
    const handleSearchChange = (titulo: string) => {
        // Update this function to handle the search logic and update the state accordingly
        // For now, it just logs the search term
        console.log(titulo);
    };


    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer} >


                <Header
                    HomePress={() => navigation.navigate('Home')}
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />

                <View style={styles.container}>
                    <SearchBar
                        placeholder="Procure por um produto..."
                        onChange={handleSearchChange} // verificar como alterar no components!!!
                    />
                    <FlatList
                        data={produto}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text>{item.titulo}</Text>
                            </View>
                        )}
                    />
                </View>

                <Text> Você esta na categoria : UNHAS </Text>



                <View>
                    <Card
                        image='./assets/images/CatCorpoEBanho.png'
                        titulo=" Sabonete"
                        descricao="descrição do produto"
                        precoAnterior='R$ 150,00'
                        precoAtual='R4 75,00'
                        comprar={() => navigation.navigate('Sacola')} idProduto={0}                    />
                </View>


                <View style={styles.bannerfinal}>
                    <Image source={require('../assets/images/img05.png')} style={styles.image} />
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
    image: {
        flex: 1,
        width: '50%',
        height: 70,
        borderRadius: 10,
    },
    bannerfinal: {
        display: 'flex',
        alignItems:'center',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});


export default Unha;