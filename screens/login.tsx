import React, { useState, } from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet, Image, SafeAreaView, ScrollView, StatusBar, Alert, } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios";


//componentes:
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface fazerLoginProps {
    placeholder: string;
    onChange: (text: string) => void;
}


const Login: React.FC = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);


    // validar email
    const validarEmail = (email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    };

    //fazerlogin
    const fazerLogin = async () => {
        if (!email || !senha) {
            Alert.alert('Preenche todos os campos');
            return;
        }

        if (!validarEmail(email)) {
            Alert.alert('Erro', 'Email inválido.');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3000/db_panteraRosa/tbPessoa/email${email}`);  // OU  db_panteraRosa/login/email/${email}
            console.log('Response:', response.data);
            Alert.alert('Sucesso', 'Login realizado com sucesso!');
            // onChange(response.data);
            // setdb_panteraRosa (response.data);        // atualiza a lista com resultados encontrados
        } catch (error) {
            console.error('Erro ao fazer login', error);
            Alert.alert('Erro', 'Erro ao fazer login.');
        }
    };


    const paginaRecuperacao = () => {
        Alert.alert('Recuperação de Senha', 'Função de recuperação de senha não implementada.');
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

                {/* {/* <Image source={require('C:/APP/PANTERA_ROSA/app_panteraRosa/assets/images/logoCompleto.png')} style={styles.logoCompleto} /> */}
                <Image source={require('../assets/images/logoCompleto.png')} style={styles.logoCompleto} />



                <View style={styles.containerLogin}>
                    <Text style={styles.texto}>LOGIN</Text>

                    <TextInput style={styles.label} placeholder="E-mail:"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <View style={styles.senhaContainer}>
                        <TextInput
                            style={styles.labelSenha}
                            placeholder="Senha:"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={!senhaVisivel}
                        />
                        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
                            <Icon name={senhaVisivel ? "eye" : "eye-off"} size={24} color="black" />
                        </TouchableOpacity>
                    </View>



                    <TouchableOpacity style={styles.senha}
                        onPress={() => navigation.navigate('RecuperarSenha')} >
                        <Text>Esqueceu sua senha?</Text>

                    </TouchableOpacity>



                    <TouchableOpacity style={styles.botao} onPress={fazerLogin} >
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
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoCompleto: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
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
        marginBottom: 20,
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
        padding: 15,
        borderRadius: 15,
        margin: 15,
    },
    senhaContainer: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 20,
        padding: 6,
        width: '100%',
        margin: 20,
    },
    labelSenha: {
        fontSize: 16,
        flex: 1,
        padding: 15,
    },
});

export default Login;