import React, {useState } from "react";
import { TextInput, Text, TouchableOpacity, View, ScrollView, SafeAreaView, StatusBar, StyleSheet, Linking, } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//componentes:
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const Cadastro: React.FC = ({navigation}) => {

    const [db_panteraRosa, setdb_panteraRosa] =useState([]); 
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');



    const senhasIguais = () => {
        if (senha !== confirmaSenha) {
            alert('As senhas não conferem !');
            return;
        } else {
            alert('Cadastro enviado com sucesso!');
        }
    }


    return (



        <SafeAreaView>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer} >


            <Header
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />


                <View style={styles.containerCadastro}>


                    <Text style={styles.texto}>CADASTRO</Text>

                    <TextInput style={styles.label} placeholder="Nome Completo: "
                        value={nomeCompleto}
                        onChangeText={setNomeCompleto}
                    />


                    <TextInput style={styles.label} placeholder="CPF :"
                        value={cpf}
                        onChangeText={setCpf}
                        keyboardType="numeric"
                    />


                    <TextInput style={styles.label} placeholder=" DD:MM:AAAA"
                        value={dataNascimento}
                        onChangeText={setDataNascimento}
                    />


                    <TextInput style={styles.label} placeholder=" Telefone:"
                        value={telefone}
                        onChangeText={setTelefone}
                        keyboardType="phone-pad"
                    />


                    <TextInput style={styles.label} placeholder=" Senha:"
                        value={senha}
                        onChangeText={setSenha}
                        //ocultar os caracteres digitados.
                        secureTextEntry
                    />

                    <TextInput style={styles.label} placeholder=" Confirmar Senha:"
                        value={confirmaSenha}
                        onChangeText={setConfirmaSenha}
                        //ocultar os caracteres digitados.
                        secureTextEntry
                    />


                    <TouchableOpacity style={styles.botao} onPress={() => alert('Enviando')} >
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
    containerCadastro: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'pink',
        borderRadius: 10,
    },
    scrollContainer: {
        paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape            
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        display: 'flex',
    },
    label: {
        fontSize: 16,
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    botao: {
        backgroundColor: 'gray',
        textAlign:'center',
        fontSize: 16,      

        borderRadius: 20,
        marginTop: 10,
        marginEnd: 10,
    },
});


export default Cadastro;
