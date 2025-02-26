import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
// import styles from '@/assets/style/styles';

interface CupomProps {
  descontoTexto: string;
  pegaDesconto: () => void;
}

const Cupons: React.FC<CupomProps> = ({ descontoTexto, pegaDesconto }) => {
  return (
    <View style={styles.cardDesconto}>
      <Text style={styles.descTexto}>{descontoTexto}</Text>
      <TouchableOpacity style={styles.copiarCupom} onPress={pegaDesconto}>
        <Text style={styles.botaoDesconto}>Copiar Cupom </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardDesconto: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    elevation: 5,
    alignItems: "center",
  },
  descTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d32f2f",
    marginBottom: 20,
  },
  copiarCupom: {
    backgroundColor: "pink",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  botaoDesconto: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Cupons;
