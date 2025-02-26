import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

interface CardsAjudaProps {
  iconName: string;
  descricao: string;
  cardsDiversos: () => void;
}

const CardsAjuda: React.FC<CardsAjudaProps> = ({
  iconName,
  descricao,
  cardsDiversos,
}) => {
  return (
    <TouchableOpacity style={styles.figura} onPress={cardsDiversos}>
      <Icon name={iconName} size={24} style={styles.icone} />
      <Text style={styles.descricao}>{descricao}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  figura: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "pink",
    borderRadius: 15,
    // boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
    elevation: 5,
    height: 100,
    width: 210,

    // max-height: 50,
    // max-width:50,

    // marginVertical: 10,
  },
  icone: {
    color: "black",
    marginRight: 10,
  },
  descricao: {
    // marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

export default CardsAjuda;
