import React, { useState, } from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet, Image, SafeAreaView, ScrollView, StatusBar, Alert, } from "react-native";
import axios from "axios";


//componentes:
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface fazerLoginProps{
    placeholder:string;
    onChangeText: (text:string) =>void;
}


const Login: React.FC = ({navigation}) => {
    // const [db_panteraRosa, setdb_panteraRosa] =useState([]);  // mesma nome do banco do arquivo server.js da pasta Api_panteraRosa
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
   

const fazerLogin = async ()=>{
    try{
       const response = await axios.get(`http://localhost:3000/db_panteraRosa/login/${email}`);  // ou concatenar
       console.log('Response:', response.data);
       onChange(response.data);
       // setdb_panteraRosa (response.data);        // atualiza a lista com resultados encontrados
    }catch (error){
        console.error ('Erro ao fazer login' , error);
        Alert.alert('Erro', 'Erro ao fazer login.');
    }
};


    return (
        <SafeAreaView>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer} >


            <Header
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />



                {/* {/* <Image source={require('C:/APP/PANTERA_ROSA/app_panteraRosa/assets/images/logoCompleto.png')} style={styles.logoCompleto} /> */}
                <Image source={require('../assets/images/logoCompleto.png')} style={styles.logoCompleto} />  */}



                <View style={styles.containerLogin}>
                    <Text style={styles.texto}>LOGIN</Text>

                    <TextInput style={styles.label} placeholder="e-mail:"
                    value={email}
                    onChangeText={setEmail}
                    />

                    <TextInput style={styles.label} placeholder="senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                    />

                    <TouchableOpacity style={styles.senha} onPress={paginaRecuperacao}>
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


export default Login;