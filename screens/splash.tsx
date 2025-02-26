import React, { useEffect } from 'react';// <= Importando a biblioteca React e o hook useEffect, que permite executar efeitos colaterais em componentes funcionais;
import { Text, View, Image, StyleSheet } from 'react-native';// <= Importa os componentes do React Native que são usados para construir a interface do usuário;
import { NavigationProp } from '@react-navigation/native';// <= usado para tipar a prop de navegação;

// Define uma interface
interface Props {
  navigation: NavigationProp<any>;
}// Note: Esta interface define as propriedades que o componente Splash receberá. Neste caso, estamos especificando que a prop navigation deve ser do tipo NavigationProp, que permite a navegação entre telas;

// Criando o componente principal que é um componente funcional:
const Splash: React.FC<Props> = ({ navigation }) => {// <= A prop ({navigation}) é desestruturada diretamente dos parâmetros.
    
    // Inicia o hook useEffect < usado para configurar um temporizador >;
    useEffect(() => {
    const tempo = setTimeout(() => { // const tempo = setTimeout <= Define um temporizador;
      navigation.navigate('Home');// <= Após 3 segundos, a função navigate é chamada para redirecionar o usuário para a tela "Home";
    }, 3000);// 3000 <= define o temporizado para 3000 milisegundos

    return () => clearTimeout(tempo);// <= Limpa o temporizador para evitar que ele continue a ser executado;
  }, [navigation]);// [navigation] <= É um Array de dependências : indica que o efeito deve ser re-executado se a prop navigation mudar;
  // return(); <= renderiza na tela;
  return (
    <View style={styles.containerSplash}>
      <Image
        source={require('../assets/images/logoCompleto.png')}
        style={styles.logoCompleto}
      />
    </View>
  );
};

// Início da definição dos estilos dos componentes;
const styles = StyleSheet.create({
  containerSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoCompleto: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 15,
  },
});

export default Splash;