import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

interface FooterProps {
  HomePress?: () => void;
  CategoriaPress?: () => void;
  AjudaPress?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  HomePress,
  CategoriaPress,
  AjudaPress,
}) => {
  return (
    //rodape fixo na base
    <View style={styles.footer}>
      <TouchableOpacity onPress={HomePress} style={styles.botao}>
        <Icon name="home" size={20} style={styles.icone} />
        <Text style={styles.texto}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={CategoriaPress} style={styles.botao}>
        <Icon name="th-list" size={20} style={styles.icone} />
        <Text style={styles.texto}>Categoria</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={AjudaPress} style={styles.botao}>
        <Icon name="question-circle" size={20} style={styles.icone} />
        <Text style={styles.texto}>Ajuda</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,

    backgroundColor: "pink",
    position: "absolute", // fixa o rodape na base
    bottom: 0,
    left: 0,
    right: 0,
  },
  botao: {
    justifyContent: "center",
    alignItems: "center",
  },
  icone: {
    color: "black",
  },
  texto: {
    color: "black",
    marginTop: 5,
    fontSize: 14,
  },
});

export default Footer;
