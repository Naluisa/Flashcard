import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import { Colecoes } from "../screens/Colecoes";
import LogTeste  from "../screens/LogTeste";
import MainStack from "./MainStack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Cadastro"
    >
      <Drawer.Screen name="Minhas coleções" component={MainStack}screenOptions={{
      drawerStyle: {
        activeTintColor: '#e91e63',
        width: 240,
      },}}/>
      <Drawer.Screen name="Logout" component={LogTeste} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;