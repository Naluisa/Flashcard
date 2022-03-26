import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Logo from '../../assets/Logo.svg';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import {auth} from '../../services/config';

export default() => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('@SalvaLogin');
            
            if(token){
                console.log("Teste", token);
                navigation.navigate("Colecoes");
            }else{
                navigation.navigate("Login");
            }
        }
        checkToken();
    }, []);
    return(
        <Container>
            <Logo width="100%" height="160"/>
            <LoadingIcon size="large" color="white"/>
        </Container>
    );
}