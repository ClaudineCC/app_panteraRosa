import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import screens
import Splash from "@/screens/splash";
import Home from "@/screens/home";
import Login from "@/screens/login";
import Sacola from "@/screens/sacola";
import SacolaCheckout from "@/screens/sacolaCheckout";

import RecuperarSenha from "@/screens/recuperarSenha";

import Lancamento from "@/screens/lancamento";
import Cupom from "@/screens/cupom";
import Outlet from "@/screens/outlet";

import Categoria from "@/screens/categoria";
import Cabelos from "@/screens/cabelos";
import Maquiagem from "@/screens/maquiagem";
import Perfume from "@/screens/perfume";
import SkinCare from "@/screens/skinCare";
import Unha from "@/screens/unha";
import CorpoEBanho from "@/screens/corpoEBanho";

import Ajuda from "@/screens/ajuda";
import Cadastro from "@/screens/cadastro";
import Politica from "@/screens/politica";
import PaginaErro from "@/screens/paginaErro";

//paginas de dashboard do usuario
import Entregas from "@/screens/entregas";
import Trocas from "@/screens/trocas";
import Pedidos from "@/screens/pedidos";
import Estorno from "@/screens/estorno";

//criacao de navegador de pilhas
const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
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
  );
};

export default App;
