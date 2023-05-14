import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props: any) {
  const { pokemons, loadPokemons, isNext } = props;

  const loadmore = () => {
    loadPokemons();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => pokemon.id}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.FlatListContentContainer}
      onEndReached={isNext && loadmore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size={"large"}
            style={styles.spinner}
            color={"#AEAEAE"}
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 5,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});
