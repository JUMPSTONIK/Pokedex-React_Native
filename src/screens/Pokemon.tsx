import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonDetaisApi } from "../api/pokemon";
import { NavigationProps, PokemonTypes } from "../utils/types";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Pokemon(props: NavigationProps) {
  const { navigation, route } = props;
  const [pokemon, setPokemon] = useState<PokemonTypes>({
    id: 0,
    name: "",
    types: [],
    order: "",
    imagen: "",
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color={"#fff"}
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, route.params]);

  console.log(pokemon);
  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetaisApi(route.params.id);
        // console.log(response.stats);
        setPokemon({
          id: response.id,
          name: response.name,
          types: response.types,
          order: response.order,
          imagen: response.sprites.other["official-artwork"].front_default,
          stats: response.stats,
        });
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [route.params]);

  return !pokemon.id ? null : (
    <ScrollView>
      <Header
        name={pokemon.name}
        id={pokemon.id}
        imagen={pokemon.imagen}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
