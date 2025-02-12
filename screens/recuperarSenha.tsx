import React, { useState, } from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet, Image, SafeAreaView, ScrollView, StatusBar, Alert, } from "react-native";
import axios from "axios";


//componentes:
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// recebe as entidades da tabela tbPessoa - banco: db_panteraRosa
const RecuperarSenha: React.FC = ({navigation}) => {
    const [db_panteraRosa, setdb_panteraRosa] =useState([]);  // mesma nome do banco do arquivo server.js da pasta Api_panteraRosa
    const [email, setEmail] = useState('');
      

    const paginaRecuperacao = async ()=>{
    try{
       const response = await axios.get(`http://localhost:3000/db_panteraRosa/tbPessoa/${email}`);  // ou concatenar
        setdb_panteraRosa (response.data);        // atualiza a lista com resultados encontrados
        Alert.alert('Email valido')
    }catch (error){
        console.error ('Erro , email invalido' , error);
        Alert.alert('Erro, email invalido');
    }
};

   // logica para enviar instruções para email alternativo


    return (
        <SafeAreaView>
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

                    <TextInput style={styles.label} placeholder="Digite aqui um email alternativo para
                    recuperação de senha:"
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
}



const styles = StyleSheet.create({
    logoCompleto: {
        display: 'flex',
        alignItems: 'center',
        width: 80,
        height: 120,
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
        display:'flex',
    },
    label: {
        fontSize: 16,
        // alignSelf: 'flex-start',        
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'gray',
    },
    senha:{
        backgroundColor: 'gray',
        textAlign:'center',
        fontSize: 16,
        marginTop: 10,
        marginEnd: 10,
    },
    botao: {
        backgroundColor: 'gray',
        textAlign:'center',
        fontSize: 16,
    
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 10,
        marginEnd: 10,
    },
});


export default RecuperarSenha;