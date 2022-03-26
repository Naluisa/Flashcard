import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import CadastroAmbiente from '../screens/CadastroAmbiente';
import MainTab from './MainTab';
import Ambiente from '../screens/Ambiente';
import Appointments from '../screens/Appointments';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Colecoes from '../screens/Colecoes';
import Cartoes from '../screens/Cartoes';
import NovaColecao from '../screens/NovaColecao';
import NovoCartao from '../screens/NovoCartao';
import EditarColecao from '../screens/EditarColecao';
import EditarCartao from '../screens/EditarCartao';

const Stack = createStackNavigator();

//<Stack.Screen name="Preload" component={Preload} />
        //<Stack.Screen name="Login" component={Login} />
//<Stack.Screen name="Cadastro" component={Cadastro} />
//<Stack.Screen name="CadastroAmbiente" component={CadastroAmbiente} />
//<Stack.Screen name="MainTab" component={MainTab} />
//<Stack.Screen name="Ambiente" component={Ambiente} />
 //        <Stack.Screen name="Colecoes" component={Colecoes} />
 //        <Stack.Screen name="Cartoes" component={Cartoes} />
 //<Stack.Screen name="NovaColecao" component={NovaColecao} />
 //                <Stack.Screen name="NovoCartao" component={NovoCartao } />
 //<Stack.Screen name="EditarColecao" component={EditarColecao } />




export default () => (    
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        
        
                <Stack.Screen name="EditarCartao" component={EditarCartao } />



    </Stack.Navigator>
);