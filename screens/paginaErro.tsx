import React, { useEffect, } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Se você estiver usando o React Navigation 
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import Home from "./home";


const PaginaErro: React.FC = () => {
    const repetir = () => {
        alert('Tentando novamente....');
    }


    return (

        <View style={styles.containerPaginaErro}>

            <Icon name="exclamation-triangle" size={50} color="#d9534f" />

            <Text style={styles.texto}>Ops, parece que algo deu errado</Text>

            <TouchableOpacity style={styles.repetir} onPress={(repetir)}>
                <Text style={styles.texto}>Tentar Novamente</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    containerPaginaErro: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'pink',
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#d9534f',
        textAlign: 'center',
    },
    repetir: {
        backgroundColor: '#28a745', 
        paddingVertical: 10, 
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
});

export default PaginaErro;