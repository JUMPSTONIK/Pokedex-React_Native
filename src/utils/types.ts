
import { NavigationAction, NavigationProp, NavigationState } from "@react-navigation/native";

export interface PokemonsTypes {
    id: number;
    name: string;
    type: string;
    order: string;
    imagen: string;

  }

export type HeaderPokemon = Pick<PokemonsTypes, Exclude<keyof PokemonsTypes, 'order'>>
export  interface PokemonTypeColors {
    [key: string]: string;
  }

  export type PokedexStackParamList = {
    Pokedex: undefined;
    Pokemon: {
      id: number;
    };
  };

  export interface NavigationProps {
    navigation: {
      addListener: (type: string, callback: Function) => void;
      canGoBack: () => boolean;
      dispatch: (action: NavigationAction) => void;
      getId: () => string;
      getParent: () => NavigationProp<any, any> | undefined;
      getState: () => NavigationState;
      goBack: () => void;
      isFocused: () => boolean;
      jumpTo: (name: string, params?: object) => void;
      navigate: (name: string, params?: object) => void;
      pop: (n?: number, params?: object) => void;
      popToTop: () => void;
      push: (name: string, params?: object) => void;
      removeListener: (type: string, callback: Function) => void;
      replace: (name: string, params?: object) => void;
      reset: (state: NavigationState) => void;
      setOptions: (options: object) => void;
      setParams: (params: object) => void;
    };
    route: {
      key: string;
      name: string;
      params: any;
      path?: string;
    };
  }

  export interface PokemonTypes {
    id: number;
    name: string;
    types: any;
    order: string;
    imagen: string;
    stats?: any
  }