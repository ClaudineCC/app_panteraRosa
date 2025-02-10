import React from "react";
import { Text, TouchableOpacity, View, ScrollView, SafeAreaView, StatusBar, StyleSheet, Linking, } from "react-native";


// import styles from '@/assets/style/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

//componentes:
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardsAjuda from "@/components/CardsAjuda";




const Ajuda: React.FC = ({navigation}) => {

    //variaveis para canais de atendimento
    const abrirWhatsApp = () => {
        Linking.openURL('https://wa.me/5521911111111');
    };

    const abrirTelefone = () => {
        Linking.openURL('https://wa.me/55211111111');
    };

    const abrirSuporte = () => {
        Linking.openURL('https://wa.me/5521911111111');
    };




    return (

        <SafeAreaView style={styles.container} >
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer} >


                <Header
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />



                <View>
                    <Text>AJUDA </Text>
                </View>




                <View style={styles.cardsDeAjuda}>


                    <CardsAjuda
                        iconName="user"
                        descricao="CADASTRO"
                        cardsDiversos={() => navigation.navigate('Cadastro')} 
                    />                   

                    <CardsAjuda
                        iconName="shopping- bag"
                        descricao="OUTLET"
                        cardsDiversos={() => navigation.navigate('Outlet')} 
                    />

                    <CardsAjuda
                        iconName="truck"
                        descricao="ENTREGAS "
                        cardsDiversos={() => navigation.navigate('Entregas')} 
                    />

                    <CardsAjuda
                        iconName="exchange"
                        descricao="TROCAS, DEVOLUÇÕES E CANCELAMENTO"
                        cardsDiversos={() => navigation.navigate('Trocas')} 
                    />

                    <CardsAjuda
                        iconName="list-alt"
                        descricao="MEUS PEDIDOS"
                        cardsDiversos={() => navigation.navigate('Pedidos')} 
                    />

                    <CardsAjuda
                        iconName="dollar"
                        descricao="ESTORNO E REEMBOLSO"
                        cardsDiversos={() => navigation.navigate('Estorno')} 
                    />

                </View >





                <View style={styles.canaisGeral}>

                    <Text >Canais de Atendimento</Text>

                    <View style={styles.canais}>
                        <Icon name=" whatsapp " size={20} style={styles.icone} />
                        <Text style={styles.texto} onPress={abrirWhatsApp}>WhattSap (21) 91111-1111</Text>
                    </View>

                    <View style={styles.canais}>
                        <Icon name=" phone " size={20} style={styles.icone} />
                        <Text style={styles.texto} onPress={abrirTelefone}>Telefone (21) 1111-1111</Text>
                    </View>

                    <TouchableOpacity style={styles.atendVirtual} onPress={abrirSuporte}>
                        <Icon name=" comments " size={20} style={styles.icone} />
                        <Text style={styles.texto}>Atend. Virtual - Fale Agora </Text>
                    </TouchableOpacity>


                    <View style={styles.texto}>
                        <Text>Horário de Atendimento: Seg à Sex 8hs as 20h Sab 8h às 14h</Text>
                    </View>

                </View>



                {/*fechar scrollView aqui pois o rodape sera fixo */}
            </ScrollView>





            <Footer
                HomePress={() => navigation.navigate('Home')}
                CategoriaPress={() => navigation.navigate('Categoria')}
                AjudaPress={() => navigation.navigate('Ajuda')}
            />




        </SafeAreaView >


    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape            
    },
    cardsDeAjuda: {
        padding:10,
        margin:15,
        gap:5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    canaisGeral: {
        padding: 15,
        backgroundColor: 'pink',
        borderRadius: 10,
        marginVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    canais: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'pink',
        marginBottom: 10,
    },
    icone: {
        color: '#fff',
        marginRight: 10,
    },
    atendVirtual: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 10,
    },
    texto: {
        fontSize: 16,
        color: '#fff',
        marginTop: 5,
    },
});


export default Ajuda;