import React, { Component } from 'react';
import {Text, View, Image, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet, } from "react-native";
// import styles from '@/assets/style/styles';
import ReactDOM from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';




//criando uma interface
interface ButtonsHomeProps {
    text: string;
    iconName: string;
    onPress: () => void;    
}



const ButtonsHome: React.FC<ButtonsHomeProps> = ({ text, iconName, onPress }) => {
    return (

        <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Icon name={iconName} size={20} style={styles.icone} />
            <Text style={styles.texto}>{text}</Text>
            
        </TouchableOpacity>
    );
};




const styles = StyleSheet.create({
    botao: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 20,
        marginVertical: 5,
    },
    texto: {
        color:'#fff',
        fontSize: 16,
    },
    icone: {
        color:'#fff',
        marginRight: 5,
    },
});

export default ButtonsHome;