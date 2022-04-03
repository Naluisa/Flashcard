import React from "react";

import {createDrawerNavigator} from "@react-navigation/drawer";
import LogTeste from "../screens/LogTeste";
import MainStack from "./MainStack";
import Preload from '../screens/Preload';
import Colecoes from '../screens/Colecoes';
import Cartoes from '../screens/Cartoes';
import NovaColecao from '../screens/NovaColecao';
import NovoCartao from '../screens/NovoCartao';
import EditarColecao from '../screens/EditarColecao';
import ExcluirColecao from '../screens/ExcluirColecao';
import EditarCartao from '../screens/EditarCartao';
import ExcluirCartao from '../screens/ExcluirCartao';
import Jogar from '../screens/Jogar';
import Jogar2 from '../screens/Jogar2';
import Jogar3 from '../screens/Jogar3';
import Jogar4 from '../screens/Jogar4';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator initialRouteName="NovoCartao">
        <Drawer.Screen name="Cartoes" component={Cartoes} />
        <Drawer.Screen name="Jogar4" component={Jogar4}/>
        <Drawer.Screen name="Preload" component={Preload}/>
        <Drawer.Screen name="Jogar3" component={Jogar3}/>
        <Drawer.Screen name="Jogar2" component={Jogar2}/>
        <Drawer.Screen name="Jogar" component={Jogar}/>
        <Drawer.Screen name="NovoCartao" component={NovoCartao}/>
        <Drawer.Screen name="Colecoes" component={Colecoes} screenOptions={{headerTitle: "Cao"}}/>
        <Drawer.Screen name="ExcluirCartao" component={ExcluirCartao}/>
        <Drawer.Screen name="EditarCartao" component={EditarCartao}/>
        <Drawer.Screen name="ExcluirColecao" component={ExcluirColecao}/>
        <Drawer.Screen name="EditarColecao" component={EditarColecao}/>
        <Drawer.Screen name="NovaColecao" component={NovaColecao}/>
        <Drawer.Screen name="Logout" component={LogTeste}/>
      </Drawer.Navigator>
  );
}

export default DrawerNavigator;