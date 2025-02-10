import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Cabelos from '@/screens/cabelos';
import Maquiagem from '@/screens/maquiagem';
import Perfume from '@/screens/perfume';
import SkinCare from '@/screens/skinCare';
import Unha from '@/screens/unha';
import CorpoEBanho from '@/screens/corpoEBanho';
import Politica from '@/screens/politica';
import Home from '@/screens/home';


const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {    // menu de gavetas
    return (
        //  <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            {/* Navegação principal com o Stack Navigator */}
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Cabelos" component={Cabelos} />
            <Drawer.Screen name="Maquiagem" component={Maquiagem} />
            <Drawer.Screen name="Perfume" component={Perfume} />
            <Drawer.Screen name="SkinCare" component={SkinCare} />
            <Drawer.Screen name="Unha" component={Unha} />
            <Drawer.Screen name="CorpoEBanho" component={CorpoEBanho} />
            <Drawer.Screen name="Politica" component={Politica} />
        </Drawer.Navigator>
        //       //  </NavigationContainer>
    );
};


export default DrawerNavigator;