import { View, Text } from "react-native";
import React, { createContext } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};
