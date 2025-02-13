import React, { useEffect, } from "react";
import { Text, View, Image, StyleSheet } from 'react-native';

// Se você estiver usando o React Navigation 
import { NavigationContainer } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';




const Splash: React.FC = ({navigation}) => {

    // const navigation = useNavigation();

    useEffect(() => {
        const tempo = setTimeout(() => {
            navigation.navigate('Home');
        }, 3000);

        return () => clearTimeout(tempo);
    }, [navigation]);

    return (
        <View style={styles.containerSplash}>
            {/* <Image source={require('C:/APP/PANTERA_ROSA/app_panteraRosa/assets/images/logoCompleto.png')} style={styles.logoCompleto} /> */}
            <Image source={require('../assets/images/logoCompleto.png')} style={styles.logoCompleto} /> 
        </View>
    );
};


const styles = StyleSheet.create({
    containerSplash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    logoCompleto: {
        width: 310,
        height: 210,
        borderRadius:15,
    },
});

export default Splash;