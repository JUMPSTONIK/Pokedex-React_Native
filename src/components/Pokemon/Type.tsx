import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { getColorByPokemonType } from "../../utils/getColorbyPokemonType";
import { capitalize } from "lodash";

interface contentTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokeTypes {
  types: contentTypes[];
}

export default function Type(props: PokeTypes) {
  const { types } = props;

  return (
    <View style={styles.content}>
      {types.map((item) => (
        <View
          key={item.type.url}
          style={{
            backgroundColor: getColorByPokemonType(item.type.name),
            ...styles.pill,
          }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingTop: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
