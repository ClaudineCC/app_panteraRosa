import React, { useState, } from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet, Image, SafeAreaView, ScrollView, StatusBar, Alert, } from "react-native";
import axios from "axios";


//componentes:
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// recebe as entidades da tabela tbPessoa - banco: db_panteraRosa
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<any>;
}

const RecuperarSenha: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');


    const paginaRecuperacao = async () => {
        if (!email) {
            Alert.alert('Erro', 'Digite um email válido.');
            return;
        }

        // logica para enviar instruções para email alternativo
        try {
            const response = await axios.get(`http://localhost:3000/db_panteraRosa/tbPessoa/${email}`);  // ou concatenar
            if (response.data.length === 0) {
                Alert.alert('Erro', 'Email inválido.');
                return;
            }
            // Enviar email de recuperação
            await axios.post('http://localhost:3000/send-recovery-email', { email });
            Alert.alert('Sucesso', 'Instruções de recuperação de senha enviadas para o email informado.');
        } catch (error) {
            console.error('Erro ao enviar email de recuperação', error);
            Alert.alert('Erro', 'Erro ao enviar email de recuperação.');
        }
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

                <Image source={require('../assets/images/logoCompleto.png')} style={styles.logoCompleto} />

                <View style={styles.containerLogin}>
                    <Text style={styles.texto}>RECUPERAR SENHA</Text>

                    <TextInput style={styles.label} placeholder="Digite aqui um email alternativo"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TouchableOpacity style={styles.senha} onPress={paginaRecuperacao}>
                        <Text style={styles.texto}>Enviar</Text>
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
    },
    logoCompleto: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 95,
    },
    scrollContainer: {
        paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape            
    },
    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'pink',
        borderRadius: 10,
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        display: 'flex',
    },
    label: {
        fontSize: 16,
        // alignSelf: 'flex-start',        
        width: '100%',
        padding: 20,
        margin: 20,
        marginBottom: 20,
        borderRadius: 15,
        borderColor: 'black',
        backgroundColor: 'gray',
    },
    senha: {
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 15,
        marginEnd: 15,
        margin: 15,
        padding: 15,
        borderRadius: 15,
    },
    botao: {
        backgroundColor: 'gray',
        textAlign: 'center',
        fontSize: 16,
        padding: 20,
        borderRadius: 15,
        margin: 15,
    },
});


export default RecuperarSenha;