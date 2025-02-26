import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";


import Icon from "react-native-vector-icons/FontAwesome";

interface StarRatingProps {
  maximoEstrelas?: number;
  initialRating?: number;
  onRatingChange?: (rating: number) => void; //função de retorno que é chamada quando a classificação muda.
}

const StarRating: React.FC<StarRatingProps> = ({
  maximoEstrelas = 5,
  initialRating = 0,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(initialRating);

  const handlePress = (star: number) => {
    setRating(star);
    if (onRatingChange) {
      onRatingChange(star);
      console.log("Nova avaliação:", star);
    }
  };

  return (
    <View style={styles.rating}>
      {[...Array(maximoEstrelas)].map((_, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(index + 1)}>
          <Icon
            name={index < rating ? "star" : "star-o"}
            size={22}
            style={styles.star}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  rating: { flexDirection: "row" },
  star: { color: "#FFD700", marginRight: 5 },
});

export default StarRating;
