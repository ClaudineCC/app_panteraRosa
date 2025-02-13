import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


//componentes:
import Header from '@/components/Header';
import Footer from '@/components/Footer';


//  recebe as entidades da tabela tbProduto- banco: db_panteraRosa
interface Produto {
    idProduto: string;
    image: any;  // any permite require
    titulo: string;
    descricao: string;
    precoAtual: number;
    qtdeProduto: number;  // ou float NAO POSSUI ESTA ENTIDADE NA TABELA     
}

const Sacola: React.FC = ({ navigation }) => {

    // View Sacola

    const [db_panteraRosa, setdb_panteraRosa] = useState([]);  // mesma nome do banco do arquivo server.js da pasta Api_panteraRosa
    const [tbProduto, settbProduto] = useState<Produto[]>([
        {
            idProduto: '1',
            image: Image,
            titulo: 'produto 1',
            descricao: 'descricao do produto',
            precoAtual: 10,
            qtdeProduto: 1,
        },
    ]);



    const aumentarProduto = (idProduto: string) => {
        settbProduto(tbProduto.map(produto =>
            produto.idProduto === idProduto ? { ...produto, qtdeProduto: produto.qtdeProduto + 1 } : produto
        ));
    };

    const removerProduto = (idProduto: string) => {
        settbProduto(tbProduto.filter(produto => produto.idProduto !== idProduto));
    };

    const checkoutProduto = () => {
        navigation.navigate('Checkout'); // navega para tela de checkout
    }


    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer} >


                <Header
                    HomePress={() => navigation.navigate('Home')}
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />


                <View style={styles.containerSacola}>
                    {/*flatlist para renderizar uma lista de produtos na sacola */}
                    <FlatList
                        data={tbProduto}
                        keyExtractor={item => item.idProduto}
                        renderItem={({ item }) => (

                            <View style={styles.detalhesProduto}>
                                <Text>{item.titulo}</Text>
                                <Text>{item.descricao}</Text>
                                <Text>{item.precoAtual}</Text>

                                <View style={styles.quantidadeProduto}>
                                    <Text>Quantidade: {item.idProduto}</Text>

                                    <TouchableOpacity onPress={() => aumentarProduto(item.idProduto)} style={styles.aumentar}>
                                        <Icon name="plus-circle" size={20} />
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity onPress={() => removerProduto(item.idProduto)} style={styles.remover}>
                                    <Icon style={styles.iconTrash} name="trash" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>



                <View>
                    {/* recebe componente 'opçoesEntrega' */}
                    <Text>Opçôes de entrega</Text>
                </View>

                <View>
                    {/* recebe componente 'opçoesEntrega' */}
                    <Text>CEP :00000-000</Text>
                </View>



                <View style={styles.advertencia}>
                    <Icon name="exclamation-circle" size={24} color='#fff' style={styles.icone} />
                    <Text style={styles.mensagem}>Entrega normal (2 dias úteis) </Text>
                    {/* fazer logica de valor de frete x distancia  */}
                    <Text style={styles.mensagem}>R$7,90</Text>
                </View>


                <View style={styles.advertencia}>
                    <Icon name="exclamation-circle" size={24} color='#fff' style={styles.icone} />
                    <Text style={styles.mensagem}>Você poderá escolher outras formas de entrega na próxima etapa </Text>
                </View>



                {/*CSS estilizar !!!!! */}
                <View>
                    <View style={styles.cupomDesconto}>
                        <Text>Cupom de Desconto</Text>
                        <Icon name="exclamation-circle" size={24} color='black' style={styles.icone} />
                    </View>

                    <View style={styles.codigoCupom}>
                        <Icon name="tag" size={35} color="black" />
                        <Text>Informe o código</Text>
                    </View>
                </View>


                <View>
                    <TouchableOpacity style={styles.fazerLogin}
                        onPress={() => navigation.navigate('Login')} >
                        <Text> Fazer Login </Text>
                    </TouchableOpacity>
                </View>


                <View>
                    <Text style={styles.texto}>Escolha a forma de pagamento</Text>

                    <View style={styles.formasPag}>
                        <Icon name="credit-card" size={30} color="#000" />
                        <Icon name="money" size={30} color="#000" />
                        <Icon name="file-text-o" size={30} color="#000" />
                    </View>
                </View>


                <View>
                    <Text>logica para : Exibir resumo </Text>
                </View>


                <View>
                    <Text>logica para : valor total dos produtos</Text>
                    <Text>logica para : parcelamentos sem juros e até x vezes</Text>

                    <TouchableOpacity style={styles.botao} onPress={checkoutProduto}>
                        <Text style={styles.texto}>Finalizar compra</Text>
                    </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape            
    },
    containerSacola: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    detalhesProduto: {
        flex: 1,
    },
    quantidadeProduto: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    precoProduto: {
        fontSize: 18,
        padding: 10,
    },
    aumentar: {
        marginLeft: 10,
    },

    remover: {
        marginLeft: 10,
    },
    advertencia: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 5,
        marginVertical: 10,
    },
    icone: {
        marginRight: 10,
    },
    mensagem: {
        color: '#fff',
        fontSize: 16,
    },
    texto: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 5,
        fontSize: 16,
        color: '#000',
    },
    formasPag: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
    },
    botao: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 10,
        borderRadius:15,
    },
    fazerLogin: {
        backgroundColor: "gray",
        margin: 15,
        padding: 15,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 15,

    },
    iconTrash: {
        display: 'flex',
    },
    cupomDesconto: {
        display: 'flex',
        flexDirection: 'row',
        gap: 25,
        margin: 25,
    },
    codigoCupom:{
        display: 'flex',
        flexDirection: 'row',
        gap: 25,
        margin: 15,
        padding: 10,
        borderColor:'black',
        borderRadius: 15,
        backgroundColor: 'gray'

    },

});


export default Sacola;