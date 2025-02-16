import React, { Component } from 'react';
import { Text, View, Image, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet, } from "react-native";
// import styles from '@/assets/style/styles';
import ReactDOM from 'react';

import { NavigationProp } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/FontAwesome';



interface HeaderProps {
    HomePress?: () => void;
    SacolaPress?: () => void;
    LoginPress?: () => void;

}


const Header: React.FC<HeaderProps> = ({ HomePress, LoginPress, SacolaPress }) => {
    return (

        <View style={styles.header}>

            <TouchableOpacity onPress={HomePress} style={styles.botao} >
                <Image source={require('../assets/images/logoPantera.png')} style={styles.logoPantera} />
            </TouchableOpacity>

            <View style={styles.LoginSacola}>
                <TouchableOpacity onPress={SacolaPress} style={styles.botao} >
                    <Icon name='shopping-cart' size={24} style={styles.icone} />
                    <Text style={styles.texto}>Sacola</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={LoginPress} style={styles.botao} >
                    <Icon name='user' size={24} style={styles.icone} />
                    <Text style={styles.texto}>Login</Text>
                </TouchableOpacity >
            </View >

        </View >
    );
};



const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'pink',
    },
    logoPantera: {
        width: 60,
        height: 40,
        marginLeft: 5,
    },
    LoginSacola: {
        flexDirection: 'row',
        marginRight: 5,
    },
    botao: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    texto: {
        // fontFamily: 'Montserrat', // fonte importada
        color: 'black',
        marginRight: 5,
        marginTop: 5,
        fontSize: 14,
    },
    icone: {
        marginRight: 5,
        color: 'black',
    },

});


export default Header;













