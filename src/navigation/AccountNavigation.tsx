import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";
import Account from "../screens/Account";

const Stack = createNativeStackNavigator();

export default function AccountsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          title: "Mi cuenta",
        }}
      />
    </Stack.Navigator>
  );
}
