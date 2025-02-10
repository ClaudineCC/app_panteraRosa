import React, { Component } from 'react';
import { Text, View, Image, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet, } from "react-native";
// import styles from '@/assets/style/styles';
import ReactDOM from 'react';
import { NavigationProp } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/FontAwesome';




interface CardsAjudaProps {
    iconName: string;
    descricao: string;
    cardsDiversos: () => void;
}

const CardsAjuda: React.FC<CardsAjudaProps> = ({ iconName, descricao, cardsDiversos }) => {
    return (

        <TouchableOpacity style={styles.figura} onPress={cardsDiversos}>
            <Icon name={iconName} size={24} style={styles.icone} />
            <Text style={styles.descricao}>{descricao}</Text>      
        </TouchableOpacity>


    );
};

const styles = StyleSheet.create({
    figura: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'pink',
        borderRadius: 25,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        // marginVertical: 10,
    },
    icone: {
        color: 'black',
        marginRight: 10,
    },
    descricao: {    
        // marginVertical: 10,      
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default CardsAjuda;

