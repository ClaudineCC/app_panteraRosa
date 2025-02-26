import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface SearchBarProps {
  placeholder: string;
  onChange: (titulo: string) => void; //função de callback
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChange }) => {
  const [titulo, setTitulo] = useState(""); // recebem em value  onChangeText
  const [loading, setLoading] = useState(false); // ou comeca com true

  const handleSearch = () => {
    setLoading(true);
    onChange(titulo); // Chama a função que foi passada como prop (responsável pela chamada à API)
    setLoading(false);
  };

  return (
    <View style={styles.areaContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={titulo}
        onChangeText={setTitulo}
        keyboardType="twitter" //default
      />
      <TouchableOpacity onPress={handleSearch} style={styles.botao}>
        <Icon name="search" size={20} color="#000" style={styles.icone} />
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  areaContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderColor: "gray",
    padding: 10,
    borderWidth: 1,
  },
  botao: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  icone: {
    marginRight: 10,
  },
  errorText: {
    color: "#f00",
    fontSize: 16,
    marginTop: 20,
  },
});

export default SearchBar;
