import { Text, View, Image, StatusBar, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '@/components/Header';
import Footer from '@/components/Footer';


import { NavigationProp } from '@react-navigation/native';

interface PoliticaProps {
    navigation: NavigationProp<any>;
}

const Politica: React.FC<PoliticaProps> = ({ navigation }) => {
    return (


        <SafeAreaView style={styles.containerPolitica}>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            <ScrollView contentContainerStyle={styles.scrollContainer} >


                <Header
                    HomePress={() => navigation.navigate('Home')}
                    SacolaPress={() => navigation.navigate('Sacola')}
                    LoginPress={() => navigation.navigate('Login')}
                />

                <Text style={styles.titulo}>Politica de Privacidade</Text>

                <View style={styles.bloco}>
                    <Text style={styles.titulo}>1. Introdução</Text>
                    <Text style={styles.texto}> Bem-vindo à nossa Política de Privacidade. Esta política descreve como nós coletamos,
                        usamos e protegemos suas informações pessoais ao utilizar nosso site e serviços. </Text>
                </View>

                <View style={styles.bloco}>
                    <Text style={styles.titulo}>2. Informações que Coletamos</Text>
                    <Text style={styles.texto}> Nós coletamos várias informações quando você visita nosso site, incluindo:
                        - Informações de contato, como nome completo, e-mail , cpf, data de nascimento.
                        - Informações de navegação, como endereço IP, tipo de navegador e páginas acessadas. </Text>
                </View>

                <View style={styles.bloco}>
                    <Text style={styles.titulo}>3. Como Usamos Suas Informações</Text>
                    <Text style={styles.texto}> Usamos suas informações para diversos propósitos, incluindo:
                        - Fornecimento de serviços e suporte ao cliente.
                        - Envio de atualizações e promoções.
                        - Melhorar a experiência do usuário em nosso site. </Text>
                </View>

                <View style={styles.bloco}>
                    <Text style={styles.titulo}>4. Compartilhamento de Informações</Text>
                    <Text style={styles.texto}> Nós não compartilhamos suas informações pessoais com terceiros,
                        exceto conforme necessário para fornecer nossos serviços ou conforme exigido por lei. </Text>
                </View>

                <View style={styles.bloco}>
                    <Text style={styles.titulo}>5. Segurança das Informações</Text>
                    <Text style={styles.texto}> Implementamos medidas de segurança para proteger suas informações pessoais
                        contra acesso não autorizado e divulgação. </Text>
                </View>

                <View style={styles.bloco}>
                    <Text style={styles.titulo}>6. Alterações a Esta Política</Text>
                    <Text style={styles.texto}> Podemos atualizar esta Política de Privacidade periodicamente.
                        Recomendamos que você revise esta política regularmente para se manter informado sobre nossas práticas. </Text>
                </View>

                <View style={styles.bloco}>
                    <Text style={styles.titulo}>7. Contato</Text>
                    <Text style={styles.texto}> Se você tiver dúvidas ou preocupações sobre nossa Política de Privacidade,
                        entre em contato conosco através do e-mail: contato@panteraRosa.com. </Text>
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
}


const styles = StyleSheet.create({
    containerPolitica: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    scrollContainer: {
        paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape            
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'pink',
    },
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#333',
    },
    bloco: {
        padding: 20,
        borderRadius: 5,
        // backgroundColor: '',
    
    },

});

export default Politica;


