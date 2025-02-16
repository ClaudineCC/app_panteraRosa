import React, { useState, } from 'react';
import { View, StyleSheet, TextInput, Alert, TouchableOpacity, ActivityIndicator, FlatList, } from "react-native";
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome';


interface SearchBarProps {
    placeholder: string;
    onChange: (results: any[]) => void;   //função de callback
}


const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChange }) => {
    const [titulo, setTitulo] = useState('');
    const [loading, setLoading] = useState(false);  // ou comeca com true
    const [error, setError] = useState('');

    const procurarProduto = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://localhost:3000/tbProduto/titulo/${titulo}`);
            onChange(response.data);
            Alert.alert('Produtos encontrados!');
        } catch (error) {
            console.error('Erro ao buscar o produto :', error);
            Alert.alert('Produto não encontrado com esse nome em nosso banco de dados. Tente outro.');
        } finally {
            setLoading(false);
        }
    };
 

    return (

        <View style={styles.areaContainer}>

            <TextInput style={styles.input}
                placeholder={placeholder}
                value={titulo}
                onChangeText={setTitulo}
                keyboardType="twitter"
            />
            <TouchableOpacity
                onPress={procurarProduto} style={styles.botao} >
                <Icon name='search' size={20} color='#000' style={styles.icone} />
            </TouchableOpacity>

            {/*loading nativo ou criar com,ponente loading e invocar nas screans */}
            {loading && <ActivityIndicator size="large" color="#0000ff" />}

            {error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : null}

        </View>
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
        borderColor: "gray",
        padding: 10,
        borderWidth: 1,
        //    width: 320,


    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    icone: {
        marginRight: 10,
    },
    errorText: {
        color: '#f00',
        fontSize: 16,
        marginTop: 20,
    },
});

export default SearchBar;