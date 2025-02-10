import React, { useState, } from 'react';
import { View, StyleSheet, TextInput, Alert, TouchableOpacity, } from "react-native";
import axios from "axios";

// import styles from '@/assets/style/styles';


import Icon from 'react-native-vector-icons/FontAwesome';



interface SearchBarProps {
    placeholder: string;
    onChange: (text: string) => void;
    handSearch: (text: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChange, handSearch }) => {
    // const [db_panteraRosa, setdb_panteraRosa] =useState([]);  // mesma nome do banco do arquivo server.js da pasta Api_panteraRosa
    const [titulo, setTitulo] = useState('');


    const procurarProduto = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/db_panteraRosa/titulo/${titulo}`);  // ou concatenar
            console.log('Response:', response.data);
            onChange(response.data);
        } catch (error) {
            console.error('Erro ao buscar o produto :', error);
            Alert.alert('Erro', 'Produto não encontrado com esse nome em nosso banco de dados. Tente outro.');
        }
    };

    return (
        <>

            <View style={styles.areaContainer}>
                <TextInput style={styles.input}
                    placeholder={placeholder}
                    value={titulo}
                    onChangeText={text => setTitulo(text)}
                />               
                <TouchableOpacity onPress={handSearch} style={styles.botao} >
                <Icon name='search' size={20} color='#000' style={styles.icone} />                   
                </TouchableOpacity>
            </View>
        </>

    );
};



const styles = StyleSheet.create({
    areaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,

    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    icone: {
        marginRight: 10,

    },
});



export default SearchBar;