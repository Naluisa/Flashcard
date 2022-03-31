import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Preload from '../screens/Preload';
import Login from '../screens/Login';
import LogTeste from '../screens/LogTeste';
import Cadastro from '../screens/Cadastro';
import MainTab from './MainTab';
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

const Stack = createStackNavigator();

//<Stack.Screen name="Preload" component={Preload} />
        //<Stack.Screen name="Login" component={Login} />
//<Stack.Screen name="Cadastro" component={Cadastro} />
//<Stack.Screen name="MainTab" component={MainTab} />
 //        <Stack.Screen name="Colecoes" component={Colecoes} />
 //        
 //
 //                




export default () => (    
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
        >
                        <Stack.Screen name="Jogar4" component={Jogar4 } />
                        <Stack.Screen name="Jogar3" component={Jogar3 } />
                        <Stack.Screen name="Jogar2" component={Jogar2 } />
                        <Stack.Screen name="Jogar" component={Jogar } />
                        <Stack.Screen name="NovoCartao" component={NovoCartao } />

                                    <Stack.Screen name="Cartoes" component={Cartoes} />

                                <Stack.Screen name="Colecoes" component={Colecoes } />


            <Stack.Screen name="ExcluirCartao" component={ExcluirCartao } />

            <Stack.Screen name="EditarCartao" component={EditarCartao } />
                                            <Stack.Screen name="ExcluirColecao" component={ExcluirColecao } />

                                <Stack.Screen name="EditarColecao" component={EditarColecao } />

                                    <Stack.Screen name="NovaColecao" component={NovaColecao} />



                    <Stack.Screen name="Cadastro" component={Cadastro } />

                                <Stack.Screen name="LogTeste" component={LogTeste } />




    </Stack.Navigator>
);