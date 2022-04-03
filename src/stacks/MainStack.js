import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogTeste from '../screens/LogTeste';
import Cadastro from '../screens/Cadastro';
import DrawerNavigator from '../stacks/DrawerNavigator';

const Stack = createStackNavigator();

//
//<Stack.Screen name="Login" component={Login} />
//<Stack.Screen name="Cadastro" component={Cadastro} />
//<Stack.Screen name="MainTab" component={MainTab} />
//        <Stack.Screen name="Colecoes" component={Colecoes} />
//        
//
//                         <Stack.Screen name="Preload" component={Preload} />


export default () => (
    <Stack.Navigator
        //initialRouteName="Cadastro"
        screenOptions={{
          headerShown: false
        }}
    >
      <Stack.Screen name="mainApp" component={DrawerNavigator}/>
      <Stack.Screen name="LogTeste" component={LogTeste}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
    </Stack.Navigator>
);