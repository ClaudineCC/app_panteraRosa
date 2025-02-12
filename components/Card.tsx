import { Text, View, Image, SafeAreaView, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import styles from '@/assets/style/styles';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationProp } from "@react-navigation/native";

import StarRating from './StarRating';



//criando uma interface - recebe as entidades da tabela tbProduto- banco: db_panteraRosa
interface CardProps {
    // navigation: NavigationProp<any>;   // vazio
    idProduto: string,  //mudar para inteiro
    image: any;  // any permite require   ou tipo string?
    titulo: string;
    descricao: string;
    precoAnterior: string;
    precoAtual: string;
    comprar: () => void;
}


// MODELO CARD

const Card: React.FC<CardProps> = ({ image, titulo, descricao, precoAnterior, precoAtual, comprar }) => {
    const handleSearchChange = (rating: number) => {
        //  alert('Nova votação :' , rating);
    };   

    return (
        <>
            <View style={styles.card}>

                <Image source={image} style={styles.image} />
                <Text style={styles.descricao}>{titulo}:</Text>
                <Text style={styles.descricao}>{descricao}:</Text>

                <StarRating maximoEstrelas={5} initialRating={3} onRatingChange={handleSearchChange} />
                {/* <Icon name='star' size={24} />  */}

                <Text style={styles.precoAnterior}>{precoAnterior}</Text>
                <Text style={styles.precoAtual}>{precoAtual}</Text>

                <TouchableOpacity style={styles.botao} onPress={comprar}>
                    <Text style={styles.botaoTexto}> Adicionar</Text>
                </TouchableOpacity>

            </View>
        </>
    );
};



const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'pink',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.8)',
    },
    image: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
        // width: 65,
        height: 160,
        borderRadius: 10,
    },
    descricao: {
        fontSize: 16,
        marginVertical: 10,
    },
    precoAnterior: {
        textDecorationLine: 'line-through',
        fontSize: 14,
        color: 'gray',
    },
    precoAtual: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#d32f2f',
    },
    botao: {
        backgroundColor: 'pink',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
})

export default Card;