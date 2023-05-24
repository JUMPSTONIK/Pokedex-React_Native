import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { FC } from "react";
import {
  PokedexStackParamList,
  PokemonTypes,
  PokemonsTypes,
} from "../utils/types";
import { capitalize } from "lodash";
import { getColorByPokemonType } from "../utils/getColorbyPokemonType";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface pokemonCardTypes {
  pokemon: PokemonsTypes;
}

const PokemonCard: FC<pokemonCardTypes> = (props: pokemonCardTypes) => {
  const { pokemon } = props;

  const navigation =
    useNavigation<NativeStackNavigationProp<PokedexStackParamList>>();

  const bgStyles = {
    backgroundColor: getColorByPokemonType(pokemon.type),
    ...styles.bgStyles,
  };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.id}`.padStart(3, "0")}
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
