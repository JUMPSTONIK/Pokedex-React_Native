import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { PokemonTypes } from "../utils/types";
import { capitalize } from "lodash";
import { getColorByPokemonType } from "../utils/getColorbyPokemonType";

interface pokemon {
  pokemon: PokemonTypes;
}

const PokemonCard = (props: pokemon) => {
  const { pokemon } = props;
  const bgStyles = {
    backgroundColor: getColorByPokemonType(pokemon.type),
    ...styles.bgStyles,
  };

  const goToPokemon = () => {
    console.log(`Vamos al pokemon: ${pokemon.name}`);
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, "0")}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.imagen }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 30,
  },
});

export default PokemonCard;
