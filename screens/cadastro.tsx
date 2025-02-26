import React, { useState } from "react";
import {
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

//componentes:
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const Cadastro: React.FC<Props> = ({ navigation }) => {
  // const [db_panteraRosa, setdb_panteraRosa] =useState([]);
  const [nome, setNome] = useState("");
  const [nomeInteiro, setNomeInteiro] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");

  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState(false);

  //conferir senha e confirmar senha
  const senhasIguais = () => {
    if (senha !== confirmaSenha) {
      alert("As senhas não conferem !");
      return false;
    }
    return true;
  };

  // validar email
  const validarEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  // cadastrar novo usuario
  const handleSubmit = async () => {
    if (!senhasIguais()) return;

    //todos os campos devem ser preenchidos
    if (
      !nome ||
      !nomeInteiro ||
      !email ||
      !cpf ||
      !dataNascimento ||
      !telefone ||
      !senha ||
      !confirmaSenha
    ) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    // validar email
    if (!validarEmail(email)) {
      Alert.alert("Erro", "Email inválido.");
      return;
    }

    const novoUsuario = {
      nome,
      nomeInteiro,
      email,
      cpf,
      dataNascimento,
      telefone,
      senha,
    };

    //acesso ao banco
    try {
      const response = await axios.post(
        "http://localhost:3000/db_panteraRosa/tbPessoa",
        novoUsuario
      );
      if (response.status === 200) {
        Alert.alert("Sucesso", "Cadastro enviado com sucesso!");
        navigation.navigate("Home");
      } else {
        Alert.alert(
          "Erro",
          "Ocorreu um erro ao enviar o cadastro. Tente novamente."
        );
      }
    } catch (error) {
      console.error("Erro ao enviar o cadastro:", error);
      Alert.alert("Erro", "Não foi possível enviar o cadastro.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="gray" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header
          HomePress={() => navigation.navigate("Home")}
          SacolaPress={() => navigation.navigate("Sacola")}
          LoginPress={() => navigation.navigate("Login")}
        />

        <View style={styles.containerCadastro}>
          <Text style={styles.texto}>CADASTRO</Text>

          <TextInput
            style={styles.label}
            placeholder="Nome : "
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.label}
            placeholder="Nome Completo: "
            value={nomeInteiro}
            onChangeText={setNomeInteiro}
          />

          <TextInput
            style={styles.label}
            placeholder="Email: "
            value={email}
            onChangeText={setEmail}
          />

          <TextInputMask
            style={styles.label}
            type={"cpf"}
            value={cpf}
            onChangeText={setCpf}
            placeholder="CPF :"
            keyboardType="numeric"
          />

          <TextInputMask
            style={styles.label}
            type={"datetime"}
            options={{
              format: "DD/MM/YYYY",
            }}
            value={dataNascimento}
            onChangeText={setDataNascimento}
            placeholder="DD/MM/AAAA"
          />

          <TextInputMask
            type={"cel-phone"}
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99) ",
            }}
            value={telefone}
            onChangeText={setTelefone}
            style={styles.label}
            placeholder="Telefone:"
            keyboardType="phone-pad"
          />

          <View style={styles.senhaContainer}>
            <TextInput
              style={styles.labelSenha}
              placeholder="Senha:"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!senhaVisivel}
            />
            <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
              <Icon
                name={senhaVisivel ? "eye" : "eye-off"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.senhaContainer}>
            <TextInput
              style={styles.labelSenha}
              placeholder="Confirmar Senha:"
              value={confirmaSenha}
              onChangeText={setConfirmaSenha}
              secureTextEntry={!confirmaSenhaVisivel}
            />
            <TouchableOpacity
              onPress={() => setConfirmaSenhaVisivel(!confirmaSenhaVisivel)}
            >
              <Icon
                name={confirmaSenhaVisivel ? "eye" : "eye-off"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
            <Text style={styles.texto}>Enviar</Text>
          </TouchableOpacity>
        </View>

        {/*fechar scrollView aqui pois o rodape sera fixo */}
      </ScrollView>

      <Footer
        HomePress={() => navigation.navigate("Home")}
        CategoriaPress={() => navigation.navigate("Categoria")}
        AjudaPress={() => navigation.navigate("Ajuda")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: 80, //espaço para garantir que o conteudo nao fique por baixo do radape
  },
  containerCadastro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    display: "flex",
  },
  label: {
    fontSize: 16,
    width: "100%",
    padding: 15,
    marginBottom: 20,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  senhaContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    marginBottom: 20,
    padding: 6,
    width: "100%",
  },
  labelSenha: {
    fontSize: 16,
    flex: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: "gray",
    textAlign: "center",
    fontSize: 16,
    padding: 15,
    borderRadius: 15,
    margin: 15,
  },
});

export default Cadastro;
