import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import drawer
// import DrawerNavigator from '../navigation/DrawerNavigator';

//import screens
import Splash from '@/screens/splash';
import Home from '@/screens/home';
import Login from '@/screens/login';
import Sacola from '@/screens/sacola';
import SacolaCheckout from '@/screens/sacolaCheckout';

import RecuperarSenha from '@/screens/recuperarSenha';

import Lancamento from '@/screens/lancamento';
import Cupom from '@/screens/cupom';
import Outlet from '@/screens/outlet';

import Categoria from '@/screens/categoria';
import Cabelos from '@/screens/cabelos';
import Maquiagem from '@/screens/maquiagem';
import Perfume from '@/screens/perfume';
import SkinCare from '@/screens/skinCare';
import Unha from '@/screens/unha';
import CorpoEBanho from '@/screens/corpoEBanho';

import Ajuda from '@/screens/ajuda';
import Cadastro from '@/screens/cadastro';
import Politica from '@/screens/politica';
import PaginaErro from '@/screens/paginaErro';

//paginas de dashboard do usuario
import Entregas from '@/screens/entregas';
import Trocas from '@/screens/trocas';
import Pedidos from '@/screens/pedidos';
import Estorno from '@/screens/estorno';



//criacao de navegador de pilhas
const Stack = createStackNavigator();



// const App = () => {   // definicao padrao especialemnte se nao esta usando Typescript
const App: React.FC = () => {   // definicao explicita do componente FC em Typescript
  return (
//     <NavigationContainer>
//       <DrawerNavigator />
//       <MainStackNavigator />
//     </NavigationContainer>
//   );
// };



//   //configuração do Stack Navigator
// function MainStackNavigator() {
//   return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Lancamento" component={Lancamento} />
      <Stack.Screen name="Cupom" component={Cupom} />
      <Stack.Screen name="Outlet" component={Outlet} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />

      <Stack.Screen name="Sacola" component={Sacola} />
      <Stack.Screen name="SacolaCheckout" component={SacolaCheckout} />
      <Stack.Screen name="PaginaErro" component={PaginaErro} />

      <Stack.Screen name="Categoria" component={Categoria} />
      <Stack.Screen name="Ajuda" component={Ajuda} />
      <Stack.Screen name="Politica" component={Politica} />

      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Entregas" component={Entregas} />
      <Stack.Screen name="Trocas" component={Trocas} />
      <Stack.Screen name="Pedidos" component={Pedidos} />
      <Stack.Screen name="Estorno" component={Estorno} />

      <Stack.Screen name="Cabelos" component={Cabelos} />
      <Stack.Screen name="Maquiagem" component={Maquiagem} />
      <Stack.Screen name="Perfume" component={Perfume} />
      <Stack.Screen name="SkinCare" component={SkinCare} />
      <Stack.Screen name="Unha" component={Unha} />
      <Stack.Screen name="CorpoEBanho" component={CorpoEBanho} />

    </Stack.Navigator>
    // </NavigationContainer>

  );
};

// function DrawerNavigator(){    // menu de gavetas
//   return(
//       //  <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//           {/* Navegação principal com o Stack Navigator */}
//           <Drawer.Screen name="Home" component={MainStackNavigator} />
//           <Drawer.Screen name="Cabelos" component={Cabelos} />
//           <Drawer.Screen name="Maquiagem" component={Maquiagem} />
//           <Drawer.Screen name="Perfume" component={Perfume} />
//           <Drawer.Screen name="SkinCare" component={SkinCare} />
//           <Drawer.Screen name="Unha" component={Unha} />
//           <Drawer.Screen name="CorpoEBanho" component={CorpoEBanho} />
//           <Drawer.Screen name="Politica" component={Politica} />         
//       </Drawer.Navigator>
//       //  </NavigationContainer>
//   );
// }


export default App;
