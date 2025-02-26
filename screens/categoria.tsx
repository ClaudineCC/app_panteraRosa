import * as React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";



import { StackNavigationProp } from '@react-navigation/stack';

// Define RootStackParamList if not imported from elsewhere
type RootStackParamList = {
  Categoria: undefined;
  Cabelos: undefined;
  Maquiagem: undefined;
  Perfume: undefined;
  SkinCare: undefined;
  Unha: undefined;
  CorpoEBanho: undefined;
  Politica: undefined;
  Home: undefined;
};

type CategoriaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Categoria'>;

type Props = {
  navigation: CategoriaScreenNavigationProp;
};

const Categoria: React.FC<Props> = ({ navigation }) => {
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.menu}>
      <StatusBar barStyle="light-content" backgroundColor="gray" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.menu1}>
          {/*titulo do menu */}
          <Text style={styles.texto}>Categorias</Text>

          <View style={styles.item}>
            <Icon
              name="circle"
              size={12}
              color="#000"
              style={styles.iconeCategorias}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Cabelos")}>
              <Text style={styles.textoCategoria}> Cabelos </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Icon
              name="circle"
              size={12}
              color="#000"
              style={styles.iconeCategorias}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Maquiagem")}>
              <Text style={styles.textoCategoria}> Maquiagem </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Icon
              name="circle"
              size={12}
              color="#000"
              style={styles.iconeCategorias}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Perfume")}>
              <Text style={styles.textoCategoria}> Perfume </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Icon
              name="circle"
              size={12}
              color="#000"
              style={styles.iconeCategorias}
            />
            <TouchableOpacity onPress={() => navigation.navigate("SkinCare")}>
              <Text style={styles.textoCategoria}> SkinCare </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Icon
              name="circle"
              size={12}
              color="#000"
              style={styles.iconeCategorias}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Unha")}>
              <Text style={styles.textoCategoria}> Unha </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Icon
              name="circle"
              size={12}
              color="#000"
              style={styles.iconeCategorias}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("CorpoEBanho")}
            >
              <Text style={styles.textoCategoria}> Corpo e Banho </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text>
              ------------------------------------------------------------------
            </Text>
          </View>

          <View style={styles.item}>
            <Icon
              name="circle"
              size={12}
              color="#000"
              style={styles.iconeCategorias}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Politica")}>
              <Text style={styles.textoCategoria}> Politica </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Icon
              name="circle"
              size={12}
              color="#000"
              style={styles.iconeCategorias}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.textoCategoria}> Home </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "pink",
    padding: 20,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 }, //deslocamento da sombra
    shadowOpacity: 0.2, // opacidade da sombra
    shadowRadius: 5, //desfoque da sombra
  },
  scrollContainer: {
    paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape
  },
  menu1: {
    padding: 10,
    borderRadius: 15,
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconeCategorias: {
    marginRight: 10,
  },
  textoCategoria: {
    fontSize: 16,
    color: "#000",
  },
});

export default Categoria;
