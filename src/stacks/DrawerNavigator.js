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
      <Drawer.Navigator initialRouteName="Colecoes" screenOptions={{
        drawerStyle: {
          backgroundColor: '#25213E',},drawerItemStyle:{backgroundColor: '#ffff', }}}>
        <Drawer.Screen name="Cartoes" component={Cartoes} options={{
                  drawerItemStyle: { display: 'none' },title: 'Coleção - objetos',headerStyle: {
                    backgroundColor: '#4A4568',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
        }}/>
        <Drawer.Screen name="Jogar4" component={Jogar4} options={{
                  drawerItemStyle: { display: 'none' }, title: 'Coleção - objetos',headerStyle: {
                    backgroundColor: '#4A4568',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
        }}/>
        <Drawer.Screen name="Jogar3" component={Jogar3} options={{
                  drawerItemStyle: { display: 'none' }, title: 'Coleção - objetos',headerStyle: {
                    backgroundColor: '#4A4568',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
        }}/>
        <Drawer.Screen name="Jogar2" component={Jogar2} options={{
                  drawerItemStyle: { display: 'none' }, title: 'Coleção - objetos',headerStyle: {
                    backgroundColor: '#4A4568',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
        }}/>
        <Drawer.Screen name="Jogar" component={Jogar} options={{
                  drawerItemStyle: { display: 'none' }, title: 'Coleção - objetos',headerStyle: {
                    backgroundColor: '#4A4568',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
        }}/>
        <Drawer.Screen name="NovoCartao" component={NovoCartao} options={{
                  drawerItemStyle: { display: 'none' }, title: 'Coleção - objetos',headerStyle: {
                    backgroundColor: '#4A4568',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
        }}/>
        <Drawer.Screen name="Colecoes" component={Colecoes} options={{title: 'Minhas coleções',
      headerStyle: {
            backgroundColor: '#4A4568',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Drawer.Screen name="ExcluirCartao" component={ExcluirCartao} options={{
                  drawerItemStyle: { display: 'none' },title: 'Coleção - objetos',headerStyle: {
                    backgroundColor: '#4A4568',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
        }}/>
        <Drawer.Screen name="EditarCartao" component={EditarCartao} options={{
                  drawerItemStyle: { display: 'none' },title: 'Coleção - objetos',headerStyle: {
                    backgroundColor: '#4A4568',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
        }}/>
        <Drawer.Screen name="ExcluirColecao" component={ExcluirColecao} options={{
                  drawerItemStyle: { display: 'none' },title: 'Minhas coleções',headerStyle: {
                    backgroundColor: '#4A4568',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
        }}/>
        <Drawer.Screen name="EditarColecao" component={EditarColecao} options={{
                  drawerItemStyle: { display: 'none' }, title: 'Minhas coleções',headerStyle: {
                    backgroundColor: '#4A4568',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
        }}/>
        <Drawer.Screen name="NovaColecao" component={NovaColecao} options={{
                  drawerItemStyle: { display: 'none' }, title: 'Minhas coleções',headerStyle: {
                    backgroundColor: '#4A4568',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
        }}/>
        <Drawer.Screen name="Logout" component={LogTeste} />
      </Drawer.Navigator>
  );
}

export default DrawerNavigator;